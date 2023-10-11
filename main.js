const userLocation = document.querySelector("[data-userLocation]");
const searchLocation = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector("[user-container]");
const grantAccessContainer = document.querySelector(
  "[grantLocation-container]"
);
const btnGrantLocation = document.querySelector("[data-grantAccess]");
const searchBarContainer = document.querySelector("[data-searchBar]");
const searchBarInput = document.querySelector("[data-searchInput]");
const searchButton = document.querySelector("[data-searchButton]");
const loadingScreen = document.querySelector("[loading-screen]");
const weatherInformation = document.querySelector(
  "[weather-informationContainer]"
);
const containerCityNameflag = document.querySelector("container-cityNameFlag");
const dataCityName = document.querySelector("[data-cityName]");
const dataFlag = document.querySelector("[data-countryFlag]");

// intial variables

let currentTab = userLocation;
const API_KEY = "f46184b2a143e593336b13fb498fadd8";
currentTab.classList.add("current-tab");
