import React, { useEffect, useState } from 'react';
import axios from 'axios'; // HTTP client for API calls

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('/api/sheets'); // Calls your backend route
        setSalesData(response.data); // Assuming the response data is in the correct format
      } catch (error) {
        console.error('Error fetching sales data:', error);
        setError('Failed to load sales data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Sales Data</h2>
          <ul>
            {salesData.map((item, index) => (
              <li key={index}>{item[0]}: {item[1]}</li> // Assuming the sales data is an array of arrays
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
