import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom";
import { useStyles } from "../styles/NavStyles";

function Nav() {

    // Styles variable
    const classes = useStyles();
    
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
        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
  export default Nav;
  