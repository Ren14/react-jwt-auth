import axios from "axios";

const API_URL = "http://localhost:1337/api/v1/user";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "/login", {
        email : username,
        password: password
      })
      .then(response => {
        if (response.data.token) {
          console.log(response.data)
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "/", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();