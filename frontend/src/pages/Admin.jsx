import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { fetchGet } from '../api/apiService';
import ToastNotification from '../utils/ToastNotification';


function Admin() {
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
  
  const handleDelete = (id) => {
      const updatedProjects = data.filter(data => data.id !== id);
    
      setData(updatedProjects);
  }

  return (
    <Container className='mx-auto mt-5 text-center' style={{maxWidth : '800px'}}>
      <Row>
          <Col>
              <Link to="/admin/add">
                  <Button variant='outline-success' className='mb-5'>Add New Project</Button>
              </Link>
          </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 mx-auto">
        {data.map((project, idx) =>  (
          <Col key={idx} className='d-flex justify-content-center'>
              <Row>
                  <ProjectCard
                  id={project.id}
                  title={project.title}
                  content={project.short_desc}
                  imageUrl={project.display_img_path}
                  languages={project.languages}
                  technologies={project.technologies}
                  isAdminMode={true}
                  onDelete={handleDelete}
                  />
              </Row>              
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Admin;