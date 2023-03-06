//States
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
//Assets
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//Animation
import Fade from '@mui/material/Fade';
//CSS
import "./App.css";
//Components
import Footer from './Components/Footer';

//Axios 
import axios from 'axios'; //ginamit ko pang connect sa db  

function App() {

  const [studentID, setStudentID] = useState('');
  const [studentPassword, setStudentPass] = useState('');


  const theme = createTheme({
    typography: {
      fontFamily: [
        'Quicksand',
        'sans-serif'
      ].join(','),
    },
  });

  const handleSubmit = () => { //mini validation hehehee

      if(studentID.length === 0 || studentPassword.length === 0) {

        alert("CHECK FOR EMPTY FIELD!");

      }else { 

        const phpURL = "http://localhost:8000/config.php";

        let formData = new FormData();
        formData.append('studentID', studentID);
        formData.append('studentPassword', studentPassword);

        axios.post(phpURL, formData)
        .then(response => alert(response.data))
        .catch(error => alert (error));


      }

  }
  
  return (
    <div className="App">
       <Fade in = {true} timeout= {500}>
          <div id = "backgroundImage" style={{ position: 'absolute'}}>
            <div>
              <form method = "post">
                <img src="https://i.ibb.co/vQh9cs8/sti-logo.png" alt="sti-logo" border="0"  width={500}  height={400} style = {{ objectFit: 'contain' }}></img><br></br>
                <ThemeProvider theme = {theme}>
                <TextField  style = {{ backgroundColor: 'white' }}  sx={{ borderRadius: 1, boxShadow: 4, width: 450, mb: 5}} id="demo-helper-text-misaligned" label="Student ID" name = "idField" value={studentID} onChange = {(e) => setStudentID(e.target.value)}/><br></br>
                <TextField  style = {{ backgroundColor: 'white'}}  sx={{ borderRadius: 1, boxShadow: 4, width: 450, mb: 5}} id="demo-helper-text-misaligned" type = "password" label="Password" name = "passField" value={studentPassword} onChange = {(e) => setStudentPass(e.target.value)}/>
                </ThemeProvider><br></br>
                <Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: '16px', width: 450, height: 50, mb: 1.5}}><Typography fontWeight={700} fontSize={20}>LOG-IN</Typography></Button><br></br>
                <a><Typography color = "primary.dark" fontWeight={500} >Forgot Password?</Typography></a>
                <Footer/>
              </form>
            </div>
          </div>
       </Fade>
    </div>
  );
}
export default App;
