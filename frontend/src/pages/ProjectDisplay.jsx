import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchApi from '../api/useFetchApi';
import Project from '../components/Project';

function ProjectDisplay() {
    const apiUrl = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT;
    const {id} = useParams();
    
    const { data, isLoading, error } = useFetchApi(apiUrl + `/api/project/${id}`);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>

    return (
        <Project title={data.title} full_desc={data.full_desc}></Project>
    );
}                                                                                                       

export default ProjectDisplay;