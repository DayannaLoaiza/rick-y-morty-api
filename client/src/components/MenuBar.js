import React from 'react';
import './css/MenuBar.css';
import { LogoutButton } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

function MenuBar(){
    const { user } = useAuth0();
    
    return (
        <nav className="navbar nav_color nav nav-pills nav-fill">
                <img src="../../static/img/Rick-and-Morty.png"/>
                <div className="d-flex flex-column gap-3 flex-md-row align-items-center text-white mb-0">                   
                    <p>{user.email}</p>
                    <LogoutButton />
                </div>
        </nav>
    )
}

export default MenuBar;