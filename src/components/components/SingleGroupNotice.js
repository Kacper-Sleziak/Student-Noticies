import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { useStyles } from "../styles/SingleGroupNotice";


function SingleGroupNotice({notice}) {

    // Styles variable
    const classes = useStyles();
    
    // Splitting tags and putting them to div with border 
    const renderTags = (tags) => {
        var splitedTags = tags.split(" ");

        return(
            splitedTags.map((tag) =>
                <div
                className={classes.tag}
                >
                    {tag}
                </div>
        ))
    }

    const renderParticipants = (participants) => {
        return (
            participants.map((participant) =>
                <div
                className={classes.participant}
                >
                    <li>
                    {participant}
                    </li>
                </div>
        ));
    }

    return (
        <Card
        className = {classes.card}
        >
            <CardHeader
            avatar={<PeopleAltIcon />}
            title={notice.topic}
            subheader={"Subject: " + notice.subject}
            >
            </CardHeader>

            <CardContent>
                <Typography
                variant="body2"
                color="textSecondary"
                >
                    {notice.description}
                </Typography>

                <div
                variant="body2"
                color="textPrimary"
                className={classes.tags}
                >
                    <div
                    style={{marginTop: "3px"}}
                    >
                    Tags: 
                    </div> 
                    
                    {renderTags(notice.tags)}
                </div>

                <div
                className={classes.participants}
                >
                    <div
                    style={{marginBottom: "3px"}}
                    >
                        Participants:
                    </div>
                    {renderParticipants(notice.participants)}
                </div>
            </CardContent>
         </Card>
    );
  }
  
  export default SingleGroupNotice;