import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0,
      margin: theme.spacing(4),
    },
    card: {
      padding: theme.spacing(8),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
}));

// todo: 
// - pass in a onClickListener to FormControlLabel to handle the
// clicking of the checkbox
// - handle the clicking of the Post New Project button
function Controls(props: any) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h1" className={classes.title}>
                    Agora
                </Typography>
                <FormControlLabel
                    control={<Checkbox checked={props.filterOnlyOpen} onClick={props.onFilterOnlyOpenClicked} name="checkedA" />}
                    label="Is Open"
                />
                <Button variant="contained" color="secondary" href="#contained-buttons">
                    Post New Project
                </Button>
            </Toolbar>
        </AppBar>
    );
}

// todo: Timeline() should accept an array of TimelineItems to display,
// then proceed to display those items
function Timeline(props: any) {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <h2>Card</h2>
                </Card>
            </Grid>
        </Grid>
    );
}

// todo: add dynamic state functionality
function Homepage() {
    const props = {
        filterOnlyOpen: false,
        // timelineItems: TimelineItems[];
        // onFilterOnlyOpenClicked: () => {console.log('CLICK')},
    };

    // replace props with TypeScript typed information
    return (
        <Container maxWidth="lg">
            <Controls props={props} />
            <Timeline props={props}/>
        </Container>
    );
}

export default Homepage;