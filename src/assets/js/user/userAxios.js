import axios from "axios";
function createUserAxios() {
  let userAxios = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "access-token": sessionStorage.getItem("access-token"),
      "Allow-Cross-Origin": "*",
    },
  });
  return userAxios;
}

export { createUserAxios };
