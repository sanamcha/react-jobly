import React from "react";
import { useState , useEffect } from "react";
import UserContext from "../users/UserContext";


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
            {salary && <div><small>Salary: {salary}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
          <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
              onClick={handleApply}
              disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </button>
          </div>  
        </div>
    )


}

export default JobCard;