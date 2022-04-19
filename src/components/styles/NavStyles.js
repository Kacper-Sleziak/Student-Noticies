import { makeStyles } from "@material-ui/styles";

const useStyles= makeStyles({
    appbar: {
      background: "#121212",
    },
    
    typography: {
      color: "white",
      marginRight: "35px",
      cursor: "pointer",
    },

    link: {
      textDecoration: 'none', 
      color:"white",
    }

  });

  export { useStyles };