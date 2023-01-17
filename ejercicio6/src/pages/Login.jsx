import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/form/LoginForm';

const Login = () => {

    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();

    /* Checking if there is a user in localStorage. */
    const user = localStorage.getItem('user') || null;

    /* Checking if there is a user in localStorage. If there is, it will navigate to the dashboard. */
    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials);
            localStorage.setItem('user', c);
            navigate('/dashboard');
        }
    });

     /* Checking if there is a user in localStorage. If there is, it will navigate to the dashboard. */
     useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    });

    return (
        <div>
        <LoginForm onSubmit={(e) => setCredentials(e)} />
        <Link to="/registro">Registrarse</Link>
        </div>
    );
}

export default Login;
