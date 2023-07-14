
let long;
let lat;
const keyapi = "8S2JKDDY6S8WGVTVPBJTKHJ67";
const apilink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${key}`;

window.addEventListener('load', () => {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

           
        });

        fetch(apilink)
            .then(Response => {
                return Response.json();
            })
            .then(data => {
                console.log(data);
            });

    } else {
        /// not allowed geolocation use
    }
});


