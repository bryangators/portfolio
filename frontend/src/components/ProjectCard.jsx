import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ProjectCard.css'


function ProjectCard({ id, title, short_desc, imageUrl, languages, technologies }) {
    const DEFAULT_PROJECT_IMAGE_URL = 'src/assets/cloud-computing.png'
    return (  
        <Link className="project-card" to={`${id}`}>
            <Card style={{ width: '20rem' }} border="dark" key={id}>
                <Card.Header><Card.Title> {title} </Card.Title></Card.Header>
                <Card.Img src={imageUrl || DEFAULT_PROJECT_IMAGE_URL} 
                        className="mx-auto" 
                        variant="top" 
                        style={{width: '10rem'}}/>
                <Card.Body>                
                    <Card.Text className="text-start">
                        {short_desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div>
                    {languages.map((language, idx) =>  (
                        <Badge key={idx} className="me-1" bg="dark">{language}</Badge>
                    ))}
                    </div>
                    <div>
                    {technologies.map((technology, idx) =>  (
                        <Badge key={idx} className="me-1" bg="success">{technology}</Badge>
                    ))}
                    </div>
                </Card.Footer>
            </Card>
        </Link>
    );
}

export default ProjectCard;