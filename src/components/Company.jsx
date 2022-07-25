import React, { useState, useEffect } from "react";
import company from "../services/companyService";

const Company = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const result = await company.getCompanies();
      setCompanies(result.data);
    }
    fetchCompanies();
  }, []);

  return (
    <div className="container">
      <ul className="list-group">
        {companies.map((company) => (
          <li className="list-group-item" key={company._id}>
            {company.name} - {company.website}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
