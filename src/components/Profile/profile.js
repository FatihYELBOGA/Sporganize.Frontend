import React from 'react';
import Layout from '../Sidebar/Layout';

const Profile = (props) => {
    return (
        <Layout setUserId={props.setUserId} setRole={props.setRole} />
    );
};

export default Profile;
