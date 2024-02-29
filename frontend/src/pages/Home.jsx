import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import useFetchApi from '../utils/useFetchApi';
import { Link } from 'react-router-dom';
import './Home.css'
import { useState, useEffect } from 'react';

function Home() {
    // const apiUrl = import.meta.env.VITE_API_BASE_URL;

    // const { data, isLoading, error } = useFetchApi(apiUrl + '/api/hello-world');

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    
    return (
        <Container className="home-page">
            <div>
                <Row className='mb-2 mt-5'>
                    <Col className="mx-auto text-center">
                        <div className='display-1'>Bryan Kristofferson</div>
                        <div className='display-6'>
                            Backend Software Engineer
                        </div>
                    </Col>
                </Row>
                <Row className='mb-2 mt-5'>
                    <Col md={6} className="mx-auto text-center">
                    <Image src="/src/assets/cloud-computing.png"></Image>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='mx-auto text-center'>
                        <div>
                        <Link to="/projects">
                            <Button variant='outline-dark'>Projects</Button>{' '}
                        </Link>
                        <Link to="/resume">
                            <Button variant='outline-dark'>Resume</Button>{' '}
                        </Link>
                        <Link to="/contact">
                            <Button variant='outline-dark'>Contact</Button>{' '}
                        </Link>
                        </div>
                    </Col>                    
                </Row>  
            </div>
            <div>
            <Row className='mt-3'>
                    <Col className='mx-auto text-center'>
                        <div>
                            <Link className='me-3' to="https://www.linkedin.com/in/b-kristofferson/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i> linkedin
                            </Link>
                            <Link to="https://github.com/bryangators" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i> github
                            </Link>
                        </div>
                    </Col>                    
                </Row>
            </div>
        </Container>
    );
};

export default Home;