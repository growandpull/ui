import axios from "axios";
import { useEffect, useState } from "react";
import AuthManager from "../auth/TokenService";
import useAuth from "../auth/useAuth";

const axiosInstance = axios.create({
  baseURL: "https://growandpull.pp.ua/api/v1/",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (
      config.url.endsWith("auth/login") ||
      config.url.endsWith("auth/register/user")
    )
      return config;

    let token;
    try {
      token = await AuthManager.getAccessToken();
    } finally {
      if (token && config?.headers) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AxiosInterceptor = ({ children }) => {
  const [isSet, setIsSet] = useState(false);
  const { signOut } = useAuth();

  useEffect(() => {
    const responseOnFulfilledInterceptor = (response) => {
      return response;
    };

    const responseOnRejectedInterceptor = async (err) => {
      if (err?.response?.status === 401 || 403) {
        await signOut();
      }
      return Promise.reject(err);
    };

    const responseInterceptor = axiosInstance.interceptors.response.use(
      responseOnFulfilledInterceptor,
      responseOnRejectedInterceptor
    );

    setIsSet(true);
    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [signOut]);

  return <>{isSet && children}</>;
};

export { axiosInstance };
export default AxiosInterceptor;
