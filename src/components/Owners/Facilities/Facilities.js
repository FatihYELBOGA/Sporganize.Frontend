import FacilitySidebar from "./FacilitySidebar";
import About from "../About/About";
import { Grid } from "@mui/material";
import FacilityCard from "./FacilityCard";
import { useEffect, useState } from "react";

function Facilities(props){
    const {userId} = props;
    const [facilities,setFacilities] = useState([])

    useEffect(() => {

        fetch("http://yelbogafatih-001-site1.btempurl.com/users/sport-facilitiles/"+userId)
          .then((res) => res.json())
          .then((result) => {
            setFacilities(result);
          })
          .catch((error) => console.log(error));
    
      }, []);
    return(
        <div style={{ display: "flex", width: "50%",justifyContent:"center", flexWrap: "wrap",marginLeft:"30%",marginTop:40 }}>
            <FacilitySidebar></FacilitySidebar>
           
            {facilities.map((facility)=>(
                <FacilityCard  facility={facility}></FacilityCard>
            ))}
           
            </div>
    )
}
export default Facilities;