import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

const FetchButton = () => {
  const { getToken } = useAuth();
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    const token = await getToken();
    console.log({token})
    try {
      const response = await fetch('http://localhost:8080/test', 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          mode: "cors",
        },
      }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResult(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
      {result && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchButton;
