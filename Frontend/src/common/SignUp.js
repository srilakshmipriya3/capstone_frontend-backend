import  { Component } from 'react';
import {Link} from "react-router-dom";
import './SignUp.css';
import {Box,TextField,Button} from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

class SignUp extends Component {
   
    render() { 
        return (<div>
      <Box className='boxForm'
      sx={{
        width: 250,
        height: 30,
        maxWidth: '100%',
        
      }}
    >
  
  <div className='signUpForm'><LockRoundedIcon  className="lockLogo" style={{fontSize:20}}></LockRoundedIcon>
      <h3>Sign Up</h3>
      <TextField id="outlined-search" label="Full Name" type="search" required />
      <TextField id="outlined-search" label="Last Name" type="search" required />
      <TextField id="outlined-search" label="Email Address" type="search" required />
      <TextField id="outlined-search" label="Password" type="search" required />
      <TextField id="outlined-search" label="Confirm Password" type="search" required />
      <TextField id="outlined-search" label="Contact Number" type="search" required />
      <Button variant="contained" style={{width:250}}>SIGN UP</Button>
      &nbsp;&nbsp;<Link to="/login">Already Have an Account? Sign in</Link>
      </div>
  
      </Box>
      </div>);
    }
}
 
export default SignUp;