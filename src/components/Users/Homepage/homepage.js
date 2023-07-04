import { useEffect } from "react";
import { useState } from "react";
import AppointmentCard from "../UserAppointments/AppointmentCard";
import './Homepage.css'
import NewPost from "../NewPost/NewPost.js"

function Homepage(props)
{
    // appointments and newPost useStates
    const [appointments, setAppointments] = useState([]);
    const [newPost, setNewPost] = useState(false);

    // load the appointments
    const getAppointments = () => {
        fetch("https://localhost:7120/appointments")
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
    
    // load the appointments for loading
    useEffect(() => {
        getAppointments();
    }, [])

    // load tge appointments for each clicking the the New post button
    useEffect(() => {
        getAppointments();
    }, [newPost]);

    // change the newPost state for each clicking
    const handleNewPostButton = (e) => {
        e.preventDefault();
        setNewPost(!newPost);
    }

    // the New post button and posts here 
    return (
        <div className="homepage">
            <div className="homepage-sidebar">
                <button className="homepage-new-button" onClick={handleNewPostButton}>+ New post</button>
            </div>
            { newPost ?
                <div className="homepage-new-post">
                    <NewPost userId={props.userId} setNewPost={setNewPost} />
                </div>
                :
                <div className="homepage-appointments">
                    {appointments.map((appointment) => (<AppointmentCard appointment={appointment} displayUsers={false} />))}
                </div>

            }
        </div>
    );
}

export default Homepage;