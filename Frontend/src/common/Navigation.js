import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Route,Link,Switch} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

 const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(3),
    width: 'auto',
   },
 }));

 const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 }));

 const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
     padding: theme.spacing(1, 1, 1, 0),
     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
     transition: theme.transitions.create('width'),
     width: '100%',
     [theme.breakpoints.up('md')]: {
       width: '20ch',
     },
   },
 }));


export default function Navigation() {
  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <ShoppingCartIcon className="logo"></ShoppingCartIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          upGrad E-Shop
          </Typography>
          <Search  style={{display:'none'}}>
            <SearchIconWrapper>
              <SearchIcon />
             </SearchIconWrapper>
            <StyledInputBase
              
              placeholder="Search…"
               inputProps={{ 'aria-label': 'search' }}
            />
           </Search>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
         <Link to="/login" style={{color:'white'}}> <Typography>
           Login
            </Typography></Link> 
          
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signup"  style={{color:'white'}}> <Typography>
            Sign Up
            </Typography>
           </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
        
         <Button variant="contained"  color="error" style={{display:'none'}}>
             LOGOUT
         </Button> 
       
        </Toolbar>
       
      </AppBar>
      <Switch>
  <Route path="/signup" component={SignUp} />
  <Route path="/login" component={SignIn} />
  </Switch> 
    </Box>
  
 

  
  );
}