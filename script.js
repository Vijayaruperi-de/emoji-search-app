
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// alert("Js is linked");

var inputValue = document.querySelector(".input");
var windspeed = document.querySelector(".windspeed");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");

var apikey = "1fdbf0a2f50cd3d40b9b0a5017429296";

function input(e) {
  e.preventDefault();
  var word = document.getElementById("inputValue").value;
  //   console.log(word);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apikey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var tempvalue = data.main.temp;
      var windspeedValue = data.wind.speed;
      var descValue = data.weather[0].description;

      temp.innerHTML =
        "Temperature:" +
        " " +
        Math.round(tempvalue - 273.15) +
        " " +
        "Degrees celcius";
      desc.innerHTML = "sky condition:" + " " + descValue;
      windspeed.innerHTML =
        "Wind speed:" + " " + windspeedValue + " " + "km / hr";
    });
}

inputValue.addEventListener("submit", input);
