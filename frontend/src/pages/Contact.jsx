import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Project() {
    return (
      <Container className='text-center p-5'>
        <Form className='w-75 mx-auto text-start border border-dark rounded p-3' style={{maxWidth:'600px'}}>
          <div className='text-center'>
          <h1>Contact</h1>
          </div>
          <p>If you're interested in discussing career opportunities or initiating a project together, kindly complete the form below. 
             I look forward to connecting with you.</p>
          <Form.Group controlId="formBasicName" className='mb-3'>           
          <Form.Label className='fs-5'>Name</Form.Label>
          <Form.Control size="lg" type="text"/>
          </Form.Group>
         <Form.Group controlId="formBasicEmail" className='mb-3'>
         <Form.Label className='fs-5'>Email</Form.Label>
         <Form.Control size="lg" type="text"/>
         </Form.Group>
        <Form.Group controlId="formBasicTextField" className='mb-3'>
        <Form.Label className='fs-5'>Message</Form.Label>
        <Form.Control as="textarea" size="lg" type="text"/>
        </Form.Group>
        <Button variant="outline-dark mx-auto" type="submit">Submit
        </Button>
      </Form>
      </Container>
    );
  }

  export default Project;