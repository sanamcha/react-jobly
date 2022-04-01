import React from "react";
import JobCard from "./JobCard";


function JobCardList({ jobs, apply }){

    return (
        <div className="JobCardList">
           {jobs.map(job =>(
               <JobCard key={job.id} id={job.id} 
               title={job.title} 
               salary={job.salary} 
               companyName={job.companyName} />

           ))}
        </div>
    );
}

export default JobCardList;