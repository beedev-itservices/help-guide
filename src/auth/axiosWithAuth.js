import axios from "axios";

export const axiosWithAuth = () => {

  return axios.create({
    baseURL: "http://localhost:500/api/",
  });
};