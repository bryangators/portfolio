import React from 'react';
import { Container, Row, Col, Button, Stack, Badge } from 'react-bootstrap';
import useFetchApi from './utils/useFetchApi';

function Home() {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const { data, isLoading, error } = useFetchApi(apiUrl + '/api/hello-world');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <Container style={{textAlign: 'left'}}>
            <Row className='mb-3 mt-5'>
                <Col md={8} className="mx-auto" style={{textAlign: 'left'}}>
                    <h1>Bryan Kristofferson : {data.message}</h1>
                    <strong>Software Engineer</strong>
                    <div>
                        I'm a passionate software engineer with expertise in fullstack web development,
                        system architecture.
                    </div>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col md={8} className="mx-auto">
                    <h2>Experience</h2>
                        <strong>Software Engineer</strong> at <em>Data Annotation Tech</em> (2024-Present)
                        <br />
                        <strong>Software Engineer</strong> at <em>ILN</em> (2023-2024)
                    <br />
                        <strong>Correctional Systems Officer</strong> at <em>Department of Justice</em> (2010-Present)
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
                        <Button variant='outline-dark'>C#</Button>{' '}
                        <Button variant='outline-dark'>Go</Button>{' '}
                        <Button variant='outline-dark'>MySQL</Button>{' '}
                        <Button variant='outline-dark'>PostgreSQL</Button>{' '}
                        <Button variant='outline-dark'>Docker</Button>{' '}
                        <Button variant='outline-dark'>AWS</Button>
                        </div>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto">
                <h2>Education</h2>
                <strong>Bachelor of Science in Computer Science</strong> at
                <em> University of Florida</em> (2022)
                </Col>
            </Row>
        </Container>
    );
};

export default Home;