import Nav from "../components/Nav";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles/LoginStyles";
import React, { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { Link } from "react-router-dom";


function Login() {

    const{setUsername, userName, auth, setAuth} = useContext(LoginContext)

    const classes = useStyles();

    // states represents value in text fields
    const [userNameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const authUser = () => {
        setUsername(userNameValue)
        setUsernameValue("")
        setPasswordValue("")
        setAuth(true)
    }

    // function handle login operation
    const loginHandler = () => {

        var isUserAuth = false; 

        fetch('loginData.json',{method: "get"})
        .then(response => response.json())
        .then(json => {
            json.forEach(user => {
                if(user.userName === userNameValue && 
                    user.password === passwordValue
                ){
                    authUser()
                }
            });
        })
    }

    // render if user is not auth
    const renderContext = () => {
        return(
            <Grid container
            className={classes.mainContainer}
            direction="column"
            alignItems="center"
            spacing={1}
            >
                <Grid item>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        variant="filled"
                        placeholder="Username"
                        size="large"
                        value={userNameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                        />
                </Grid>

                <Grid item>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        variant="filled"
                        placeholder="Password"
                        size="large"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        />
                </Grid>

                <Grid item>
                    <Button
                    variant="contained"
                    size="large"
                    onClick = {() => loginHandler()}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        )
    }

    // render if user is auth
    const renderUserLoggedIn = () => {
        return(
            <Grid container
            alignItems="center"
            direction="column"
            className={classes.authContainer}
            >
                <Grid item>
                    <h1>Hello {userName}!</h1>
                </Grid>
                
                <Grid item>
                    <h1>You are logged in</h1>
                </Grid>

                <Grid item
                >
                    <Link to="/">
                        <h2
                        style={{color:"#0b4096"}}
                        >
                            Home Page
                        </h2>
                    </Link>
                </Grid>
            </Grid>
        )
    }
    
    return(
        <div>
            <Nav/>
            {auth ? renderUserLoggedIn() : renderContext()} 
        </div>
    )
}

export default Login;