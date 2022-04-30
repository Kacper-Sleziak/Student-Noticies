import { BrowserRouter as Router,
        Routes, Route } from 'react-router-dom';
import StudentSearch from './subpages/StudentSearch';
import GroupSearch from './subpages/GroupSearch';
import Login from './subpages/Login';
import './index.css';
import { ThemeProvider, createTheme  } from '@material-ui/core';
import React, { useState } from 'react';
import { LoginContext } from "../contexts/LoginContext";
import Profile from './subpages/Profile';

const theme = createTheme({
    palette: {
        primary: {
            main: "#D9D9D9",
            dark: '#002884',
            contrastText: '#fff',
        }
    },

    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }

});

function App() {
    const[userName, setUsername] = useState("")

    return (
        <LoginContext.Provider value={{ userName, setUsername }}>
            <ThemeProvider 
            theme={theme}
            >
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<StudentSearch />} 
                            />
                        <Route
                            path="/group"
                            element={<GroupSearch />} 
                            />
                        <Route
                            path="/login"
                            element={<Login />} 
                        />

                        <Route
                            path="/profile"
                            element={<Profile />} 
                        />
                    </Routes>
                </Router>
            </ThemeProvider>
        </LoginContext.Provider>
    );
}

export default App;
