import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistroForm from '../components/form/RegistroForm';
const Registro = () => {

    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials);
            localStorage.setItem('user', c);
            navigate('/');
        }
    });

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    });

    return (
        <div>
            <RegistroForm onSubmit={(e) => setCredentials(e)} />
            <Link to="/">Login</Link>
        </div>
    );
}

export default Registro;
