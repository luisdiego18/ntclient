import React, { useEffect, useState } from "react";
import { getJobs, deleteJob, updateJob } from "../services/jobService";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fecthJobs() {
      const result = await getJobs();
      setJobs(result.data);
    }
    fecthJobs();
  }, []);

  // Update
  const handleUpdate = async (job) => {
    job.title = "Workss";
    job.description = "Workss";
    console.log(job);
    await updateJob(job, {
      title: job.title,
      description: job.description,
    });

    const currentJobs = [...jobs];
    const index = currentJobs.indexOf[job];
    currentJobs[index] = { ...currentJobs };
    setJobs(currentJobs);
  };

  // Delete
  const handleDelete = async (job) => {
    const currentJobs = jobs;
    setJobs(jobs.filter((j) => j._id !== job._id));
    try {
      await deleteJob(job._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log(
          "The record does not exist - it may have already been deleted"
        );
      } else {
        alert("An error occurred while deleting a word");
        setJobs(currentJobs);
      }
    }
  };

  return (
    <div>
      <h2>Jobs</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(job)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-warning ml-2"
                  onClick={() => handleUpdate(job)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobs;
