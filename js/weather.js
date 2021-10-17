const API_KEY = 'a7a5ae986ed012834758b7de614326d4';

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon  = position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        console.log(data.name, data.weather[0].main);
    });
}

function onGeoError() {
    alert("cannot find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);