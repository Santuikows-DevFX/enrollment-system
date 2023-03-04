//States
import { createTheme, ThemeProvider, Typography } from '@mui/material';
//Assets
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//Animation
import Fade from '@mui/material/Fade';
//CSS
import "./App.css";
//Components
import Footer from './Components/Footer';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Quicksand',
        'sans-serif'
      ].join(','),
    },
  });
  
  return (
    <div className="App">
       <Fade in = {true} timeout= {500}>
          <div id = "backgroundImage" style={{ position: 'absolute'}}>
            <div>
              <img src="https://i.ibb.co/vQh9cs8/sti-logo.png" alt="sti-logo" border="0"  width={500}  height={400} style = {{ objectFit: 'contain' }}></img><br></br>
              <ThemeProvider theme = {theme}>
              <TextField  style = {{ backgroundColor: 'white' }}  sx={{ borderRadius: 1, boxShadow: 4, width: 450, mb: 5}} id="demo-helper-text-misaligned" label="Student ID"/><br></br>
              <TextField  style = {{ backgroundColor: 'white'}}  sx={{ borderRadius: 1, boxShadow: 4, width: 450, mb: 5}} id="demo-helper-text-misaligned" label="Password"/>
              </ThemeProvider><br></br>
              <Button variant="contained" sx={{ borderRadius: '16px', width: 450, height: 50, mb: 1.5}}><Typography fontWeight={700} fontSize={20}>LOG-IN</Typography></Button><br></br>
              <a><Typography color = "primary.dark" fontWeight={500} >Forgot Password?</Typography></a>
              <Footer/>
            </div>
          </div>
       </Fade>
    </div>
  );
}
export default App;