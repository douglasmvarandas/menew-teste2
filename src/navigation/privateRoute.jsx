import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from './routes';

const PrivateRoute = ({ isLogged }) => {
    return isLogged === null ? <Navigate to={LOGIN} /> : <Outlet />;
}

export default PrivateRoute;