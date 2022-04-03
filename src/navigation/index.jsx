import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { LOGIN, SIGNUP, DASHBOARD } from './routes'

import Login from '../pages/Login/index';
import SignUp from '../pages/SignUp/index';
import Dashboard from '../pages/Dashboard/index';

const Navigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={SIGNUP} element={<SignUp />} />
                    <Route path={DASHBOARD} element={<Dashboard />} />
                </Routes>
            </Router>
        </>

    );
}

export default Navigation;