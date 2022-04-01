import React from "react";
import  { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from "./users/UserContext";
import "./App.css";

function Homepage(){
    const { currentUser } = useContext(UserContext);

    
    return (
        <div className="Homepage">
            <div className="container text-center">
            <h1>Jobly</h1>
            <h5>Find all the Jobs here.....</h5>
            { currentUser ?
            <h3>Welcome back, {currentUser.firstName || currentUser.username }</h3> : (
            <p>
                <Link className="btn btn-success mr-3" to="/login">Log in </Link>
                <Link className="btn btn-success" to="/signup">Sign Up</Link>
            </p>
            )}
            </div>
        </div>
    );
}

export default Homepage;