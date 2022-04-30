import { makeStyles } from "@material-ui/styles";
import { height } from "@mui/system";

const useStyles= makeStyles({
    mainContainer: {
        marginTop:"100px",
        paddingTop: "3%",
        width:"80%",
        marginLeft:"auto", 
        marginRight:"auto",
        border: "1px solid black",
        height: "500px",
    },

    authContainer: {
        marginTop:"40px",
        paddingTop: "3%",
        width:"80%",
        marginLeft:"auto", 
        marginRight:"auto",
        height: "500px",
    },

    homePage: {
        color: "#0b4096",
    }
  });

  export { useStyles };