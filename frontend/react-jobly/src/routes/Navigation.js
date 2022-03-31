import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../users/UserContext";


//Nav bar site which shows up on every page.

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);

    function logInNav() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/companies">Companies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/jobs">Jobs</NavLink></li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                Log out {currentUser.first_name || currentUser.username}
                </Link>
                </li>  
            </ul>
        );
    }


    function logOutNav(){
        return (
            <ul className="navbar">
            <li className="nav-item">
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
                Sign Up
            </NavLink>
            </li>
        </ul>
        );
    }

    return (
        <nav className="Navigation navbar">
            <Link className="navbar-brand" to="/" > Home
            </Link>
            {currentUser ? logInNav() : logOutNav()}
        </nav>
    )
}

export default Navigation;