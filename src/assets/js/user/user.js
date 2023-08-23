import { createUserAxios } from "@/assets/js/user/userAxios";

const axios = createUserAxios();

const ACCESS_TOKEN_HEADER = process.env.VUE_APP_ACCESS_TOKEN_HEADER;
async function join(user, success, fail) {
  await axios.post("/members", JSON.stringify(user)).then(success).catch(fail);
}
async function login(user, success, fail) {
  const member = { email: user.userId, password: user.password };
  await axios
    .post("/auth" + `/login`, JSON.stringify(member))
    .then(success)
    .catch(fail);
}
async function logout(userId, success, fail) {
  await axios
    .get("/auth" + `/${userId}`)
    .then(success)
    .catch(fail);
}
const USER_URI = "/members";
async function modify(user, success, fail) {
  axios.defaults.headers[ACCESS_TOKEN_HEADER] =
    sessionStorage.getItem(ACCESS_TOKEN_HEADER);
  await axios.put(USER_URI, JSON.stringify(user)).then(success).catch(fail);
}

async function leave(userId, success, fail) {
  axios.defaults.headers[ACCESS_TOKEN_HEADER] =
    sessionStorage.getItem(ACCESS_TOKEN_HEADER);
  await axios
    .delete(USER_URI + `/${userId}`)
    .then(success)
    .catch(fail);
}

async function info(userId, success, fail) {
  axios.defaults.headers[ACCESS_TOKEN_HEADER] =
    sessionStorage.getItem(ACCESS_TOKEN_HEADER);
  await axios
    .get(USER_URI + `/info` + `/${userId}`)
    .then(success)
    .catch(fail);
}

export { login, logout, modify, leave, join, info };
