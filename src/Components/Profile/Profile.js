import { useEffect, useState } from 'react';
import { Container, Button, Typography } from "@mui/material";
import styles from './Profile.module.css';
import CountdownTimer from '../Countdown/CountdownTimer';

const Profile = () => {
    const [details, setDetails] = useState('');
    const [day, setDay] = useState(0);
    useEffect(() => {
        fetch(`https://meadaysofcode.herokuapp.com/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDetails(data[0]);
                const dateNow = (Date.parse(new Date()) / 1000) / 86400
                const regTime = (Date.parse(data[0].registeredAt) / 1000) / 86400
                setDay(parseInt(dateNow - regTime));
            })
    }, []);
    return (
        <>
            <Container className={styles.container} align='center' maxWidth='md' >
                <Typography align='left'className={styles.profile} component="h1" variant="h4" >My Profile</Typography>
                <Typography component="h1" variant="h4" >Hey {details.name}!</Typography>
                <Typography align='left' component="h1" variant="subtitle2" >Day of challenge: {day}</Typography>
                <Button variant="contained" href="/countdowntimer">
                Check your days
                </Button>
            </Container>
        </>
    );
}

export default Profile;