import { setTitle } from "../utilities/helper.js";
import CovidService from "../services/covid.service.js";

setTitle("Covid Status Tracker");
CovidService.getCovid();
