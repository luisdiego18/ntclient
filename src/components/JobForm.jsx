import React, { useEffect, useState } from "react";
import { getJob, saveJob } from "../services/jobServices";

const JobForm = ({ match }) => {
  const [job, setJob] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveJob(job);
    window.location = "/jobs";
  };

  useEffect(() => {
    if (match.params.id) {
      async function fetchJob() {
        const jobId = match.params.id;
        const result = await getJob(jobId);
        setJob(result.data);
        console.log(result);
        if (!result) return (window.location = "/not-found");
      }
      fetchJob();
    }
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Job Form - {match.params.id}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={job.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={job.description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
