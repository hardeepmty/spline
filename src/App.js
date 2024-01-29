import { Stack, Typography } from '@mui/material';
import { iceCreams } from './lib/data/iceCreams';
import './App.css';
import Navbar from './components/Navbar';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <main>
      <Navbar />
      <Stack direction="column" sx={{ mt: "100px", display: "flex", alignItems: "center"}}>
        {iceCreams.map((iceCream, index) => (
          <Stack 
            key={index} 
            direction="row" 
            alignItems="center" 
            sx={{ 
              width: "80%", 
              margin: '10px',
              backgroundColor: iceCream.color 
            }}
          >
            <div style={{ flex: 1 }}>
              <Typography variant="h5" component="h2">
                {iceCream.name}
              </Typography>
              <Typography variant="body2" component="p">
                {iceCream.description}
              </Typography>
            </div>
            <div style={{ flex: 1 }}>
              <Spline scene={iceCream.splineImage} />
            </div>
          </Stack>
        ))}
      </Stack>
    </main>
  );
}

export default App;
