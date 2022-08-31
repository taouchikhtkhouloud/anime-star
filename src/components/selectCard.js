import React, {useState ,useEffect } from 'react'
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
function SelectCard() {
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
      
        const [currency, setCurrency] = React.useState('Anime List');
      
        const handleChange = (event) => {
          setCurrency(event.target.value);
        };
       const [data,setData] = useState([])
       const [alist, setAlist] =useState([]);
       useEffect(() => {
        fetch('http://localhost:5000/api').then(
            res => res.json()
        ).then(
            data => {
               setAlist(data)
               
               
                
            }
        ).catch(error => {
            console.log(error);
        })
       },[])
       
       console.log(alist[1]);


    
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
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 500, marginLeft:50  }}
      renderInput={(params) => <TextField {...params} label="select an anime" />}
    />
        </Paper>
        </Stack>
        
        
    </div>
  )
}

export default SelectCard