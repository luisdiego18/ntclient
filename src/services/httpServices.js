import axios from "axios";
import { toast } from "react-toastify";

// handling unexpected errors globaly
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

// eslint-disable-next-line
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
