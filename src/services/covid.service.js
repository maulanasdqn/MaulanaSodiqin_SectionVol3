import ApiService from "./api.service.js";

const CovidService = {
  getCovid: async () => {
    const requestData = {
      config: {
        methods: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": "480d0aeb78bd0064d45ef6b2254be9b3",
        },
      },
      url: "/kasus/total",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default CovidService;
