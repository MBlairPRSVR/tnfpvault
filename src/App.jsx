import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import ProductionTemplate from './pages/ProductionTemplate';
import MenuMaker from './pages/MenuMaker';
import FileVault from './pages/FileVault';
import Dashboard from './pages/DashBoard'; // ✅ Make sure this matches the filename

const Home = () => (
  <Typography variant="h4" gutterBottom>
    Welcome to TNFP FileVault
  </Typography>
);

const NotFound = () => (
  <Typography variant="h5" color="error" gutterBottom>
    404 - Page Not Found
  </Typography>
);

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">TNFP FileVault</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Button component={Link} to="/" variant="outlined" sx={{ mr: 2 }}>
            Home
          </Button>
          <Button component={Link} to="/production-template" variant="contained" sx={{ mr: 2 }}>
            Production Template
          </Button>
          <Button component={Link} to="/menu-maker" variant="contained" sx={{ mr: 2 }}>
            Menu Maker
          </Button>
          <Button component={Link} to="/file-vault" variant="contained" sx={{ mr: 2 }}>
            File Vault
          </Button>
          <Button component={Link} to="/dashboard" variant="contained" sx={{ mr: 2 }}>
            Dashboard
          </Button>
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/production-template" element={<ProductionTemplate />} />
          <Route path="/menu-maker" element={<MenuMaker />} />
          <Route path="/file-vault" element={<FileVault />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
