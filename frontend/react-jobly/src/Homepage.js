import React from "react";
import  { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from "./users/UserContext";


function Homepage(){
    const { currentUser } = useContext(UserContext);

    
    return (
        <div className="Homepage">
            <h1>Jobly</h1>
            <p>Find all the Jobs here.....</p>
            { currentUser ?
            <h3>Welcome back, {currentUser.firstName || currentUser.username }</h3> : (
            <p>
                <Link className="btn btn-primary" to="/login">Log in </Link>
                <Link className="btn btn-primary" to="/signup">Sign Up</Link>
            </p>
            )}
        </div>
    );
}

export default Homepage;