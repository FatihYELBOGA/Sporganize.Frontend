import FacilityList from "./FacilityList";
import FilterReservation from "./FilterReservation";

function Reservation(){

    return (
        <div className="reservation-page">
            <FilterReservation/>
            <FacilityList/>
        </div>
    );
}

export default Reservation;