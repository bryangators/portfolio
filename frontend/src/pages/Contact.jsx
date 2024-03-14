import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ToastNotification from '../utils/ToastNotification';
import { useState } from 'react';
import { fetchPost } from '../api/apiService';
import validator from 'validator';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!isValidEmail) {
      ToastNotification.error("Invalid email address");
      setIsLoading(false);
      return;
    } 
    
    try {
      const response = await fetchPost('/contact/', {
         name, 
         email,
         message
      });

      ToastNotification.success("Your message was sent!");
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      ToastNotification.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    
    setIsValidEmail(validator.isEmail(newEmail));
  };

  return (
    <Container className='text-center p-5'>
      <Form className='w-75 mx-auto text-start border border-dark rounded p-3' style={{maxWidth:'600px', minWidth: '300px'}} onSubmit={handleSubmit}>
        <div className='text-center'>
          <h1>Contact</h1>
        </div>
        <p>If you're interested in discussing career opportunities or initiating a project together, kindly complete the form below. 
            I look forward to connecting with you.</p>
        <Form.Group controlId="formBasicName" className='mb-3'>           
          <Form.Label className='fs-5'>Name</Form.Label>
          <Form.Control 
            size="lg" 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className='mb-3'>
          <Form.Label className='fs-5'>Email</Form.Label>
          <Form.Control 
            size="lg" 
            type="text"
            value={email}
            onChange={handleEmailChange}
            required/>
        </Form.Group>
        <Form.Group controlId="formBasicTextField" className='mb-3'>
          <Form.Label className='fs-5'>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            size="lg" 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required/>
        </Form.Group>
        {isLoading ? 
        <Button variant="success" type="submit" disabled>Sending...</Button>
        : 
        <Button variant="outline-dark" type="submit">Submit</Button>
        } 
        
      </Form>
    </Container>
  );
}

export default Contact;