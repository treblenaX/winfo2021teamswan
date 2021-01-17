import { Button, Checkbox, Container, FormControlLabel, TextField } from '@material-ui/core';
import React from 'react';

function CreateProjectPage() {

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
        console.log('Create Project Button');
        console.log(state);
    };

    return (
        <Container maxWidth="lg">
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
        </Container>
    );
}

export default CreateProjectPage;