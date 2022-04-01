import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";

//componay detail page
//routed -> /companies/:handle

function CompanyDetail(){
    const { handle } = useParams();
    console.debug("CompanyDetail", "handle=", handle);

    const [company, setCompany] = useState(null);

    useEffect( function getCompanyAndJob() {
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if(!company) return <h2> Loading.....</h2>

    return (
        <div className="CompanyDetail col-md-8 offset-md-2">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetail;