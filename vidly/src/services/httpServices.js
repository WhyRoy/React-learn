import axios from "axios";
import logger from "./logServices";

axios.interceptors.response.use(null, (error) => {
  const expectedCode =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedCode) {
    console.log("Logging the Error!", error); //打印错误日志
    logger.log(error);
  }
  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
