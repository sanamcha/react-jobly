import React from "react";
import UserContext from "./users/UserContext";

const demoUser= {
    username:"testuser",
    first_name:"testfirst",
    last_name:"testlast",
    email: "test@email.com",
    photo_url: null,

};

const UserProvider = ({
    children, currentUser=demoUser, hasApplied = () => false
}) => (
<UserContext.Provider value={{ currentUser, hasApplied }}>
    {children}
    </UserContext.Provider>
);

export { UserProvider };