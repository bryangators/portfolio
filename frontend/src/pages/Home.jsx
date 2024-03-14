import React from 'react';
import { Container, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {    
    return (
        <Container className="home-page">
            <Stack gap={3} className='mt-5'>
                <div className="p-2 text-start mx-auto home-desc">
                    <h3>
                        Hello, I'm Bryan, a software engineer in Orlando, Florida.
                    </h3>
                    <span className='lead'>
                        I enjoy building and designing software systems. I have expertise in fullstack web development,
                        computer science and much more.
                    </span>
                </div>
                <div className="p-2">
                    {['projects', 'resume', 'contact'].map((link, index) => (
                        <Link key={index} to={`/${link}`}>
                        <Button variant='outline-dark'>{link}</Button>{' '}
                        </Link>
                    ))}
                </div>
                <div className="p-2">
                    <Link className='me-3' to="https://www.linkedin.com/in/b-kristofferson/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i> linkedin
                    </Link>
                    <Link to="https://github.com/bryangators" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i> github
                    </Link>
                </div>
            </Stack>
        </Container>
    );
};

export default Home;