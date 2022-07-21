import http from "./httpServices";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/users";

function userUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function addUser(user) {
  return http.post(apiEndPoint, user);
}
