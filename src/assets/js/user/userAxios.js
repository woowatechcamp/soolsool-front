import axios from "axios";
function createUserAxios() {
  let userAxios = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Authorization": "Bearer " + sessionStorage.getItem("access-token"),
      "Allow-Cross-Origin": "*",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return userAxios;
}

export { createUserAxios };
