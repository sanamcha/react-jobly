import React from "react";
import { Link } from "react-router-dom";



function CompanyCard({ name, description, logoUrl, handle }) {
    console.log("CompanyCard", logoUrl);
return (
    <Link className="CompanyCard" to={`/companies/${handle}`}>
        <div>
            <h6>
                {name}
                {logoUrl && <img src={logoUrl}
                alt={name} />}
            </h6>
            <p>{description}</p>
        </div>
    </Link>
);

}

export default CompanyCard;