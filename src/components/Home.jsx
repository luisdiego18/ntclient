import React, { useEffect, useState } from "react";
import Job from "./Job";
import JobDetails from "./JobDetails";
import { getJobs } from "../services/jobServices";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const result = await getJobs();
      setJobs(result.data);
    }

    fetchJobs();
  }, []);

  const handleSelect = (job) => {
    console.log("cliked", job);
    setJob(job);
  };

  return (
    <div>
      <h1> Home Page</h1>
      <div className="row">
        <div className="col-4">
          {jobs.map((job) => (
            <Job job={job} key={job._id} onSelect={handleSelect} />
          ))}
        </div>
        <div className="col-8">
          <JobDetails job={job} />
        </div>
      </div>
    </div>
  );
};

export default Home;
