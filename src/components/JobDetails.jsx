import React from "react";

const JobDetails = (props) => {
  const { job } = props;

  return (
    <div className="card">
      <div className="card-header py-4">
        <h2 className="card-subtitle ">{job.title}</h2>
      </div>
      <div className="card-body">
        <p className="">Salary: {job.salary}</p>
        <p className="">Job Type: </p>
        <p className="">Location</p>
        <h3 className="">Job Description</h3>
        <p className="">
          {job.description}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quidem aliquid velit quasi eius maxime, eveniet sequi facilis? Quidem
          ipsum odit explicabo omnis reprehenderit corporis reiciendis
          cupiditate dolorem, provident iste.
        </p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quidem aliquid velit quasi eius maxime, eveniet sequi facilis? Quidem
        </p>
        <h4 className="">Requirements</h4>
      </div>
    </div>
  );
};

export default JobDetails;
