import React, { useState } from 'react'; // Import useState
import { Button, Container, Form, Row, Col, Badge } from 'react-bootstrap';
import { TagsInput } from "react-tag-input-component"
import Project from './Project';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProjectForm() {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        short_desc: '',
        display_img_path: '',
        full_desc: '',
        languages: [],
        technologies: [],
        selectedFile: null,
        selectedFileName: ''
    });   

    const [showProjectPreview, setShowProjectPreview] = useState(false);
    const [showProjectCard, setShowProjectCard] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const apiUrl = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT + '/api/add_project/';

            const token = localStorage.getItem('access_token');

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            const requestData = {
                title: formData.title,
                date: formData.date,
                short_desc: formData.short_desc,
                display_img_path: formData.display_img_path,
                full_desc: formData.full_desc,
                languages: formData.languages,
                technologies: formData.technologies,
            };

            await axios.post(apiUrl, requestData, { headers });

            // Navigate to projects page upon successful form submission
            navigate("/projects");

        } catch (error) {
            console.log()
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const markdownText = event.target.result;

                setFormData((prevData) => ({
                    ...prevData,
                    full_desc: markdownText,
                    selectedFile: file,
                    selectedFileName: file.name,
                }));
            };
            reader.readAsText(file);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                full_desc: '',
                selectedFile: null,
                selectedFileName: '',
            }));
        }
    };

    const handleLanguagesChange = (newLanguages) => {
        setFormData({
            ...formData,
            languages: newLanguages
        });
    };
    
    const handleTechnologiesChange = (newTechnologies) => {
        setFormData({
            ...formData,
            technologies: newTechnologies
        });
    };

    // Option to change the file
    const handleChangeFile = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = ''; // Reset the file input value
        }

        setFormData((prevData) => ({
            ...prevData,
            full_desc: '',
            selectedFile: null,
            selectedFileName: '', // Clear the selected file name
        }));
    };

    return (
        <Container className='p-3'>
                {showProjectPreview ? (
                    <div>
                        <Project title={formData.title} full_desc={formData.full_desc}></Project>
                        <Button variant='outline-danger' onClick={() => setShowProjectPreview(false)}>Close Preview</Button>
                    </div>                        
                ) : showProjectCard ? (
                    <Container>
                        <Row className='mb-3'>
                            <Col className='d-flex justify-content-center'>
                            <ProjectCard 
                                title={formData.title} 
                                short_desc={formData.short_desc} 
                                imageUrl={formData.display_img_path} 
                                languages={formData.languages} 
                                technologies={formData.technologies}
                                >
                            </ProjectCard>
                            </Col>                        
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='outline-danger' onClick={() => setShowProjectCard(false)}>Close Preview</Button>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <Form onSubmit={handleSubmit} className='text-start'>
                        <h1 className='text-center mb-5'>Add Project</h1>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter title" value={formData.title} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                                </Form.Group>                
                            </Col>                            
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Display Image</Form.Label>
                                <Form.Control type="text" name="display_img_path" placeholder="Enter image url" value={formData.display_img_path} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formShortDesc">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control as="textarea" rows={3} name="short_desc" value={formData.short_desc} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            {/* Full Description */}
                            <Form.Group className="mb-3" controlId="formFullDesc">
                                <Form.Label>Full Description Markdown</Form.Label>
                                {!formData.selectedFileName ? (
                                    <Form.Control
                                        type="file"
                                        accept=".md"
                                        name="full_desc"
                                        onChange={handleFileUpload}
                                    />
                                ) : (
                                    <p>
                                        Selected File: {formData.selectedFileName}
                                        <Button variant="link" onClick={handleChangeFile}>
                                            Change File
                                        </Button>
                                    </p>
                                )}
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <TagsInput
                                    value={formData.languages}
                                    onChange={handleLanguagesChange}
                                    name="Languages"
                                    placeHolder="Enter Languages"
                                />
                            </Col>
                        </Row>
                        <Row className='mt-3 mb-3'>
                            <Col>
                                <TagsInput
                                    value={formData.technologies}
                                    onChange={handleTechnologiesChange}
                                    name="Technologies"
                                    placeHolder="Enter Technologies"
                                />
                            </Col>
                        </Row>
                        <Button variant="outline-dark" type="submit">
                            Add Project
                        </Button>
                        <Button variant="outline-success" className='m-2' onClick={() => setShowProjectPreview(true)}>
                            Preview Project Display
                        </Button>
                        <Button variant='outline-success' onClick={() => setShowProjectCard(true)}>
                            Preview Project Card
                        </Button>
                    </Form>
                )}        
        </Container>
      );
}

export default AddProjectForm;