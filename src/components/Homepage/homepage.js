import { useEffect } from "react";
import { useState } from "react";
import MyAppointmentsCard from "../UserAppointments/MyAppointmentCard";

function Homepage(){

    const[appointments, setAppointments] = useState([]);

    const getAppointments = () => {
        fetch("https://sporganize.azurewebsites.net/appointments")
        .then((res) =>
            res.json() )
        .then(
            (result) => {
                setAppointments(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getAppointments();
    }, [])

    return (
        <div>
            {appointments.map((appointment) => (<MyAppointmentsCard appointment={appointment} displayUsers={false} />))}
        </div>
    );
}

export default Homepage;