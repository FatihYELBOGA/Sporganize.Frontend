import React from 'react';
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
           
            <Sidebar />
             {children}
        </div>
    );
};

export default Layout;
