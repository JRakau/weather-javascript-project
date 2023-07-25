/**
 * KEY to access the weather API
 */
const keyapi = "8S2JKDDY6S8WGVTVPBJTKHJ67";

/**
 * Link to the weather API
 */
let apilink;

let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".temperature-section");
let temperatureSpan = document.querySelector(".temperature-section span");
let temperatureMin = document.querySelector(".temp-min");
let temperatureMax = document.querySelector(".temp-max");
let temperatureMinSpan = document.querySelector(".temp-min-section span");
let temperatureMaxSpan = document.querySelector(".temp-max-section span");

let temperatureVar = 0;
let temperatureMinVar = 0;
let temperatureMaxVar = 0;

/**
 * Get data from the weather API using geoLocation
 */
let getGeoLocation = () => {
  let long;
  let lat;

  const keyapi = "8S2JKDDY6S8WGVTVPBJTKHJ67";
  let apilink;

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
          //const { temp } = data.currentConditions;
          // set DOM Elements from the API
          temperature = data.currentConditions.temp;
          temperatureDegree.textContent = convertC(temperature);

          temperatureSpan.textContent = "˚C";
          temperatureMinSpan.textContent = "˚C";
          temperatureMaxSpan.textContent = "˚C";

          temperatureDescription.textContent = data.description;

          locationTimezone.textContent = data.timezone;

          temperatureMinVar = data.days[0].tempmin;
          temperatureMaxVar = data.days[0].tempmax;

          temperatureMin.textContent = convertC(temperatureMinVar);

          temperatureMax.textContent = convertC(temperatureMaxVar);

          //set the icon
          setIcons(
            data.currentConditions.icon,
            document.querySelector(".icon1")
          );
        });
    });
  } else {
    /// not allowed geolocation use
  }
};

window.addEventListener("load", getGeoLocation);

//Change temperature to Celcius/Fahrenheit
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

/**
 *
 * @param
 **/
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    //Clear the input field
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};

window.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

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
