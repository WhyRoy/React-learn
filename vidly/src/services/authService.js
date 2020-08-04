import http from "./httpServices";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = `${apiUrl}/auth`;
const tokenkey = "token";

http.setJwt(getJwt()); //使每个axios请求都带一个特定的请求头属性

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  console.log(jwt);
  localStorage.setItem(tokenkey, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenkey, jwt);
}

function logout() {
  localStorage.removeItem(tokenkey);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenkey);
    return jwtDecode(jwt); //这个函数的参数不能为空，否则报错
  } catch (ex) {
    return null;
  } //忽略无token的问题
}

export function getJwt() {
  return localStorage.getItem(tokenkey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
