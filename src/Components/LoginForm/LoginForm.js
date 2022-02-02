import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, FormControlLabel, Checkbox, Link } from '@material-ui/core';
import './LoginStyle.css';


const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } else {
            alert('Please check your username and password')
        }
    }
    return (

        <Container component="main" maxWidth="xs" >
            <section id="logo"></section>
            <Typography component="h1" variant="h4" style={{ textAlign: 'center' }}>Sign in</Typography>
            <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" autoComplete="email" autoFocus />
                <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required margin="normal" autoComplete="current-password" />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button variant="contained" color="primary" type="submit" value="Login" fullWidth sx={{ mt: 3, mb: 2 }} id="submit">
                    Sign in
                </Button>
                <Link href="/register" variant="body2" id="link">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Box>
        </Container>
    );
}

export default LoginForm;