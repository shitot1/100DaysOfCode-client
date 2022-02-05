import { Container, Grid, Typography, CardActionArea, CardMedia, CardContent, Card } from '@material-ui/core';
import { useEffect, useState } from 'react';
import cards from '../../Data/cards.json'



const SEC_IN_DAY = 86400;
const GameCard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(cards);
    }, []);



    const [regDate, setRegDate] = useState(0);
    const [locked2, setLocked2] = useState(true);
    const [locked3, setLocked3] = useState(true);
    const [locked4, setLocked4] = useState(true);
    const [locked5, setLocked5] = useState(true);
    const [locked6, setLocked6] = useState(true);
    const [locked7, setLocked7] = useState(true);
    const [locked8, setLocked8] = useState(true);
    const [locked9, setLocked9] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3001/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const dateNow = Date.parse(new Date()) / 1000
                const regTime = (Date.parse(data[0].registeredAt) / 1000)
                if (dateNow - regTime >= SEC_IN_DAY) setLocked2(false);
                if (dateNow - regTime >= SEC_IN_DAY * 2) setLocked3(false);
                if (dateNow - regTime >= SEC_IN_DAY * 3) setLocked4(false);
                if (dateNow - regTime >= SEC_IN_DAY * 4) setLocked5(false);
                if (dateNow - regTime >= SEC_IN_DAY * 5) setLocked6(false);
                if (dateNow - regTime >= SEC_IN_DAY * 6) setLocked7(false);
                if (dateNow - regTime >= SEC_IN_DAY * 7) setLocked8(false);
                if (dateNow - regTime >= SEC_IN_DAY * 8) setLocked9(false);
            })
    }, []);






    return (
        <>
            <Typography variant='h2' align="center" style={{ marginBottom: '5vh', marginTop: '2vh' }}> User's playGround</Typography>
            <Container align='center' maxWidth='md' >
                <Grid container justifyContent={'center'} spacing={8}>


                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/surf.jpeg"
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
                            <CardActionArea disabled={locked2}>
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
                            <CardActionArea disabled={locked3}>
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

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea disabled={locked4}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/misperet.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 4
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea disabled={locked5}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/moo.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 5
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea disabled={locked6}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/moon.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 6
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea disabled={locked7}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/rocket.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 7
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea disabled={locked8}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/broom.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 8
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={4} >
                        <Card sx={{ maxWidth: 300 }} >
                            <CardActionArea disabled={locked9}>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="../../static/star.jpeg"
                                    alt="green "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stage 9
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