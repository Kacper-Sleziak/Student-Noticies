import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom";
import { useStyles } from "../styles/NavStyles";
import { Box } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { LoginContext } from '../../contexts/LoginContext';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/init";

import {
  setDoc,
  getDoc,
  doc,
  } from "firebase/firestore";

function Nav() {

    // Styles variable
    const classes = useStyles();

    const{userName} = useContext(LoginContext)
    const [googleUser, loading, error] = useAuthState(auth);


    const renderProfile = (user) => {
      return(
        <Link to="/profile">
          <IconButton
          size="large"
          edge="end"
          color="inherit"
          >
            <AccountCircle 
            sx={{
              marginRight: 10
            }}
            />
          </IconButton>
          {user}
        </Link>
      )
    }

    const renderLogin = () => {
      return(
        <Link to="/login">
          <Typography 
          variant="h6"
          className={classes.typography}
          >
            Login Panel
          </Typography>
        </Link>
      )
    }

    // Render nav elements by userName value
    const renderLoginOrProfile = () => {

      if(googleUser) {
        var login = renderProfile(googleUser.displayName);
        return(login);
      } 
      else if (userName === ""){
        var login = renderLogin();
        return(login);
      }
      else {
        var profile = renderProfile(userName);
        return(profile);
      }
    }
    
    return (
      <AppBar 
      className={classes.appbar}
      elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar 
          variant="dense"
          spacing={20}
          >

            <Link to="/"
            className={classes.link}
            >
              <Typography 
              variant="h6"
              className={classes.typography}
              >
                Find Student
              </Typography>
            </Link>

            <Link to="/group"
            className={classes.link}
            >
              <Typography 
              variant="h6"
              className={classes.typography}
              >
                Find Group
              </Typography>
            </Link>
              <Box 
              sx={{ display: {md: 'flex' } }}
              className={classes.login}
              >
                {renderLoginOrProfile()}
              </Box>

        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
  export default Nav;
  