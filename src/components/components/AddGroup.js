import Grid from "@material-ui/core/Grid";
import TextField  from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import React from 'react';
import GroupService from "../services/GroupService";
import { useState} from 'react';
import { useStyles } from "../styles/AddNoticeStyle";
import 'antd/dist/antd.css';
import { notification} from 'antd';

function AddGroup(props) {

    // States
    const [topic, setTopic] = useState("");
    const [subject, setSubject] = useState("");
    const [tags, setTags] = useState("");
    const [groupLider, setGroupLider] = useState("");
    const [description, setDescription] = useState("");


    // Notification that show after creating new note
    const openNotificationSucces = () => {
      notification['success']({
        message: 'Succes!',
        description:
          'You created new group notice. Everybody going to see it on find group place',
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
      if (topic===""){
        openNotificationError("Topic");
      }

      else if(subject===""){
        openNotificationError("Subject");
      }

      else if(groupLider===""){
        openNotificationError("Group Lider");
      }
      
      else if(tags==="" || tags.includes(",")){
        openNotificationError("Tags");
      }

      else if(description===""){
        openNotificationError("Description");
      }


      else{
        const min = Math.ceil(1000);
        const max = Math.floor(2000);
        var id = Math.floor(Math.random() * (max - min + 1)) + min;
        
        const newNotice = {
          id: id, 
          subject: subject,
          topic: topic,
          tags: tags, 
          description: description,
          participants:[groupLider],
          }

          GroupService.addGroup(newNotice);
          props.refresh();

          openNotificationSucces();
          
          // clear text fields
          setSubject("");
          setTopic("");
          setTags("");
          setDescription("");
          setGroupLider("");
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
        New Group Notice Creator
        </Typography>
      </Grid>
      
      <Grid item>
        <TextField
        label="topic"
        size="large"
        variant="standard" 
        onChange = {(e) => setTopic(e.target.value)}
        value={topic}
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
        label="description"
        size="large"
        variant="standard" 
        onChange = {(e) => setDescription(e.target.value)}
        value={description}
        />
      </Grid>

      <Grid item>
        <TextField
        label="group lider"
        size="large"
        variant="standard" 
        onChange = {(e) => setGroupLider(e.target.value)}
        value={groupLider}
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
  
  export default AddGroup;
  