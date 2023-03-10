// * Weather
const city = document.querySelector("#weatherCity");
const weatherIcon = document.querySelector("#weatherIcon");
const description = document.querySelector("#weatherTxt");
const temp = document.querySelector("#weatherTemp");
const feeltemp = document.querySelector("#weatherFeeltemp");
const sunrise = document.querySelector("#weatherSunrise");
const sunset = document.querySelector("#weatherSunset");

const onGEOcall = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "245377f2e7dedccea6039d95f5a275ed";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.weather[0].id === 800
        ? (id = 800)
        : (id = parseInt(data.weather[0].id / 100));
      switch (id) {
        case 2:
          description.textContent = "Thunderstorm";
          break;
        case 3:
          description.textContent = "Drizzle";
          break;
        case 5:
          description.textContent = "Rain";
          break;
        case 6:
          description.textContent = "Snow";
          break;
        case 7:
          description.textContent = "Mist";
          break;
        case 8:
          description.textContent = "Clouds";
          break;
        case 800:
          description.textContent = "Clear";
          break;
      }
      weatherIcon.src = `assets/weather/${id}.svg`;
      city.textContent = data.sys.country + " / " + data.name;
      temp.textContent = data.main.temp;
      feeltemp.textContent = data.main.feels_like;
      const UNIX_SUNRISE = data.sys.sunrise;
      const UNIX_SUNSET = data.sys.sunset;
      let sunriseDate = new Date(UNIX_SUNRISE * 1000);
      let sunsetDate = new Date(UNIX_SUNSET * 1000);
      sunrise.textContent =
        sunriseDate.getHours() + ":" + sunriseDate.getMinutes();
      sunset.textContent =
        sunsetDate.getHours() + ":" + sunsetDate.getMinutes();
    });
};
const onGEOerr = () => {
  alert("🌧️ Couldn't retrieve weather information:( ⛈️");
};

weatherIcon.src = `assets/weather/0.svg`;

navigator.geolocation.getCurrentPosition(onGEOcall, onGEOerr);
