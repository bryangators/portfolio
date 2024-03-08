import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ToastNotification from '../utils/ToastNotification';
import Project from '../components/Project';
import { API_BASE_URL } from '../api/apiService';
import axios from 'axios';

function ProjectDisplay() {
    const {id} = useParams();
    const [data, setData] = useState([]);
   
    async function fetchData() {
        try {
            const result = await axios.get(API_BASE_URL + `/project/${id}`);
            setData(result.data);
        } catch (error) {
            ToastNotification.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Project title={data.title} full_desc={data.full_desc}></Project>
    );
}                                                                                                       

export default ProjectDisplay;