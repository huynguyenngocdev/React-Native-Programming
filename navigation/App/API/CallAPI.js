import axios from "axios";
const API_URL = "https://61d3eb6eb4c10c001712bb1f.mockapi.io/api/v1";

export const CallAPI = (endpoint, method = "GET", body) =>
  axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.error(error);
  });
