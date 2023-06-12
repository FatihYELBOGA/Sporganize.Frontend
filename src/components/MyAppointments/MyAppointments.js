import React from 'react';
import { useState, useEffect } from 'react';
import MyAppointmentsCard from "../UserAppointments/MyAppointmentCard";

const MyAppointments = (props) => {

    const {userId} = props;
    
    const[myAppointments, setMyAppointments] = useState([]);

    const getMyAppointments = () => {
        fetch("https://sporganize.azurewebsites.net/users/appointments/"+userId)
        .then((res) =>
            res.json() )
        .then(
            (result) => {
                console.log(result);
                setMyAppointments(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getMyAppointments();
    }, [])

    return (
        <div>
            {myAppointments.map((appointment) => (<MyAppointmentsCard appointment={appointment} displayUsers={true} />))}
        </div>
    );
};

export default MyAppointments;
