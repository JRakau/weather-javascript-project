
window.addEventListener('load', () => {

    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    console.log(temperatureDegree);


    const keyapi = "8S2JKDDY6S8WGVTVPBJTKHJ67";
    let apilink;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            apilink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${keyapi}`;

            fetch(apilink)
                .then(Response => {
                    return Response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp } = data.currentConditions;
                    // set DOM Elements from the API
                    temperatureDegree.textContent = data.currentConditions.temp;
                    console.log(temperatureDescription.textContent);
                    temperatureDescription.textContent = data.description;
                    locationTimezone.textContent = data.timezone;
                    console.log(data.description);
                });
        });



    } else {
        /// not allowed geolocation use
    }

    function setIcons(icon, iconID) {
        const skycons = new skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    }

});


