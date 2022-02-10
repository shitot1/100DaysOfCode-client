import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import "./CountdownTimer.css"
import { getRemainingTimeUntilMSTimestamp } from './CountdownTimerUtils';
import SideBar from '../Sidebar/Sidebar'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ CountdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(CountdownTimestampMs);

        }, 1000);
        return () => clearInterval(intervalId);

    }, [CountdownTimestampMs]);


    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMSTimestamp(countdown));
    }

    return (
        <>
            <SideBar />
        <Container style={{ marginTop: '20vh' }} component="main" maxWidth="md">
            <div className="CountdownTimer" style={{ marginLeft: '18vh' }}>
                <div className="countdown-timer">
                    <span>{remainingTime.days}</span>
                    <span>days</span>
                    <span className="two-numbers">{remainingTime.hours}</span>
                    <span>hours</span>
                    <span className="two-numbers">{remainingTime.minutes}</span>
                    <span>minutes</span>
                    <span className="two-numbers">{remainingTime.seconds}</span>
                    <span>seconds</span>
                </div>
            </div>
        </Container>
        </>

    );
}

export default CountdownTimer;