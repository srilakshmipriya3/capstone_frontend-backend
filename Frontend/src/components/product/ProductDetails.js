import React, { Component } from 'react';
import Navigation from '../../common/Navigation';
import './ProductDetails.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ProductDetails() {
    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    return (<div><Navigation/>
        <div className='toggleGroup'>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="all">ALL</ToggleButton>
      <ToggleButton value="apparel">APPAREL</ToggleButton>
      <ToggleButton value="electronics">ELECTRONICS</ToggleButton>
      <ToggleButton value="personalcare">PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
    </div>
    <div className='productDetails'>
    <div className='imageDiv'>
       <img src="" alt="product_image" />
    </div>
    <div className='detailsDiv'>
        <div className='typDiv'>
        <Typography variant='h6'>iPhone 12</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
        <Chip label="Available Quantity : 148" color="primary" />
        </div><br></br>
        <Typography variant='P'>Category:<strong>Electronics</strong></Typography><br/><br/>
        <Typography variant='p'>A 14 Bionic, the fastest chip in smartphone. An edge-to-edge OLED display</Typography><br></br><br/>
        <Typography variant='p' style={{color:'red'}}>&#8377; 100000</Typography>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Enter Quantity"
        />
        </div>
        </Box>
        <Button variant="contained">Place Order</Button>
    </div>
    </div>
     </div>   
    );
  }