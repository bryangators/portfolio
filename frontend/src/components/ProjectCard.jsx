import React from "react";
import { Badge, Card } from "react-bootstrap";


function ProjectCard({ title, content, imageUrl, languages, technologies }) {
    const DEFAULT_PROJECT_IMAGE_URL = 'src/assets/cloud-computing.png'
    return (      
        <Card style={{ width: '20rem' }} border="dark">
            {imageUrl && <Card.Img variant="top" src={imageUrl} />}
            <Card.Body>
                {!imageUrl && <Card.Img variant="top" src={DEFAULT_PROJECT_IMAGE_URL} /> }
                <Card.Title> {title} </Card.Title>
                <Card.Text className="text-start">
                    {content}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div>
                {languages.map((language) =>  (
                    <Badge className="me-1" bg="dark">{language}</Badge>
                ))}
                </div>
                <div>
                {technologies.map((technology) =>  (
                    <Badge className="me-1" bg="success">{technology}</Badge>
                ))}
                </div>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCard;