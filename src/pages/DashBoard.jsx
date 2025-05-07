import React, { useEffect, useState } from 'react';
import axios from 'axios'; // HTTP client for API calls
import { Pie } from 'react-chartjs-2'; // Chart.js for pie charts
import 'chart.js/auto'; // Auto import for Chart.js

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors

  // Fetch data from API (assuming backend is set up)
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('/api/sheets'); // Adjust based on your actual API
        setSalesData(response.data); // Assuming the response data is in the correct format
      } catch (error) {
        console.error("Error fetching sales data", error);
        setError('Failed to load sales data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  // Prepare pie chart data
  const pieChartData = {
    labels: salesData.length > 0 ? salesData.map(item => item.category) : ['Loading...'],
    datasets: [
      {
        label: 'Sales Breakdown',
        data: salesData.length > 0 ? salesData.map(item => item.sales) : [0, 0, 0], // Adjust based on your data structure
        backgroundColor: ['#6A9A3A', '#4A4A4A', '#F4F4F4'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center">Dashboard</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p> // Show error if fetching fails
      ) : (
        <>
          <div className="chart-container my-4">
            <h2 className="text-xl font-medium text-center">Sales Breakdown</h2>
            <Pie data={pieChartData} />
          </div>

          <div className="other-data-container my-4">
            {/* You can add more components or data visualizations here */}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
