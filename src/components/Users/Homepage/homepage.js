import { useEffect } from "react";
import { useState } from "react";
import AppointmentCard from "../UserAppointments/AppointmentCard";
import './Homepage.css'

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

    const handleNewPostButton = () => {

    }

    return (
        <div className="homepage">
            <div className="homepage-sidebar">
                <button className="homepage-new-button" onClick={handleNewPostButton}>+ New post</button>
            </div>
            <div className="homepage-appointments">
                {appointments.map((appointment) => (<AppointmentCard appointment={appointment} displayUsers={false} />))}
            </div>
        </div>
    );
}

export default Homepage;