import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
    const [message, setMessage] = useState(0)
  
    useEffect(() => {
      axios.get('http://localhost:8000/api/hello-world')
        .then(response => {
            console.log(response.data);
          setMessage(response.data.message);
        })
        .catch(error => {
          console.log(error);
        })
    }, [])
  
    return (
      <div>
        <h1>
          <p>{message}</p>
        </h1>
      </div>
    )
  }

export default HelloWorld