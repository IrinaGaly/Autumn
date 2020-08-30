import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}
// записали токен, чтобы если пользователь после аутентификации обновил страницу, остался залогиненым

export default axios;

