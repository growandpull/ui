import { axiosInstance } from "../api/AxiosInterceptor";

class AuthService {
  async signIn(data) {
    return (await axiosInstance.post("auth/login", data)).data;
  }

  async signUp(data) {
    return (await axiosInstance.post("auth/register/user", data)).data;
  }
}

const authService = new AuthService();
export default authService;
