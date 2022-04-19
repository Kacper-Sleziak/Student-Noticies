
import Navbar from "./Nav";
import Grid from "@material-ui/core/Grid";
import TextField  from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import React from 'react';
import { addStudent } from "../services/StudentService";
import { useState} from 'react';
import { useStyles } from "../styles/AddNoticeStyle";
import 'antd/dist/antd.css';
import { notification} from 'antd';

function AddStudentNotice(props) {

    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tags, setTags] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");


    // Notification that show after creating new note
    const openNotificationSucces = () => {
      notification['success']({
        message: 'Succes!',
        description:
          'You created new notice. Everybody going to see it on find student place',
        duration: 0,
        placement: "bottomRight",
        duration: 4.5,
      });
    };

    // Notification that show after detecting some validation errors
    const openNotificationError = (fieldName) => {
      notification['error']({
        message: fieldName + " error",
        description:
          'Field can not be empty!',
        placement: "bottomRight",
        duration: 4.5,
      });
    };

    // Add Notice to array in Student Service
    const handleSubmit = (e) => {

      // Basic text field validation
      if (firstName===""){
  
        openNotificationError("First name");
      }

      else if(lastName==="") {
        openNotificationError("Last name");
      }

      else if(email===""){
        openNotificationError("Email");
      }
      
      else if(description===""){
        openNotificationError("Description");
      }

      else if(subject===""){
        openNotificationError("Subject");
      }
   
      else if(tags==="" || tags.includes(",")){
        openNotificationError("Tags");
      }


      else{
        const min = Math.ceil(1000);
        const max = Math.floor(2000);
        var id = Math.floor(Math.random() * (max - min + 1)) + min;
        
        const newNotice = {
          id: id, 
          firstName: firstName, 
          lastName: lastName,
          email: email,
          subject: subject, 
          tags: tags, 
          description: description
          }

    
          props.addStudent(newNotice);
          props.refresh();

          openNotificationSucces();
          
          // clear text fields
          setFirstName("");
          setLastName("");
          setTags("");
          setEmail("");
          setDescription("");
          setSubject("");
        }
    }

    const classes = useStyles();

    // Show how tags will look when new notice 
    // will be created
    const renderTagsVisualisation = () => {
      if (tags.length !== 0){
        var splitedTags = tags.split(" ");
        return(
          splitedTags.map((tag) =>
              <div
              className={classes.tag}
              >
                {tag}
              </div>
        ));
    }
  }

    return (
      <>

      <Grid container 
      className={classes.container}
      direction="column"
      alignItems="center"
      spacing={3}
      >
      
      <Grid item>
        <Typography
        className={classes.header}
        >
        New Notice Creator
        </Typography>
      </Grid>
      
      <Grid item>
        <TextField
        label="first name"
        size="large"
        variant="standard" 
        onChange = {(e) => setFirstName(e.target.value)}
        value={firstName}
        />
      </Grid>

      <Grid item>
        <TextField
        label="last name"
        size="large"
        variant="standard"
        onChange = {(e) => setLastName(e.target.value)} 
        value={lastName}
        />
      </Grid>

      <Grid item>
        <TextField
        label="email"
        size="large"
        variant="standard"
        onChange = {(e) => setEmail(e.target.value)}
        value={email} 
        />
      </Grid>

      <Grid item>
        <TextField
        label="description"
        size="large"
        variant="standard" 
        onChange = {(e) => setDescription(e.target.value)}
        value={description}
        />
      </Grid>

      <Grid item>
        <TextField
        label="subject"
        size="large"
        variant="standard" 
        onChange = {(e) => setSubject(e.target.value)}
        value={subject}
        />
      </Grid>      

      <Grid item>
        <TextField
        label="tags"
        size="large"
        variant="standard" 
        onChange = {(e) => setTags(e.target.value)}
        value={tags}
        />
      </Grid>

      <div
      className={classes.tagsContainer}
      >
        {renderTagsVisualisation()}
      </div>

      <Button
      type="submit"
      variant="outlined"
      style={{marginTop:"20px"}}
      onClick={handleSubmit}
      >
        Add notice
      </Button>
      
      </Grid>
      </>
    );
  }
  
  export default AddStudentNotice;
  