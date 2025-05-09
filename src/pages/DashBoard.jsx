import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          'https://v1.nocodeapi.com/96vibez/google_sheets/cFMVYprMzFGxUntn?tabId=ProductionRun'
        );
        
        
        // Log the entire response to check its structure
        console.log('API Response:', response.data);
        
        // Check if the data is under 'data' or another key, and update accordingly
        setSalesData(response.data.data); 
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
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">Sales Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <ul className="list-disc list-inside">
          {salesData.map((row, index) => (
            <li key={index}>
              {row[0]}: {row[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
