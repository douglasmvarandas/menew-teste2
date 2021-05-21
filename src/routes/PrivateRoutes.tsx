import React, { useContext } from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import AuthContext from '../contexts/auth';

import Home from '../pages/Home';


const AuthRoute: React.FC<RouteProps> = ({...rest}) => {
  const {signed} = useContext(AuthContext)

	if (signed) return <Route {...rest} />;

	return null;
};

const PrivateRoutes: React.FC = () => {
 return (
     <AuthRoute path="/app" component={Home} />
 );
};

export default PrivateRoutes;