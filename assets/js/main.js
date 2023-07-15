window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature-section");
  const temperatureSpan = document.querySelector(".temperature-section span");

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
          temperatureDegree.textContent = data.currentConditions.temp;

          temperatureDescription.textContent = data.description;

          locationTimezone.textContent = data.timezone;

          //Set Icon
          setIcons(
            data.currentConditions.icon,
            document.querySelector(".icon1")
          );

          //Change temperature to Celcius/Fahrenheit
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(
                (data.currentConditions.temp - 32) * (5 / 9)
              );
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = data.currentConditions.temp;
            }
          });
        });
    });
  } else {
    /// not allowed geolocation use
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
});
