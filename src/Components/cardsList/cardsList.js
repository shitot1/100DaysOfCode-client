import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Playgrounds = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://meadaysofcode.herokuapp.com/api/users/playgrounds')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setItems(data);
            })
    }, []);
    const category = ['Coding challenge', 'Practice', 'Glossary'];
    let catNumber = 0;
    return (
        <>
            <Typography variant='h2' align="center" marginBottom={4}> User's playGround</Typography>
            <Container align='center' maxWidth='lg' disableGutters='true' style={{ border: "solid 1px #e3e3e3", borderRadius: "25px" }} >

                <Grid container marginBottom={4} justifyContent={'center'}>
                    {items.map(item => {
                        return (
                            <>
                                {item.id % 3 === 1
                                    ? <Typography variant='h5' align="left" margin={2.5} marginLeft={6} width={'100%'}>{category[catNumber++]}</Typography>
                                    : ''}
                                <Grid item md={4} marginBottom={1}>
                                    <Card sx={{ maxWidth: 300 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="230"
                                                image={item.img}
                                                alt="green "
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.subtitle}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}

export default Playgrounds;