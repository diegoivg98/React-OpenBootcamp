import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskDashboard from '../pages/TaskDashboard';
import Login from '../pages/Login';
import Registro from '../pages/Registro';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<TaskDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
