import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}
// записали токен, чтобы если пользователь после аутентификации обновил страницу, остался залогиненым


axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequesr = error.config;

    if (error.response.status === 401) {
      const response= await axios.post("/refreshToken");
      const token = response.data.token;

      localStorage.setItem("token", token);
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      originalRequesr.headers["Authorization"] = `Bearer ${token}`;
      
      return axios(originalRequesr);
    }

    return Promise.reject(error);
  }
)

export default axios;

