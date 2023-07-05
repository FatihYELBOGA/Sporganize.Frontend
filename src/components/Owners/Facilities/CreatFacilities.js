import FacilitySidebar from "./FacilitySidebar";
import About from "../About/About";
import { Box } from "@mui/material";

function CreatFacilities(props){
    const{userId} = props;
    return(
        <Box sx={{display:"flex"}}>
            <FacilitySidebar></FacilitySidebar>
            <About userId={userId}></About>
            </Box>
    )
}
export default CreatFacilities;