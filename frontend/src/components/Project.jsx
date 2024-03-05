import React from "react";
import { Container } from "react-bootstrap";
import MarkdownRenderer from "./MarkdownRenderer";

function Project({title, full_desc}) {
    return (  
        <Container className='p-3 mx-auto'>
            <h1 className='mt-5 mb-5'>
                {title}
            </h1>
            <MarkdownRenderer markdown={full_desc}/>
        </Container>
    );
}

export default Project;