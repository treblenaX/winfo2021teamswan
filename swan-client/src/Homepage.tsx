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
import { TimelineTile } from './api/TimelineTile';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffffff',
        main: '#f3e5f5',
        dark: '#c0b3c2',
        contrastText: '#000000',
      },
      secondary: {
        light: '#edffff',
        main: '#baddf9',
        dark: '#89abc6',
        contrastText: '#000000',
      },
    },
  });

// styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        paddingTop: theme.spacing(2),
        backgroundColor: '#c8e6c9',
        height: '1000vw',
    },
    appbar: {
        color: '#000000',
        backgroundColor: "#e1f5fe",
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
      backgroundColor: '#ffffff',
    },
    controls: {
      align: 'right',
    },
    button: {
      backgroundColor: '#ffffff',
      color: '#000',
    },
    checkbox: {
        color: '#ffffff',
        '&$checked': {
            color: '#ffffff',
        },
    }
}));

// todo: 
// - pass in a onClickListener to FormControlLabel to handle the
// clicking of the checkbox
// - handle the clicking of the Post New Project button
// function Controls(state: any, callback: any) {
//     const classes = useStyles();
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h1" className={classes.title}>
//                     Agora
//                 </Typography>
//                 <FormControlLabel
//                     control={<Checkbox checked={state.isOpenOnly} onClick={callback} name="isOpenOnly" />}
//                     label="Is Open"
//                 />
//                 <Button variant="contained" color="secondary" href="#contained-buttons">
//                     Post New Project
//                 </Button>
//             </Toolbar>
//         </AppBar>
//     );
// }

function TimelineItem(item: TimelineTile) {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Card className={classes.card}>
                <Typography variant="caption">{item.dateTime}</Typography>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body2">{item.content}</Typography>
            </Card>
        </Grid>
    );
}

function Timeline(props: {items: TimelineTile[] }) {
    const {items} = props;
    return (
        <Grid container >
            {
                items.map((item, index) => (
                  <TimelineItem title={item.title} authorId={item.authorId} dateTime={item.dateTime} projectId={item.projectId} content={item.content} />
                ))
            }
        </Grid>
    );
}

// todo: add dynamic state functionality
function Homepage(props: {items: TimelineTile[] }) {
    const {items} = props;
    const [state, setState] = React.useState({
        checkedA: true,
    });

    ///////////////////////////////////////////////////////
    // todo: trigger a change to display only open projects
    ///////////////////////////////////////////////////////
    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //////////////////////////////////////////////
    // todo: bring user to the create project page
    //////////////////////////////////////////////
    const handleButton = (event: any) => {
        console.log('New Project Button');
    }

    // replace props with TypeScript typed information
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <div>
                        <Typography variant="h2" className={classes.title}>
                            Agora
                        </Typography>
                    </div>
                    <div className={classes.controls}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleCheckbox} name="checkedA" className={classes.checkbox} />}
                            label="Is Open Only"
                        />
                        <Button onClick={handleButton} variant="contained" className={classes.button}>
                            Post New Project
                        </Button>
                    </div>
                    
                </Toolbar>
            </AppBar>
            <Timeline items = {items} />
        </Container>
    );
}

export default Homepage;