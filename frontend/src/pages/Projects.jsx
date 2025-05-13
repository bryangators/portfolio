import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { fetchGet } from '../api/apiService';
import ToastNotification from '../utils/ToastNotification';

function Projects() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const result = await fetchGet('/projects');
      setData(result || []);
      console.log(data);
    } catch (error) {
      setError('Failed to load projects');
      ToastNotification.error(error);
    }
  }

  useEffect(() => {
  console.log('Data before update:', data);
  fetchData();
  console.log('Data after update (immediately):', data); // This will show the state before re-render
}, []);

  return (
  <Container className='mx-auto mt-5 text-center' style={{ maxWidth: '800px' }}>
    {!Array.isArray(data) ? (
      <p className="text-danger">Failed to load projects</p>
    ) : (
      <Row xs={1} md={2} className="g-4 mx-auto">
        {data.map((project, idx) => (
          <Col key={idx} className='d-flex justify-content-center'>
            <Link to={`${project.id}`} style={{ textDecoration: 'none' }}>
              <ProjectCard
                id={project.id}
                title={project.title}
                content={project.short_desc}
                imageUrl={project.display_img_path}
                languages={project.languages}
                technologies={project.technologies}
              />
            </Link>
          </Col>
        ))}
      </Row>
    )}
  </Container>
);
}

export default Projects;
