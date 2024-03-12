import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ToastNotification from '../utils/ToastNotification';
import Project from '../components/Project';
import { fetchGet } from '../api/apiService';

function ProjectDisplay() {
    const {id} = useParams();
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const result = await fetchGet(`/project/${id}`);
            setData(result);
        } catch (error) {
            ToastNotification.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Project title={data.title} full_desc={data.full_desc} date={data.date}></Project>
    );
}                                                                                                       

export default ProjectDisplay;