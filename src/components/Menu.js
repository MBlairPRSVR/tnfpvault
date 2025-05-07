/* eslint-disable no-unused-vars */
// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import { fetchMenuItems, fetchMenuItemById } from '../api/parsleyApi';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMenu = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
        setLoading(false);
      } catch (err) {
        setError('Failed to load menu items');
        setLoading(false);
      }
    };
    getMenu();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Menu Items</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
