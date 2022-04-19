import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from "../styles/SingleNoticeStyles";


function SingleNotice({notice}) {

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
            )
        )
    }

    return (
        <Card
        className = {classes.card}
        >
            <CardHeader
            avatar={<AccountCircleIcon />}
            title={notice.firstName + " " + notice.lastName}
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
            </CardContent>
         </Card>
    );
  }
  
  export default SingleNotice;