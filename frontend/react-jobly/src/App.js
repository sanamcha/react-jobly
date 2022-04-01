import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import Navigation from "./routes/Navigation";
import JoblyApi from "./api";
import './App.css';
import UserContext from "./users/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import jwt from "jsonwebtoken";


//storing token in local-storage
export const TOKEN_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [token, setToken] = useLocalStorage(TOKEN_ID);

  console.debug("App", "infoLoaded=", infoLoaded, 
  "currentUser=", currentUser, "token=", token);


  useEffect(function loadUser(){
    async function getCurrentUser(){
      if(token) {
        try{
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("loadUser: problem loading....", err)
          setCurrentUser(null);
        }  
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

//handle for logout
function logout(){
  setCurrentUser(null);
  setToken(null);
}

//handle signup
async function signup(signupData) {
  try {
    let token = await JoblyApi.signup(signupData);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("signup failed", errors);
    return { success: false, errors };
  }
}

//handle for login
async function login(loginData) {
  try {
    let token = await JoblyApi.login(loginData);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("login failed", errors);
    return { success: false, errors };
  }
}
//to check jobs applied
function hasApplied(id) {
  return applicationIds.has(id);
}

//apply to job
function apply(id) {
  if(hasApplied(id)) return;
  JoblyApi.apply(currentUser.username, id);
  setApplicationIds(new Set([...applicationIds, id]));
}

if (!infoLoaded) return <h1>Loading....</h1>;

  return (
   <BrowserRouter>
    <UserContext.Provider
        value={{ currentUser, 
        setCurrentUser,
        hasApplied,
        apply}} >
  
      <div className="App">
        <Navigation logout={logout} />
        <Routes login={login} signup={signup} />
      </div>
    </UserContext.Provider>
   </BrowserRouter>
  );
}

export default App;
