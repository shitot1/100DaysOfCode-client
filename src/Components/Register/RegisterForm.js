import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Link } from '@material-ui/core';
import './RegisterStyle.css';


const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await response.json();

        if (data.status === 'ok') {
            navigate('/login')
        }
    }

    return (

        <Container component="main" maxWidth="xs" >
            <section id="logo"></section>
            <Typography component="h1" variant="h4" style={{ textAlign: 'center' }}>Sign up</Typography>
            <Box component="form" onSubmit={registerUser} noValidate sx={{ mt: 1 }}>
                <TextField id="outlined-basic" label="Full Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth required margin="normal" autoFocus />
                <TextField id="outlined-basic" label="Email Address" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" autoComplete="email" />
                <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required margin="normal" autoComplete="current-password" />
                <Button variant="contained" color="primary" type="submit" value="Login" fullWidth sx={{ mt: 3, mb: 2 }} id="submit">
                    Sign UP
                </Button>
                <Link href="/login" variant="body2" id="link">
                    {"Already have an account? Sign in"}
                </Link>
            </Box>
        </Container>
    );
}

export default RegisterForm;