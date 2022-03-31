import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../users/UserContext";

//to check valid current user, if no user redirects login form.

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);

    if( !currentUser ) {
        return <Redirect to ="/login" />
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default PrivateRoute;