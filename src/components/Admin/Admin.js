import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    // const [toggled, setToggled] = props.toggled;
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <FaBars onClick={()=> setCollapsed(!collapsed)}/>
                <h1>Admin Page</h1>
                <p>This is the admin page where you can manage users, settings, and other administrative tasks.</p>
            </div>
        </div>
    )
}

export default Admin;