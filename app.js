const apikey = "7ddc16629e99dffbeca2f412cb998dc0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".icons");

async function weatherCity(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".winds").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcons.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcons.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcons.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcons.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcons.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display ="block";
}

SearchBtn.addEventListener("click", () => {
    weatherCity(SearchBox.value);
});
