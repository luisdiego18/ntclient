import http from "./httpServices";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/users";

export function getPosts() {
  return http.get(apiEndPoint);
}
