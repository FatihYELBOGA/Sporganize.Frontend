import React from 'react';
import Sidebar from "./Sidebar";


const Layout = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar setUserId={props.setUserId} setRole={props.setRole} />
        </div>
    );
};

export default Layout;