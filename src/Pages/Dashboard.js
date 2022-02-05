import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login')
            } else {
                console.log('accepted');
            }
        } else {
            navigate('/login')
        }
    }, []);




    return (
        <>
            <h1>Dashboard</h1>
            <a href="./playground">playground</a>
            <div onClick={logoutUser}>logout</div>
        </>
    );
}

export default Dashboard;