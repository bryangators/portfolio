import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { fetchGet } from '../api/apiService';
import { useState, useEffect } from 'react';
import ToastNotification from '../utils/ToastNotification';


function Projects() {

  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const result = await fetchGet('/projects');
      setData(result);
    } catch (error) {
      ToastNotification.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className='mx-auto mt-5 text-center' style={{maxWidth : '800px'}}>
      <Row xs={1} md={2} className="g-4 mx-auto">
        {data.map((project, idx) =>  (
          <Col key={idx} className='d-flex justify-content-center'>
            <Link to={`${project.id}`} style={{textDecoration: 'none'}}>
            <ProjectCard
            id={project.id}
            title={project.title}
            content={project.short_desc}
            imageUrl={project.imageUrl}
            languages={project.languages}
            technologies={project.technologies}
            />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;