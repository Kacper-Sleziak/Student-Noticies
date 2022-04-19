import { makeStyles } from "@material-ui/styles";

// Styles of SingleGroupNotice component
const useStyles = makeStyles({
    card: {
        width: "450px",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "20px",
        borderRadius: "4%",
    },
    tags: {
        marginTop:"19px",
        display: "flex",
        flexWrap: "wrap",
        fontFamily: 'Quicksand'
    },
    tag: {
        marginLeft: "5px",
        padding: "3px",
        border: "0.5px solid #f7f7f7",
        borderRadius: "20px",
        backgroundColor: "#f7f7f7",
        marginBottom: "3px",
    },
    participants: {
        marginTop:"14px",
        fontFamily: 'Quicksand',
    },
    participant: {
        marginLeft: "11px"
    }
    });

export { useStyles };