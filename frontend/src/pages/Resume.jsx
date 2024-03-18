import React from 'react';
import { Container, Row, Col, Stack, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <Container className="home-page text-start p-2">
            <Row className='mt-5'>
                <Col md={8} className="mx-auto">
                    <h2>Experience</h2>
                    <strong>Correctional Systems Officer</strong> at <Link to={"https://www.bop.gov/"} target="_blank" rel="noopener noreferrer">Federal Bureau of Prisons</Link> (2010 - Present)
                    <ul>
                        <li>Established a reputation as a dependable authority to guide, mentor, and cultivate new team members in a diverse environment while serving as a subject matter expert for senior leadership.</li>
                        <li>Accomplishments: SORT Operator, STARS Leadership Graduate, Officer of the Quarter, Sustained Superior Performance, Quality Step Increase, Contraband Officer of the Month, Time Off Award</li>
                        <li style={{listStyle: 'none'}}>
                            {['Security Clearance', 'Leadership', 'Teamwork', 'Problem-Solving', 'Interpersonal Skills'].map((skill, index) => (
                                <Badge key={index} pill bg="dark" className='me-2 mb-2'>{skill}</Badge>
                            ))}
                            
                        </li>
                    </ul>
                    <strong>Software Engineer</strong> at <Link to={"https://www.iln.app/"} target="_blank" rel="noopener noreferrer">ILN</Link> (2023-2024)
                    <ul>
                        <li>Collaborated with fellow engineers in the design, development, testing, and maintenance of application code within a Service-Oriented Architecture, employing MVC principles to ensure scalability and maintainability.</li>
                        <li>Improved application performance in key services through the implementation of scalable backend components, APIs, and essential business logic</li>
                        <li>Enhanced user experiences by developing and implementing efficient solutions utilizing asynchronous and multi-threaded design patterns to optimize performance in critical areas of the application.</li>
                        <li>Participated in the code review process and collaborated with fellow engineers in the development of complex application services, ensuring code quality, consistency, and adherence to best practices.</li>
                        <li>Demonstrated excellent written and verbal communication skills, effectively collaborating with diverse teams of all skill levels to drive projects forward and achieve desired outcomes.</li>
                        <li style={{listStyle: 'none'}}>
                            {['ASP.NET', 'MVC', 'C#', 'JavaScript', 'HTML', 'CSS'].map((skill, index) => (
                                <Badge key={index} pill bg="dark" className='me-2 mb-2'>{skill}</Badge>
                            ))}
                            
                        </li>
                    </ul>

                </Col>
            </Row>
            <Row className='mb-3'>
                <Col md={8} className="mx-auto">                    
                    <h2>Skills</h2>
                    <Stack >
                        <h5>Frontend</h5>
                        <div className='mb-3'>
                            {['HTML', 'CSS', 'JavaScript', 'React'].map((skill, index) => (
                                <Button key={index} variant='outline-dark' className='pe-none mb-2 me-2'>{skill}</Button>
                            ))}
                        </div>
                        <h5>Backend</h5>
                        <div>
                        {['Python', 'Django', 'C#', '.NET', 'Docker', 'AWS'].map((skill, index) => (
                            <Button key={index} variant='outline-dark' className='pe-none mb-2 me-2'>{skill}</Button>
                        ))}
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