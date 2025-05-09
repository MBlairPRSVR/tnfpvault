// ParsleySales.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParsleySales = () => {
  const [sales, setSales] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get('/api/parsley/sales'); // proxy to backend
        setSales(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load sales data.');
      }
    };

    fetchSales();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-tnfpGreen">Parsley Sales</h2>
      {sales.length === 0 ? (
        <p className="text-gray-500">No sales data found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-tnfpLightGray text-tnfpDarkGray">
                <th className="px-4 py-2 text-left">Sale ID</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{sale.id}</td>
                  <td className="px-4 py-2">{sale.customer_name}</td>
                  <td className="px-4 py-2">${sale.total}</td>
                  <td className="px-4 py-2">{new Date(sale.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ParsleySales;

