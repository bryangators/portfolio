import React from 'react';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <Container className="home-page text-start p-2">
            <Row className='mt-5'>
                <Col md={8} className="mx-auto">
                    <h2>Experience</h2>
                    <strong>Software Engineer</strong> at <Link to={"https://www.dataannotation.tech/"} target="_blank" rel="noopener noreferrer">Data Annotation Tech</Link> (2024-Present)
                    <ul>
                        <li>Work with AI chatbots in order to measure their progress, as well as write and evaluate code.</li>
                        <li>Evaluate code quality produced by AI models for correctness and performance.</li>
                    </ul>
                    <strong>Software Engineer</strong> at <Link to={"https://www.iln.app/"} target="_blank" rel="noopener noreferrer">ILN</Link> (2023-2024)
                    <ul>
                        <li>Enhanced user productivity 400% by implementing a theme editor that allows users to create custom website themes and view changes to color palettes and layouts in real-time.</li>
                        <li>Spearheaded the enhancement of the application's chat service in .NET, leveraging Entity Framework to architect and optimize intricate queries.</li>
                        <li>Developed and rigorously tested consumable REST APIs for the backend, introducing a suite of new features to augment user experience and functionality.</li>
                        <li>Enhanced user content creation capabilities by integrating OpenAI API into the backend, enabling users to create custom entries using generative AI.</li>
                    </ul>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col md={8} className="mx-auto">                    
                    <h2>Skills</h2>
                    <Stack >
                        <h5>Frontend</h5>
                        <div className='mb-3'>
                            <Button variant='outline-dark' className='pe-none'>HTML</Button>{' '}
                            <Button variant='outline-dark' className='pe-none'>CSS</Button>{' '}
                            <Button variant='outline-dark' className='pe-none'>JavaScript</Button>{' '}
                            <Button variant='outline-dark' className='pe-none'>React</Button>
                        </div>
                        <h5>Backend</h5>
                        <div>
                        <Button variant='outline-dark' className='pe-none'>Python</Button>{' '}
                        <Button variant='outline-dark' className='pe-none'>Django</Button>{' '}
                        <Button variant='outline-dark' className='pe-none'>C#</Button>{' '}
                        <Button variant='outline-dark' className='pe-none'>.NET</Button>{' '}
                        <Button variant='outline-dark' className='pe-none'>Docker</Button>{' '}
                        <Button variant='outline-dark' className='pe-none'>AWS</Button>
                        </div>
                    </Stack>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={8} className="mx-auto">
                <h2>Education</h2>
                <strong>Bachelor of Science in Computer Science</strong> at
                <Link to={"https://ufonline.ufl.edu/degrees/undergraduate/computer-science/"} target="_blank" rel="noopener noreferrer"><em> University of Florida</em></Link> (2022)
                </Col>
            </Row>
        </Container>
    );
  }

  export default Project;