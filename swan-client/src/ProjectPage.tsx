import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Project } from './api/Project';
import { Tile } from './api/Tile';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';


// styles
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        backgroundColor: '#c8e6c9',
        height: '1000vw',
    },

    summary: {
        display: 'flex',
        backgroundColor: '#e1f5fe',
        marginBottom: theme.spacing(2),
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    content: {
        flex: '1 0 auto',
        paddingLeft: theme.spacing(2),
    },

    media: {
        flex: '1 0 auto',
        width: 300,
        height: 300,
    },

    timelineItem: {
    },

}));

// displays the project summary
function ProjectSummary(project: Project) {
    const classes = useStyles();
    return (
        <Card className={classes.summary}>
            <CardMedia 
                className={classes.media}
                image={project.thumbnailUrl}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                    <Typography variant="body1">
                        <a href={project.githubUrl}>GitHub</a>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}

// todo: update timeline items with ones from project
function ProjectTimeline(items: Tile[]) {
    const classes = useStyles();
    return (
        <Card>
            {[0,1,2].map((value) => {
                return (
                    <Grid key={value} item className={classes.content}>
                        <h1>Heading</h1>
                        <p>Some body</p>
                    </Grid>
                );
            })}
        </Card>
    );
}

function TimelineCard(tile: Tile) {
    return <h1>Card</h1>;
}

// projectId: the ID of the project to create the page for
function ProjectPage(project: Project) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            <ProjectSummary {...project} />
            <ProjectTimeline {...(project.timeline)} />
        </Container>
    );
}

export default ProjectPage;