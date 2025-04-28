import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, Box, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };


  const games = [
    { 
      id: 1,
      title: 'FIFA 24',
      image: '/images/fifa24.jpeg',
      description: 'FIFA 24, EA Sports tarafından geliştirilen ve futbol deneyimini yeni nesil grafiklerle sunan bir spor oyunudur. Kariyer modu, Ultimate Team ve VOLTA gibi birçok mod içerir.'
    },
    { 
      id: 2,
      title: 'PES 2024',
      image: '/images/pes2024.jpg',
      description: 'PES 2024 (eFootball), Konami tarafından geliştirilen gerçekçi futbol simülasyonu. Geliştirilmiş top fiziği ve oyuncu hareketleriyle dikkat çeker.'
    },
    { 
      id: 3,
      title: 'PUBG',
      image: '/images/pubg.jpg',
      description: 'PlayerUnknown\'s Battlegrounds (PUBG), açık dünya hayatta kalma türünde devrim yaratan bir battle royale oyunudur. Son hayatta kalan kazanır!'
    },
    { 
      id: 4,
      title: 'Valorant',
      image: '/images/valorant.jpg',
      description: 'Riot Games\'in geliştirdiği Valorant, taktiksel FPS türünde karakter tabanlı bir nişancı oyunudur. Strateji ve reflekslerin birleşimiyle öne çıkar.'
    },
    { 
      id: 5,
      title: 'League of Legends',
      image: '/images/lol.jpeg',
      description: 'LoL, Riot Games tarafından geliştirilen dünyanın en popüler MOBA oyunudur. 5v5 takımların mücadelesiyle dolu hızlı ve rekabetçi bir oyun deneyimi sunar.'
    }
  ];
  

  return (
    <Box
      sx={{
        width: '90%',
        margin: 'auto',
        marginTop: '50px',
        padding: '30px',
        boxShadow: 3,
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" marginBottom={4}>
         Oyunlar
      </Typography>



<Grid container spacing={4} justifyContent="center">
  {games.map((game) => (
    <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ width: '100%' }}>
        <img
          src={game.image}
          alt={game.title}
          style={{ width: '100%', height: '140px', objectFit: 'cover' }}
        />
        <CardContent>
        <Typography variant="h6" marginBottom={4}>
  Oynamak istediğin oyunu seç ve detayları keşfet!
</Typography>

        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate('/gamedetail', { state: { game } })}>
            Detay
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
}

export default HomePage;
