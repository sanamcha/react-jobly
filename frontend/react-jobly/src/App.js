import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import JoblyApi from "./api";
import './App.css';
// import UserContext from "./form/userContext";
import CompanyList from "./companies/CompanyList";
import JobList from "./jobs/JobList";
import CompanyDetail from "./companies/CompanyDetail";

//storing token in local-storage
export const TOKEN_ID = "jobly-token";

function App() {
  // const [currentUser, setCurrentUser] = useState([]);




  return (
   <BrowserRouter>
   <Switch >
    {/* <UserContext.Provider */}
      {/*  value={{ currentUser}} */}
    {/*  > */}
      <div className="App">
        {/* <Navigation />
        <Routes /> */}
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Redirect to="/" />
        <h1>HOMEPAGE.......</h1>
      </div>
    {/* </UserContext.Provider> */}
    </Switch>
   </BrowserRouter>
  );
}

export default App;
