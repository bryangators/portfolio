import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import useFetchApi from '../api/useFetchApi';


function Project() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT;
  
  const { data, isLoading, error } = useFetchApi(apiUrl + '/api/projects');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    return (
      <Container className='mx-auto mt-5 text-center' style={{maxWidth : '800px'}}>
        <Row xs={1} md={2} className="g-4 mx-auto">
          {data.map((project, idx) =>  (
            <Col key={idx} className='d-flex justify-content-center'>
              <ProjectCard
              id={project.id}
              title={project.title}
              content={project.short_desc}
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