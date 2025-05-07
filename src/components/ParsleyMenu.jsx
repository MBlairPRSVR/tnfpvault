import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, List, ListItem, ListItemText, Button } from "@mui/material";

const ParsleyMenu = () => {
  const [menuItems, setMenuItems] = useState([]); // To hold the menu items
  const [loading, setLoading] = useState(true); // To show loading spinner
  const [error, setError] = useState(null); // To show errors if any

  // Fetch menu items from Parsley API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("https://app.parsleycooks.com/api/public/menu_items", {
          method: "GET",
          headers: {
            "Authorization": "Bearer YOUR_API_KEY", // Replace with your actual API key
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data); // Set menu items to state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setError("Error fetching menu items");
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
        <Typography variant="body1">Loading menu items...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Menu Items
      </Typography>

      {menuItems.length > 0 ? (
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name} // Assuming 'name' is the field for the menu item name
                secondary={`Price: ${item.price}`} // Assuming 'price' field is available
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No menu items available.</Typography>
      )}

      {/* Button for manual print, if needed */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.print()}
        style={{ marginTop: "20px" }}
      >
        Print Menu
      </Button>
    </Container>
  );
};

export default ParsleyMenu;
