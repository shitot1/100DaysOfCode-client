import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from 'react-router-dom';
import GameCard from "../Components/GameCard/GameCard";
import { Typography } from '@material-ui/core';
import SideBar from '../Components/Sidebar/Sidebar'
const Playground = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login')
            }
        } else {
            navigate('/login')
        }
    }, []);







    return (
        <>
            <Typography variant='h2' align="center" style={{ marginBottom: '5vh', marginTop: '2vh' }}> User's playGround</Typography>
            <SideBar />
            <GameCard />
        </>
    );
}

export default Playground;