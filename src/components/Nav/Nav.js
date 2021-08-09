import React from 'react'
import { NavLink } from 'react-router-dom';
import NavStyles from './NavStyles.css';

function Nav() {
    return (
        <nav className="nav">
            <div className="item">
                <NavLink activeClassName='active' to="/profile">Profile</NavLink>
            </div>
            <div className="item">
                <NavLink activeClassName='active' to="/dialogs">Messages</NavLink>
            </div>
            <div className="item">
                <NavLink activeClassName='active' to="/news">News</NavLink>
            </div>
            <div className="item">
                <NavLink activeClassName='active' to="/music">Music</NavLink>
            </div> 
            <div className="item">
                <NavLink activeClassName='active' to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav