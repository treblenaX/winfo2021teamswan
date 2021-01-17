import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Project } from '../api/Project';
import { Tile } from '../api/Tile';
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
function ProjectSummary(project: any) {
    const p  = project.project;
    const classes = useStyles();
    return (
        <Card className={classes.summary}>
            <CardMedia 
                className={classes.media}
                image={project.image}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography variant="body1">{p.description}</Typography>
                    <Typography variant="body1">
                        <a href={p.githubUrl}>GitHub</a>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}

// todo: update timeline items with ones from project
function ProjectTimeline(props: {items: Tile[] }) {
    const {items} = props;
    const classes = useStyles();
    return (
        <Card>
            {items.map((item, index) => {
                return (
                    <Grid key={index} item className={classes.content}>
                        <h1>item.title</h1>
                        <p>item.description</p>
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
            {/* <ProjectTimeline items = {project.timeline as Tile[]} /> */}
        </Container>
    );
}

export default ProjectPage;