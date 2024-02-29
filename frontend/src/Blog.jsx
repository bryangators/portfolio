import React from 'react';
import { Container, Card, Button, Row, Col, Stack } from 'react-bootstrap';

const blogPosts = [
    {
      id: 1,
      title: 'Welcome to my blog!',
      date: 'March 15, 2023',
      description: 'This is a short description of the first blog post.',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      title: 'My second blog post!',
      date: 'April 20, 2023',
      description: 'This is a short description of the second blog post.',
      image: 'https://picsum.photos/200/301'
    },
    // Add more blog posts here...
  ];

function Blog() {

    return (
      <Container fluid>
        <h1>Blog</h1>    
        <Stack direction='horizontal' className='col-md-4 mx-auto' gap={3}>
        {blogPosts.map((post, index) => (
            <div key={index} className='justify-content-md-center'>
                <Card style={{width: '18rem'}}>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>{post.description}</Card.Text>
                        <Button variant='outline-dark'>Read More</Button>
                    </Card.Body>
                </Card>
            </div>
        ))}
        </Stack>    
        
      </Container>
    );          
  };

  export default Blog;