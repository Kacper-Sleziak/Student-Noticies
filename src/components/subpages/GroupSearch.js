import Nav from "../components/Nav";
import Grid from "@material-ui/core/Grid";
import SingleGroupNotice from "../components/SingleGroupNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import PropTypes from 'prop-types';
import GroupService from "../services/GroupService";
import styles from "../styles/GroupNoticeStyles";
import AddGroup from "../components/AddGroup"

class GroupSearch extends Component {

    constructor(props) {
      super(props);

      this.state = {
        searchText: "",
        groups: [],
      };
    }

    componentDidMount() {
        this.setState({groups: GroupService.getGroups()})
    }

    // refresh notices state after adding new student Notice do StudentService 
    refresh = () => {
        this.searchNotices();
    }
    

    componentDidUpdate(prevProps, prevState) {
        if(this.state.searchText !== prevState.searchText) {
            this.searchNotices();
        }
    }

    renderNotices = () => {
        if (this.state.groups.length !==0){
            return (
                this.state.groups.map((notice, key) => (
                    <SingleGroupNotice notice={notice}/>
                ))
            );
        }
    }

    // find notices by text given in text field
    searchNotices = () => {
        if (this.state.searchText === ""){
            this.setState({groups: GroupService.getGroups()});
        }

        else {
            const foundNotices = [];
            const groupNotices = GroupService.getGroups();

            for (var i = 0; i < groupNotices.length ; i++) {
                var notice = groupNotices[i]
                var tags = notice.tags.toLowerCase();
                var description = notice.description.toLowerCase();
                var subject = notice.subject.toLowerCase();
                var topic = notice.topic.toLowerCase();

                const text = this.state.searchText.toLowerCase();
                
                if(
                    tags.includes(text) || description.includes(text) ||
                    subject.includes(text) || topic.includes(text)
                )

                {
                    foundNotices.push(notice);
                }
            }
            this.setState({groups: foundNotices});
        }
    }

    render() {
      const { classes } = this.props;
      
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
                    Find Group
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
                onChange = {(e) => this.setState({searchText: (e.target.value)})}
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
                    You can find notices by: tags, subjects, topics and descriptions
                </Typography>
            </Grid>
        </Grid>

        <Container
        className={classes.noticesContainer}
        >
            {this.renderNotices()}
        </Container>

        <AddGroup refresh={this.refresh}/>
        </div>
      )
    }
}

GroupSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupSearch);
