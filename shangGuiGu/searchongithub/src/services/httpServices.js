import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedCode =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedCode) {
    toast.error(error.errorMessage);
    //console.log("Logging the Error!", error); //打印错误日志
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
