import { useEffect } from "react";
import { useState } from "react";
import AppointmentCard from "../UserAppointments/AppointmentCard";
import './Homepage.css'
import NewPost from "../NewPost/NewPost.js"

function Homepage(props){

    const [appointments, setAppointments] = useState([]);
    const [newPost, setNewPost] = useState(false);
    const [postAdded, setPostAdded] = useState(false);

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
        if (postAdded) {
          getAppointments();
          setPostAdded(false);
        }
    }, [postAdded]);

    useEffect(() => {
        getAppointments();
    }, [])

    const handleNewPostButton = (e) => {
        e.preventDefault();
        setNewPost(!newPost);
    }

    return (
        <div className="homepage">
            <div className="homepage-sidebar">
                <button className="homepage-new-button" onClick={handleNewPostButton}>+ New post</button>
            </div>
            { newPost ?
                <div className="homepage-new-post">
                    <NewPost userId={props.userId} setNewPost={setNewPost} setPostAdded={setPostAdded} />
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