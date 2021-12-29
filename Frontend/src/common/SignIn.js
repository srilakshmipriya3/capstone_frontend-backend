import  { Component } from 'react';
import {Link} from "react-router-dom";
import './SignUp.css';
import {Box,TextField,Button} from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

class SignIn extends Component {
   
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
      <h3>Sign In</h3>
      <TextField id="outlined-search" label="Full Name" type="search" required />
      <TextField id="outlined-search" label="Last Name" type="search" required />
      <Button variant="contained" style={{width:250}}>SIGN IN</Button>
      &nbsp;&nbsp;<Link to="/signup">Dont have an Account? Sign up</Link>
      </div>
      </Box>
      </div>);
    }
}
 
export default SignIn;