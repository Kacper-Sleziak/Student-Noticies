import Nav from "../components/Nav";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles/LoginStyles";
import React, { useContext, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';


function Login() {

    const{setUsername} = useContext(LoginContext)

    const classes = useStyles();

    // states represents value in text fields
    const [userNameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [auth, setAuth] = useState(false)


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
    
    return(
        <div>

        <Nav/>

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

        

        </div>
    )
}

export default Login;