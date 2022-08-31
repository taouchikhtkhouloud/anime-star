import React, {useState ,useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
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
      
        const [currency, setCurrency] = React.useState('EUR');
      
        const handleChange = (event) => {
          setCurrency(event.target.value);
        };
       const [data,setData] = useState([])
       useEffect(() => {
        fetch('http://localhost:5000/api', {
            mode: 'no-cors'
        }).then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        ).catch(error => {
            console.log(error);
        })
       },[])
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
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 10, width: '70ch', fontSize: 40 },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your anime"
          variant="standard"
          sx={{ fontSize: 40 }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
      </div>
    </Box>
        </Paper>
        </Stack>
        
        
    </div>
  )
}

export default SelectCard