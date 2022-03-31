import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

function CompanyList(){
    const [companies, setCompanies] = useState([]);

    return (
        <div className="CompanyList">
            <h1>This is company page...</h1>
            <div>
                {companies.map(c => (
                    <CompanyCard 
                    key={c.handle}
                    handle={c.handle}
                    name={c.name}
                    description={c.description}
                    logoUrl={c.logoUrl} />
                ))}

            </div>
            
        </div>
    )
}

export default CompanyList;