import axios from "axios";
import logger from "./logServices";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedCode =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedCode) {
    toast.error("An expected error occurred.");
    console.log("Logging the Error!", error); //打印错误日志
    logger.log(error);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
