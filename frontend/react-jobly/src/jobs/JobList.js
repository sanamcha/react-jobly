import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCardList from "./JobCardList";
import Search from "../SearchForm";


//show list of jobs from api
function JobList() {

    const [jobs, setJobs] = useState([]);
  
    useEffect(function getAllJobs() {
      search();
    }, []);

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
}

    return (
    <div className="JobList">
        <Search searchFor={search} />
        {jobs.length ? 
        <JobCardList jobs={jobs} />
            : <p className="lead"> No results found...</p>
        }
      </div>
 );
}