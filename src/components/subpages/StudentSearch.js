
import Nav from "../components/Nav";
import Grid from "@material-ui/core/Grid";
import SingleNotice from "../components/SingleNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import React from 'react';
import { getStudents } from "../services/StudentService";
import AddStudentNotice from "../components/AddStudentNotice";
import { useEffect } from 'react';
import { useState } from 'react';
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useStyles } from "../styles/NoticeStyles.js";


function StudentSearch() {

    // States
    const [notices, setNotices] = useState([]);
    const [searchText, setSearchText] = useState("")

    // Styles object 
    const classes = useStyles();

    // Add student notices to state
    // call back functio

    function addStudent(notice) {
        var noticesArray = [...notices, notice]
        setNotices(noticesArray);
    }

    // refresh notices state after adding new student Notice do StudentService 
    // function consider actual search text
    function rehresh() {
    
    }

    // find notices by text given in text field
    const searchNotices = () => {
        if (searchText === ""){
            getStudents().then(data => setNotices(data));
        }

        else {
            const foundNotices = []
            const studentNotices = notices;

            for (var i = 0; i < studentNotices.length ; i++) {
                var notice = studentNotices[i]
                var tags = notice.tags.toLowerCase()
                var description = notice.description.toLowerCase()
                var subject = notice.subject.toLowerCase()

                const text = searchText.toLowerCase()
                
                if(
                    tags.includes(text) || description.includes(text) ||
                    subject.includes(text)
                )

                {
                    foundNotices.push(notice);
                }
            }
            setNotices(foundNotices);
        }
    }

    // Search Handler
    useEffect(() => {
        searchNotices();
    }, [searchText])

    // Render notices 
    const renderNotices = () => {
        if (notices.length !==0){
            return(
                notices.map((notice, key) => (
                    <SingleNotice notice={notice}/>
                    ))
                )
        }
        else {
            return(
                <Typography 
                variant="h6"
                className={classes.noResultsText}
                >
                    No results for given parameters.
                </Typography>
            )
        }
    }
    
    return (
        <div
        style={{backgroundColor:"#F9F8F8"}}
        >
        <Nav/>

        <Grid container 
        className={classes.topContainer}
        direction="column"
        alignItems="center"
        >
            <Grid item
            style={{marginTop: "20px"}}
            >
                <Typography
                variant="h5"
                >
                    Find Student
                </Typography>
            </Grid>

            <Grid item
            xs ={12} sm={8} md={8}
            className={classes.searchingBar}
            >   
                <TextField
                label="search"
                size="large"
                variant="standard"  
                onChange = {(e) => setSearchText(e.target.value)}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchRoundedIcon />
                    </InputAdornment>
                    )
                }}
                />
            </Grid>

            <Grid item
            style={{marginTop: "20px", fontWeight: "100"}}
            >
                <Typography
                variant="h6"
                >
                    You can find notices by: tags, subjects and descriptions
                </Typography>
            </Grid>
        </Grid>

        <Container
        className={classes.noticesContainer}
        >
            {renderNotices()}
        </Container>

        <AddStudentNotice 
        refresh={rehresh}
        addStudent={addStudent}
        />
        </div>
    );
  }
  
  export default StudentSearch;


  
  

