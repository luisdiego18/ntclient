import http from "./httpServices";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/companies";

function companyUrl(id) {
  return `${apiEndPoint}/${id}`;
}

function getCompany(companyId) {
  return http.get(companyUrl(companyId));
}

function getCompanies() {
  return http.get(apiEndPoint);
}

export default {
  getCompany,
  getCompanies,
};
