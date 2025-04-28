import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function GameDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { game } = location.state || {};

  if (!game) {
    navigate('/home');
    return null;
  }

  return (
    <Box
      sx={{
        width: 400,
        margin: 'auto',
        marginTop: '100px',
        padding: '30px',
        boxShadow: 3,
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <img
        src={game.image}
        alt={game.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '20px' }}
      />

      <Typography variant="h4" marginBottom={2}>
        {game.title}
      </Typography>

      <Typography variant="body1" marginBottom={4}>
  {game.description}
      </Typography>

      <Typography variant="caption" display="block" marginBottom={2}>
        Yayın Tarihi: 2024
      </Typography>

      <Button
  variant="contained"
  onClick={() => navigate('/home')}
  sx={{ marginTop: 2 }}
>
  Geri Dön
</Button>
    </Box>
  );
}

export default GameDetailPage;
