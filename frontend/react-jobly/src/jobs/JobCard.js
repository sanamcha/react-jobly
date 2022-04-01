import React from "react";
import { useState , useEffect, useContext } from "react";
import UserContext from "../users/UserContext";
import "./JobCard.css";

//JobCardList -> JobCard

function JobCard ({ id, title, companyName, salary, equity }) {
   const { hasApplied, apply } = useContext(UserContext);
   const [applied, setApplied] =useState();

   useEffect( function updateApplied(){
       setApplied(hasApplied(id));
   }, [id, hasApplied]);

   //apply to job
   async function handleApply(e){
       if(hasApplied(id)) return;
       apply(id);
       setApplied(true);
   }


    return (
        <div className="JobCard card">{applied}
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p>{companyName}</p>
            {salary && <div>Salary : {salary}</div>}
          {equity !== undefined && <div>Equity : {equity}</div>}
          <button
              className="btn btn-danger float-right "
              onClick={handleApply}
              disabled={applied} >
            {applied ? "Applied" : "Apply"}
          </button>
          </div>  
        </div>
    );
}

export default JobCard;