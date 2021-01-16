import { Button, Checkbox, Container, FormControlLabel, TextField } from '@material-ui/core';
import React from 'react';

function CreateProjectPage() {
    return (
        <Container maxWidth="lg">
            <div>
                <TextField label="Project Name"/>
            </div>
            <div>
                <TextField multiline label="Description"/>
            </div>
            <div>
                <TextField label="GitHub Repo URL"/>
            </div>
            <div>
                <FormControlLabel
                    control={<Checkbox checked={false} name="openToVolunteers" />}
                    label="Open to Volunteers"
                 />    
            </div>
            <div>
                <Button variant="contained">Create Project</Button>
            </div>
        </Container>
    );
}

export default CreateProjectPage;