import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.jpeg';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Kundenzitate</Typography> 
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={10} md={8} lg={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4} lg={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>  
                    </Grid>
                </Container> 
            </Grow>
        </Container>
    )
}

export default App