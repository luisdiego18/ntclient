import React, { useState } from "react";

const JobForm = () => {
  const [data, setdata] = useState({
    title: "",
    description: "",
  });

  const saveJob = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Job Form</h1>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            value={data.title}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input
            value={data.description}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveJob}>
          Save
        </button>
      </form>
    </div>
  );
};

export default JobForm;
