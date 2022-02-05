import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from 'react-router-dom';
import GameCard from "../Components/GameCard/GameCard";

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

    // const [date1, setDate1] = useState(true);
    // const [date2, setDate2] = useState(true);
    // const [date3, setDate3] = useState(true);
    // const [date4, setDate4] = useState(true);
    // const [date5, setDate5] = useState(true);
    // let d = 1644007673
    // let dateNow = Date.parse(new Date()) / 1000
    // useEffect(() => {
    //     if (dateNow - d > 500) { setDate1(false) }
    //     if (dateNow - d > 3060) { setDate2(false) }
    //     if (dateNow - d > 3260) { setDate3(false) }
    //     if (dateNow - d > 3290) { setDate4(false) }
    //     if (dateNow - d > 5300) { setDate5(false) }
    // }, []);









    return (
        <GameCard />
    );
}

export default Playground;