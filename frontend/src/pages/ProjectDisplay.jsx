import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

const title = 'Project Title'
const markdown = `
#### Here is some HTML code:

~~~html
<Container className='mt-5 mx-auto'>
    <h1 className='mt-5 mb-5'>
        {title}
    </h1>
    <MarkdownRenderer markdown={markdown}/>
</Container>
~~~

##### Here is some JavaScript code:

~~~javascript
if (true) {
    console.log("hello");
}
~~~

`

function ProjectDisplay() {
  return (
    <Container className='mt-5 mx-auto'>
        <h1 className='mt-5 mb-5'>
            {title}
        </h1>
        <MarkdownRenderer markdown={markdown}/>
    </Container>    
  );
}

export default ProjectDisplay;