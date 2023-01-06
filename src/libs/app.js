import CovidService from "../services/covid.service.js";
import hamburgerMenu from "./hamburgerMenu.js";

hamburgerMenu("block");
CovidService.getCovid();
