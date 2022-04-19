import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    topContainer: {
        marginTop:"48px",
        paddingBottom: "60px",
        width:"80%",
        marginLeft:"auto", 
        marginRight:"auto",
        borderBottom: "1px solid black"
    },

    noticesContainer: {
        width:"90%",
        alignItems: "center",
        paddingTop: "20px",
        borderBottom: "1px solid black"
    },

    searchingBar: {
        display: "flex", 
        justifyContent: "center", 
        marginTop:"30px"
    },

    noResultsText: {
        marginTop:"80px", 
        marginBottom:"80px", 
        display:"flex", 
        justifyContent: "center"
    }
    });

export { useStyles };