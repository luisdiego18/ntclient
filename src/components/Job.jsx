import React from "react";

const Job = (props) => {
  const { job, onSelect } = props;

  return (
    <div
      className="card shadow-sm mb-3 bg-white rounded"
      onClick={() => onSelect(job)}
    >
      <h5 className="card-header bg-transparent font-weight-bold">
        {job.title}
      </h5>
      <div className="card-body">
        <h6 className="card-subtitle mb-2">Manpower LLC</h6>
        <p className="card-subtitle text-muted mb-3">Milwaukee, WI</p>
        <p className="card-subtitle text-success font-weight-bold mb-2">
          ${job.salary} / Per year
        </p>
        <p className="card-subtitle">Remote</p>
        <button className="btn btn-primary float-right">Apply</button>
      </div>
    </div>
  );
};

export default Job;
