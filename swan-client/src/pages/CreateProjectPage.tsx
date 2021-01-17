import { Button, Card, Checkbox, Container, FormControlLabel, TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {createProject} from "../api/Project";
import { useHistory } from 'react-router-dom';
import { demoHomePage } from '../index'; 
import { createTile, Tile } from '../api/Tile';

function CreateProjectPage() {
    const history = useHistory();
    
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },

        container: {
            backgroundColor: '#e1f5fe',
            height: '1000',
        },

        dialogue: {
            padding: theme.spacing(2),
        }
    }));

    const [state, setState] = React.useState({
        projectName: "",
        projectDescription: "",
        projectGithubUrl: "",
        projectIsOpen: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const onProjectNameUpdate = (event: any) => {
        state.projectName = event.target.value;
    };

    const onProjectDescriptionUpdate = (event: any) => {
        state.projectDescription = event.target.value;
    };

    const onProjectGitHubUrlUpdate = (event: any) => {
        state.projectGithubUrl = event.target.value;
    }

    // on create button pushed
    //////////////////////////////////////////////////////////////////////
    // todo: trigger a request to the service with the properties in state
    //////////////////////////////////////////////////////////////////////
    const onCreateProject = (event: any) => {
        const myProj = {
            title: state.projectName,
            githubUrl: state.projectGithubUrl,
            description: state.projectDescription,
            acceptingVolunteers: state.projectIsOpen
        }

        const d: Date = new Date();

        const myTile: Tile = {
            title: myProj.title,
            dateTime: d.toDateString(),
            content: myProj.description
        }

        console.log(JSON.stringify(myProj));
        createProject(myProj)
          .then();
        createTile(myTile)
            .then(() => demoHomePage());
    };

    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Card className={classes.dialogue}>
                <div>
                    <TextField onChange={onProjectNameUpdate} id="project-name" label="Project Name"/>
                </div>
                <div>
                    <TextField onChange={onProjectDescriptionUpdate} id="project-description" multiline label="Description"/>
                </div>
                <div>
                    <TextField onChange={onProjectGitHubUrlUpdate} id="project-github-url" label="GitHub Repo URL"/>
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox id="project-is-open" onChange={handleChange} checked={state.projectIsOpen} name="projectIsOpen" />}
                        label="Open to Volunteers"
                    />    
                </div>
                <div>
                    <Button onClick={onCreateProject} variant="contained">Create Project</Button>
                </div>
            </Card>
        </Container>
    );
}

export default CreateProjectPage;