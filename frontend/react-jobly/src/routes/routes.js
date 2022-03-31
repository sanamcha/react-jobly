import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";



function Routes({ login, signup }) {

    return (
        <div>
            <Switch>
                <Route exact path="/"><Homepage /></Route>

                <Route exact path="/companies"><CompanyList /></Route>

                <Route exact path="/companies/:handle"><CompanyDetail /></Route>

                <Route exact path="/jobs"><JobList /></Route>

                <Redirect to="/" />

            </Switch>
        </div>
    );
}

export default Routes;