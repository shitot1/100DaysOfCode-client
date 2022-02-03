import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound'
import  Home  from '../Pages/Home';

const ReactRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
export default ReactRouter;