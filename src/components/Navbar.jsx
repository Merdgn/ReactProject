import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          GameCenter
        </Typography>

        {isAuthenticated && (
  <div>
    <Button color="inherit" onClick={() => navigate('/home')}>
      Ana Sayfa
    </Button>
    <Button color="inherit" onClick={handleLogout}>
      Çıkış Yap
    </Button>
  </div>
)}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
