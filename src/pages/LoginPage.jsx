import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Checkbox, FormControlLabel, TextField, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '123456') {
      login();
      navigate('/home');
    } else {
      alert('Hatalı email veya şifre!');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #00c6ff, #0072ff)',
      }}
    >
      <Card
        sx={{
          width: 350,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 10,
          borderRadius: 5,
          backgroundColor: 'white',
        }}
      >
        <Avatar sx={{ bgcolor: 'secondary.main', width: 60, height: 60 }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>

        <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
          Giriş Yap
        </Typography>

        <Box sx={{ width: '100%' }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Şifre"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
            label="Beni Hatırla"
            sx={{ mt: 1 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleLogin}
          >
            Giriş Yap
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default LoginPage;
