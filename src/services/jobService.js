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

export function addJob() {
  return http.post(apiEndPoint, {});
}

export function updateJob(jobId) {
  return http.put(jobUrl(jobId));
}

export function deleteJob(jobId) {
  return http.delete(jobUrl(jobId));
}
