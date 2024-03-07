import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastNotification() {
    const success = (message) => toast.success(message);
    const error = (message) => toast.error(message);
    const warn = (message) => toast.warn(message);
    const info = (message) => toast.info(message);
  
    ToastNotification.success = success;
    ToastNotification.error = error;
    ToastNotification.warn = warn;
    ToastNotification.info = info;
    
    return (  
      <ToastContainer />
    );
  }
  
  export default ToastNotification;