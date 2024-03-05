import { useState, useEffect } from "react";

function useFetchApi(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Fetch failed!');
          }
          const data = await response.json();
          console.log(data);
          setData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, isLoading, error };
  }
  
  export default useFetchApi;