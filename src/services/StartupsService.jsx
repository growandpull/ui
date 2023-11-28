import { axiosInstance } from "../api/AxiosInterceptor";

class StartupsService {
  async getStartups(pageNumber) {
    return (await axiosInstance.get(`startups?pageNumber=${pageNumber}`)).data;
  }
}

const startupsService = new StartupsService();
export default startupsService;
