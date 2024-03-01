import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';



function Project() {
  const projectData = [
    { title: 'Classroom Creator', content: 'Web application allowing users to migrate classroom data from one platform to the other.', imageUrl: 'src/assets/cloud-computing.png', languages: ['Python', 'HTML', 'CSS', 'JavaScript'], technologies: ['Flask', 'Git', 'REST', 'Docker', 'CircleCI']},
    { title: 'Project 2', content: 'Description for Project 2', languages: ['Python', 'HTML', 'CSS', 'JavaScript'], technologies: ['Flask', 'Git', 'REST', 'Docker', 'CircleCI'] },
    // Add more project data as needed
  ];

    return (
      <Container className='mx-auto mt-5 text-center' style={{maxWidth : '800px'}}>
        <Row xs={1} md={2} className="g-4 mx-auto">
          {projectData.map((project, idx) =>  (
            <Col key={idx} className='d-flex justify-content-center'>
              <ProjectCard
              title={project.title}
              content={project.content}
              imageUrl={project.imageUrl}
              languages={project.languages}
              technologies={project.technologies}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

export default Project;