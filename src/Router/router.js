import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound'
import Home from '../Pages/Home';
import Playground from '../Pages/Playground';
import PracticeGame from '../Components/Trivia/Trivia';

const ReactRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/playground" element={<Playground />} />
            <Route path="/trivia" element={<PracticeGame />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
export default ReactRouter;