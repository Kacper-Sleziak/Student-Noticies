import { makeStyles } from '@material-ui/core/styles';
  
// styles
const useStyles= makeStyles({
container: {
    marginTop:"48px",
    paddingBottom: "60px",
    width:"90%",
    marginLeft:"auto", 
    marginRight:"auto",
},  
header: {
    fontSize: "25px",
    marginTop: "30px"
},
tag: {
    marginLeft: "5px",
    padding: "3px",
    border: "0.5px solid white",
    borderRadius: "20px",
    backgroundColor: "white",
    marginBottom: "3px",
},
tagsContainer: {
    display:"flex", 
    flexDirection:"row", 
    width:"200px",
    flexWrap: "wrap",
}
});

export { useStyles };