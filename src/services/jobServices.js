import http from "./httpServices";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/jobs";

function jobUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getJobs() {
  return http.get(apiEndPoint);
}

export function getJob(jobId) {
  return http.get(jobUrl(jobId));
}

export function addJob(job) {
  return http.post(apiEndPoint, job);
}

export function saveJob(job) {
  if (job._id) {
    const body = { ...job };
    delete body._id;
    return http.put(jobUrl(job._id), {
      title: body.title,
      description: body.description,
      salary: body.salary,
    });
  }
  return http.post(apiEndPoint, job);
}

export function deleteJob(jobId) {
  return http.delete(jobUrl(jobId));
}
