<<<<<<< HEAD
const apiKey = "0e9e8e4c22740465c7853f0d79dd7e29";

async function getWeather(){

  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();
let icon="☀";
if(data.weather[0].main=="clouds"){
  icon="☁";
}
else if(data.weather[0].main=="rain"){
  icon="🌧";
}
else if(data.weather[0].main=="clear"){
  icon="☀";
}
  console.log(data);
  if(data.cod!=200){
    alert(data.message);
    return;
  }
  document.getElementById("cityName").innerHTML =
    `${icon} ${data.name}`;

  document.getElementById("temperature").innerHTML =
    `Temperature: ${data.main.temp} °C`;

  document.getElementById("description").innerHTML =
    `Weather: ${data.weather[0].description}`;

  document.getElementById("humidity").innerHTML =
    `Humidity: ${data.main.humidity}%`;

  document.getElementById("wind").innerHTML =
    `Wind Speed: ${data.wind.speed} m/s`;

}
=======
const apiKey = "5401a1774f8da764de6ab8d0db275123";

async function getWeather(){

  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();
let icon="☀";
if(data.weather[0].main=="clouds"){
  icon="☁";
}
else if(data.weather[0].main=="rain"){
  icon="🌧";
}
else if(data.weather[0].main=="clear"){
  icon="☀";
}
  console.log(data);
  if(data.cod!=200){
    alert(data.message);
    return;
  }
  document.getElementById("cityName").innerHTML =
    `${icon} ${data.name}`;

  document.getElementById("temperature").innerHTML =
    `Temperature: ${data.main.temp} °C`;

  document.getElementById("description").innerHTML =
    `Weather: ${data.weather[0].description}`;

  document.getElementById("humidity").innerHTML =
    `Humidity: ${data.main.humidity}%`;

  document.getElementById("wind").innerHTML =
    `Wind Speed: ${data.wind.speed} m/s`;

}
>>>>>>> 1063fd2 (updated weather app)
