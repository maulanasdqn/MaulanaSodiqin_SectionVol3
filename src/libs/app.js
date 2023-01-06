import { menu, hamburgerMenu } from "./hamburgerMenu.js";
import CovidService from "../services/covid.service.js";

const getCovidData = async () => {
  const resData = await CovidService.getCovid();
  console.log(await resData);
};

getCovidData();

let navTogled = false;

menu.addEventListener("click", () => {
  navTogled ? (navTogled = false) : (navTogled = true);
  hamburgerMenu(navTogled);
});
