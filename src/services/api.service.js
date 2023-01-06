import { API_URL } from "../utilities/constant.js";

const ApiService = {
  customRequest: async (requestData) => {
    const res = await fetch(API_URL + requestData.url, requestData.config);
    const resData = await res.json();
    return await resData;
  },
};

export default ApiService;
