import React, { useContext } from 'react';
import Nav from '../components/Nav';
import { Button } from "@material-ui/core";
import { useStyles } from "../styles/ProfileStyles";
import { LoginContext } from '../../contexts/LoginContext';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/init";
import { render } from '@testing-library/react';


function Profile() {

    const classes = useStyles();
    const{setUsername, userName, auth2, setAuth} = useContext(LoginContext)
    const [googleUser, loading, error] = useAuthState(auth);

    const logout = () => {
        
        if (googleUser) {
            console.log("google!!!")
        } else{
        setUsername("")
        setAuth(false)
        }
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


    const mainRender = () => {
        if (googleUser || auth2){
            const context = renderProfileContext()
            return context
        }

        else {
            const context = renderLogout()
            return context
        }
    }


    return (
        <div>
            <Nav/>
            
            <div
            className={classes.mainContainer}
            >
                {mainRender()}
            </div>
        </div>
    )
}
export default Profile;

