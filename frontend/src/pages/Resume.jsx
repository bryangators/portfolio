import React from 'react';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <Container className="home-page text-start">
            <Row className='mb-3 mt-5'>
                <Col md={8} className="mx-auto">
                    <h2>Experience</h2>
                        <strong>Software Engineer</strong> at <Link to={"https://www.iln.app/"} target="_blank" rel="noopener noreferrer">ILN</Link> (2023-2024)
                    <br />
                        <strong>Correctional Systems Officer</strong> at <Link to={"https://www.bop.gov/jobs/"} target="_blank" rel="noopener noreferrer">Federal Bureau of Prisons</Link> (2010-Present)
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col md={8} className="mx-auto">                    
                    <h2>Skills</h2>
                    <Stack >
                        <h5>Frontend</h5>
                        <div>
                            <Button variant='outline-dark'>HTML</Button>{' '}
                            <Button variant='outline-dark'>CSS</Button>{' '}
                            <Button variant='outline-dark'>JavaScript</Button>{' '}
                            <Button variant='outline-dark'>React</Button>
                        </div>
                        <h5>Backend</h5>
                        <div>
                        <Button variant='outline-dark'>Python</Button>{' '}
                        <Button variant='outline-dark'>C#</Button>{' '}
                        <Button variant='outline-dark'>MySQL</Button>{' '}
                        <Button variant='outline-dark'>PostgreSQL</Button>{' '}
                        <Button variant='outline-dark'>Docker</Button>{' '}
                        <Button variant='outline-dark'>AWS</Button>
                        </div>
                    </Stack>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={8} className="mx-auto">
                <h2>Education</h2>
                <strong>Bachelor of Science in Computer Science</strong> at
                <em> University of Florida</em> (2022)
                </Col>
            </Row>
        </Container>
    );
  }

  export default Project;