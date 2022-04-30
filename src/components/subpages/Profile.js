import React, { useContext, useState } from 'react';
import Nav from '../components/Nav';
import { Button } from "@material-ui/core";
import { useStyles } from "../styles/ProfileStyles";
import { LoginContext } from '../../contexts/LoginContext';
import Login from './Login';
import { Link } from "react-router-dom";


function Profile() {

    const classes = useStyles();
    const{setUsername, userName, auth, setAuth} = useContext(LoginContext)

    const logout = () => {
        setUsername("")
        setAuth(false)
    }

    const renderProfileContext = () => {
        return(
            <div>
                <Button
                size="large"
                onClick={() => logout()}
                >
                    Logout
                </Button>
            </div>   
        )
    }

    const renderLogout= () => {
        return (
            <h1>See you next time!</h1>
        )
    }


    return (
        <div>
            <Nav/>
            
            <div
            className={classes.mainContainer}
            >
                {auth ? renderProfileContext() : renderLogout()}
            </div>
        </div>
    )
}
export default Profile;

