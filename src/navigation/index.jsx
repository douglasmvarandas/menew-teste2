import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useSelector } from 'react-redux';

import PrivateRoute from './privateRoute'
import { LOGIN, SIGNUP, DASHBOARD } from './routes'

import Login from '../pages/Login/index';
import SignUp from '../pages/SignUp/index';
import Dashboard from '../pages/Dashboard/index';

const Navigation = () => {
    const user = useSelector(state => state.user)

    return (
        <>
            <Router>
                <Routes>
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={SIGNUP} element={<SignUp />} />
                    <Route element={<PrivateRoute isLogged={user} />}>
                        <Route path={DASHBOARD} element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default Navigation;