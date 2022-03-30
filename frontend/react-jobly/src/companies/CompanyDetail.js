import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";

//componay detail page
//routed -> /companies/:handle

function CompanyDetail(){
    const { handle } = useParams();

    const [company, setCompany] = useState([]);

    useEffect( function getCompanyAndJob() {
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    return (
        <div>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetail;