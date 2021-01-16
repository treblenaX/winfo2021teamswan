import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Project } from './api/Project';
import { TimelineTile } from './api/TimelineTile';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';


// styles
const useStyles = makeStyles((theme) => ({
    summary: {
        display: 'flex',
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    content: {
        flex: '1 0 auto',
    },

    media: {
        flex: '1 0 auto',
        width: 300,
        height: 300,
    },
}));

// displays the project summary
function ProjectSummary(project: Project) {
    const classes = useStyles();
    return (
        <Card className={classes.summary}>
            <CardMedia 
                className={classes.media}
                image="https://cdn.discordapp.com/attachments/796478136866963477/799822623168921610/unknown.png"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h6">Project Title</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Typography>
                </CardContent>
            </div>
        </Card>
    );
}

function ProjectTimeline(items: TimelineTile[]) {
    const classes = useStyles();
    return (
        <Card>
            {[0,1,2].map((value) => {
                return (
                    <Grid key={value} item>
                        <Card className={classes.content}>
                            <h1>Heading</h1>
                            <p>Some body</p>
                        </Card>
                    </Grid>
                );
                
            })}
        </Card>
    );
}

function TimelineCard(tile: TimelineTile) {
    return <h1>Card</h1>;
}

// projectId: the ID of the project to create the page for
function ProjectPage(project: Project) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <ProjectSummary {...project} />
            <ProjectTimeline {...(project.timeline)} />
        </Container>
    );
}

export default ProjectPage;