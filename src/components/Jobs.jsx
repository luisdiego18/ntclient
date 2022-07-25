import React, { useEffect, useState } from "react";
import { getJobs, deleteJob, updateJob } from "../services/jobServices";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import { NavLink, Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [pages, setPages] = useState({
    currentPage: 1,
    pageSize: 2,
  });

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

  //Pagination
  const handlePageChange = (page) => {
    console.log(pages.currentPage);
    pages.currentPage = page;
    console.log(page);
    // setPages(pages.currentPage);
  };

  return (
    <div>
      <h2>Total Jobs: {jobs.length}</h2>
      <NavLink className="nav-item nav-link" to="/job-form">
        <button type="button" className="btn btn-primary float-right mb-2">
          New Job
        </button>
      </NavLink>
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
              <td>
                <Link to={`/jobs/${job._id}`}>{job.title}</Link>
              </td>
              <td>{job.description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(job)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={jobs.length}
        pageSize={pages.pageSize}
        currentPage={pages.currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Jobs;
