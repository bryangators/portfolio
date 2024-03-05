import React from 'react';
import { Container } from 'react-bootstrap';
import AddProjectForm from '../components/AddProjectForm';

function AddProject() {

    return (
        <Container className='mt-5 mx-auto'>   
            <AddProjectForm></AddProjectForm>       
        </Container>    
    );
}                                                                                                       

export default AddProject;