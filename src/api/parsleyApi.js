// src/api/parsleyApi.js
import axios from 'axios';

// Base URL for the Parsley API
const API_BASE_URL = 'https://app.parsleycooks.com/api/public';

// Create an axios instance for making API requests
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other necessary headers (like authentication token)
  },
  timeout: 10000, // Set a timeout of 10 seconds (optional)
});

// Fetch menu items
export const fetchMenuItems = async () => {
  try {
    const response = await apiClient.get('/menu_items');
    return response.data; // Return the data from the API response
  } catch (error) {
    console.error('Error fetching menu items:', error); // Log error for debugging
    throw new Error('Failed to fetch menu items'); // Provide a more user-friendly error
  }
};

// Fetch a specific menu item by ID
export const fetchMenuItemById = async (id) => {
  try {
    const response = await apiClient.get(`/menu_items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu item with ID ${id}:`, error); // Log error for debugging
    throw new Error(`Failed to fetch menu item with ID ${id}`);
  }
};
