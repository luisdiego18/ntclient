import http from "./httpServices";

export function getPosts() {
  return http.get("https://jsonplaceholder.typicode.com/users");
}
