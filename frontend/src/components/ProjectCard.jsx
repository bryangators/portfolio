import React from "react";
import axios from "axios";
import { Badge, Card,} from "react-bootstrap";
import ValidateToken from "../api/validateToken";
import { useNavigate } from "react-router-dom";
import './ProjectCard.css'
import ToastNotification from '../utils/ToastNotification';


function ProjectCard({ id, title, short_desc, imageUrl, languages, technologies, isAdminMode, onDelete }) {
    const { isLoggedIn, isLoading } = ValidateToken();
    const navigate = useNavigate();

    const handleEdit = () => {
        const projectId = id;

        if (isLoggedIn && isAdminMode && projectId) {
            navigate(`/admin/edit/${projectId}`);
        }
    }

    const handleDelete = async (event) => {
        event.preventDefault();

        const deleteUrl = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT + `/project/delete/${id}/`;

        try {
            const token = localStorage.getItem('access_token');

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            await axios.delete(deleteUrl, { headers });    
                        
            ToastNotification.success(`Successfully deleted ${title} project!`);  
            
            onDelete();       
        } catch (error) {
            ToastNotification.error("Something went wrong!");
        }
    }

    const DEFAULT_PROJECT_IMAGE_URL = 'src/assets/cloud-computing.png'
    return (    
        <Card 
            className={`project-card p-0 ${isAdminMode ? 'admin-mode' : ''}`}
            style={{ width: '20rem' }}
            border="dark" 
            key={id}>
            {(isLoggedIn && isAdminMode) && (
            <div className="mt-3 admin-icons">
            <span onClick={handleEdit}>
              <i className="bi bi-pencil me-2 text-success"></i>
            </span>
            <span onClick={handleDelete}>
              <i className="bi bi-trash3 text-danger"></i>
            </span>
            </div>
            )}      
            <Card.Header><Card.Title> {title} </Card.Title></Card.Header>
            <Card.Img src={imageUrl || DEFAULT_PROJECT_IMAGE_URL} 
                    className="mx-auto" 
                    variant="top" 
                    style={{width: '100%'}}/>
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
    );
}

export default ProjectCard;