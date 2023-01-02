import ApiService from "./api.service.js";

const CovidService = {
  getCovid: async () => {
    const requestData = {
      config: {
        methods: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      url: "/covid",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default CovidService;
