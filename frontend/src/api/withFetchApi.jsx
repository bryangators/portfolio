import { useState, useEffect } from 'react';

const withFetchApi = (Component) => (props) => {
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
          setData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);

  return <Component {...props} data={data} isLoading={isLoading} error={error} />;
};

export default withFetchApi;