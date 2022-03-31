import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";

function CompanyList(){
    const [companies, setCompanies] = useState([]);

    useEffect(function getCompaniesOnLoad() {
        search();
    }, []);

    //for search 
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <div className="CompanyList">
            <SearchForm searchFor={search} />
          {companies.length ? (
              <div className="CompaniesList">
              {companies.map(c => (
                  <CompanyCard 
                  key={c.handle}
                  handle={c.handle}
                  name={c.name}
                  description={c.description}
                  logoUrl={c.logoUrl} />
              ))}
               </div>
          ) : (
          <p>No, resuts found..</p>
          )}
    
        </div>
    );
}

export default CompanyList;