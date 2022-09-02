import React, {useState ,useEffect } from 'react'
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
function SelectCard() {

      
       
  const [data,setData] = useState([]);
  const [alist, setAlist] =useState([]);
      
        
          async function getAnime(){
          
            const anime = {data}
            const response = await fetch("http://localhost:5000/send_anime", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(anime)
            });
      
            if (response.ok) {
              console.log("response worked!");
             
          }
        } 
       useEffect(() => {
        getListAnime();
       },[]);
       console.log(data)
       function getListAnime(){
        fetch('http://localhost:5000/api').then(
          res => res.json()
      ).then(
          data => {
             setAlist(data)
             
             
              
          }
      ).catch(error => {
          console.log(error);
      })
       }
      


    
  return (
    <div className="container">
        <Stack spacing={30}>
        <Paper>
        <header>
			<h1>You like an <strong>anime</strong> ?</h1>
            <h1>Type or select an anime to find others <strong>recommendations</strong> </h1>
		</header>
        </Paper>
        <Paper>
    
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={alist}
      
      sx={{ width: 500, marginLeft:50  }}
      
      renderInput={(params) => <TextField {...params} label="select an anime"  />}
     
      onChange={(e,value) => 
        setData(value)
      } 
    />
    <Button variant="outlined"   color="secondary" sx={{ width: 150, marginLeft:70, marginTop:5 }}
    onClick={getAnime} >
      Select</Button>
        </Paper>
        </Stack>
        
        
    </div>
  )
}

export default SelectCard