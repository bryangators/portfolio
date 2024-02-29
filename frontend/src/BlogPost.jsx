import React from "react";
import { Container } from "react-bootstrap";

function BlogPost() {
    //this is dummy data will be async
    const post = 
        {
          id: 1,
          title: 'Welcome to my blog!',
          date: 'March 15, 2023',
          description: 'This is a short description of the first blog post.',
          image: 'https://picsum.photos/200/300'
        }
    
    return (
        <Container fluid>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>Published on {post.date}</p>
            <img src={post.image}></img>
        </Container>

    );
};

export default BlogPost;