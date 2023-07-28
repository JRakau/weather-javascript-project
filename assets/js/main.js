/********************************************************************
 *
 *                      Variables declaration  section
 *
 * *****************************************************************/

/**
 * KEY to access the weather API
 */
const keyapi = "8S2JKDDY6S8WGVTVPBJTKHJ67";

/**
 * Link to the weather API
 */
let apilink;

/********************************************************************
 *
 *                      DOM elements declaration  section
 ********************************************************************/
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationCityName = document.querySelector(".location-city-name");
let temperatureSection = document.querySelector(".temperature-section");
let temperatureSpan = document.querySelector(".temperature-section span");
let temperatureMin = document.querySelector(".temp-min");
let temperatureMax = document.querySelector(".temp-max");
let temperatureMinSpan = document.querySelector(".temp-min-section span");
let temperatureMaxSpan = document.querySelector(".temp-max-section span");
let citySearch = document.getElementById("city-search");
let searchBtn = document.getElementById("search-button");

let temperatureVar = 0;
let temperatureMinVar = 0;
let temperatureMaxVar = 0;
let cityValue = citySearch.value;

/********************************************************************
 *
 *                      Main section
 *
 * *****************************************************************/

/**********************************************************
 * Function to fetch weather details using geoLocation
 *********************************************************/
let getWeatherByGeoLocation = () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      apilink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${keyapi}`;

      fetch(apilink)
        .then((Response) => {
          return Response.json();
        })

        .then((data) => {
          console.log(data);

          temperature = data.currentConditions.temp;
          temperatureDegree.textContent = convertC(temperature);

          temperatureSpan.textContent = "˚C";
          temperatureMinSpan.textContent = "˚C";
          temperatureMaxSpan.textContent = "˚C";

          temperatureDescription.textContent = data.description;

          locationCityName.textContent = data.timezone;

          temperatureMinVar = data.days[0].tempmin;
          temperatureMaxVar = data.days[0].tempmax;

          temperatureMin.textContent = convertC(temperatureMinVar);

          temperatureMax.textContent = convertC(temperatureMaxVar);

          //set the icon
          setIcons(
            data.currentConditions.icon,
            document.querySelector(".icon1")
          );
        })
        //If geoLocation goes wrong
        .catch(() => {
          cityValue = "Try again using your city name";
          console.log("Try again using your city name");
        });
    });
  } else {
    cityValue = "Try again using your city name";
    console.log("Try again using your city name");
  }
};

/************************************************************************
 * Function to fetch weather details from api
 * and display them using city name as parameter
 ************************************************************************/

let getWeather = () => {
  //If input field is empty
  if (cityValue.length == 0) {
    cityValue = "Please enter a city name";
    console.log("Please enter a city name");
  }
  //If input field is NOT empty
  else {
    apilink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityValue}?key=${keyapi}`;

    //Clear the input field
    cityValue.value = "";
    fetch(apilink)
      .then((Response) => {
        return Response.json();
      })
      //If city name is valid
      .then((data) => {
        console.log(data);
        // set DOM Elements from the API
        temperature = data.currentConditions.temp;
        temperatureDegree.textContent = convertC(temperature);

        temperatureSpan.textContent = "˚C";
        temperatureMinSpan.textContent = "˚C";
        temperatureMaxSpan.textContent = "˚C";

        temperatureDescription.textContent = data.description;

        locationCityName.textContent = data.resolvedAddress;

        temperatureMinVar = data.days[0].tempmin;
        temperatureMaxVar = data.days[0].tempmax;

        temperatureMin.textContent = convertC(temperatureMinVar);

        temperatureMax.textContent = convertC(temperatureMaxVar);

        //set the icon
        setIcons(data.currentConditions.icon, document.querySelector(".icon1"));
      })
      //If city name is NOT valid
      .catch(() => {
        cityValue = "City not found";
        console.log("City not found");
      });
  }
};

/********************************************************************
 *
 *                      Misc. function section
 *
 * *****************************************************************/

/**
 * convertF Convert celcius to fahrenheit
 *
 * @param {*} Celcius the value to convert
 * @return {*} returns the Fahrenheit value
 */
function convertF(celsius) {
  return Math.floor((celsius * 9) / 5 + 32);
}

/**
 * convertC Convert fahrenheit to celcius
 *
 * @param {*} fahrenheit the value to convert
 * @return {*} returns the celcius value
 */
function convertC(fahrenheit) {
  return Math.floor(((fahrenheit - 32) * 5) / 9);
}

/**
 * setIcons sets the icon to the skycons library
 *
 * @param {*} icon the icon to set
 * @param {*} iconID the id of the icon to set
 * @return {*} returns the icon
 */
function setIcons(icon, iconID) {
  const iconObj = new Skycons({ color: "white" });
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  iconObj.play();
  return iconObj.set(iconID, Skycons[currentIcon]);
}

/********************************************************************
 *
 *                      Event listener section
 *
 * *****************************************************************/

/**
 * Event action when the page is loaded
 */
window.addEventListener("load", getWeatherByGeoLocation);

/**
 * Event action when the search button is clicked
 */
searchBtn.addEventListener("click", getWeather);

/**
 * Event action when click on the temperature section
 */
//
temperatureSection.addEventListener("click", () => {
  if (temperatureSpan.textContent === "˚F") {
    temperatureSpan.textContent = "˚C";
    temperatureMinSpan.textContent = "˚C";
    temperatureMaxSpan.textContent = "˚C";
    temperatureDegree.textContent = convertC(temperature);
    temperatureMin.textContent = convertC(temperatureMinVar);

    temperatureMax.textContent = convertC(temperatureMaxVar);
  } else {
    temperatureSpan.textContent = "˚F";
    temperatureMinSpan.textContent = "˚F";
    temperatureMaxSpan.textContent = "˚F";
    temperatureDegree.textContent = temperature;
    temperatureMin.textContent = temperatureMinVar;

    temperatureMax.textContent = temperatureMaxVar;
  }
});
