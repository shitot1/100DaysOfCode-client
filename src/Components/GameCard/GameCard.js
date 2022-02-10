import { Container, Grid, Typography, CardActionArea, CardMedia, CardContent, Card } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';



const SEC_IN_DAY = 86400;
const GameCard = () => {
    const [locked2, setLocked2] = useState(true);
    const [locked3, setLocked3] = useState(true);
    const [locked5, setLocked5] = useState(true);
    const [locked6, setLocked6] = useState(true);
    const [locked8, setLocked8] = useState(true);
    const [locked9, setLocked9] = useState(true);

    useEffect(() => {
        fetch(`https://meadaysofcode.herokuapp.com/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const dateNow = Date.parse(new Date()) / 1000
                const regTime = (Date.parse(data[0].registeredAt) / 1000)
                if (dateNow - regTime >= SEC_IN_DAY) setLocked2(false);
                if (dateNow - regTime >= SEC_IN_DAY * 2) setLocked3(false);
                if (dateNow - regTime >= SEC_IN_DAY) setLocked5(false);
                if (dateNow - regTime >= SEC_IN_DAY * 2) setLocked6(false);
                if (dateNow - regTime >= SEC_IN_DAY) setLocked8(false);
                if (dateNow - regTime >= SEC_IN_DAY * 2) setLocked9(false);
            })
    }, []);

    return (
        <>
            <Container align='center' maxWidth='md' >
                <Grid container justifyContent={'center'} spacing={8}>

                    <Typography style={{ width: '100%' }} align="left" gutterBottom variant="h5" component="div">Practice</Typography>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} onClick={() => localStorage.setItem('card', 1)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/surf.jpeg"
                                    alt="green"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 1
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} disabled={locked2} onClick={() => localStorage.setItem('card', 2)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/flag.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Stage 2</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} disabled={locked3} onClick={() => localStorage.setItem('card', 3)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/golf.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 3
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Typography style={{ width: '100%' }} align="left" gutterBottom variant="h5" component="div">Coding Challenge</Typography>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} onClick={() => localStorage.setItem('card', 4)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/misperet.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 1
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} disabled={locked5} onClick={() => localStorage.setItem('card', 5)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/moo.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 2
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} disabled={locked6} onClick={() => localStorage.setItem('card', 6)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/moon.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 3
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Typography style={{ width: '100%' }} align="left" gutterBottom variant="h5" component="div">Glossary</Typography>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} onClick={() => localStorage.setItem('card', 7)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/rocket.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 1
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} disabled={locked8} onClick={() => localStorage.setItem('card', 8)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/broom.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 2
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea component={RouterLink} to={'/trivia'} disabled={locked9} onClick={() => localStorage.setItem('card', 9)}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/star.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 3
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>



                </Grid>
            </Container>
        </>
    );
}

export default GameCard;