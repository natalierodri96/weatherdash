
let responseURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a5d2ff26f61b3f93f5b7cf43c2c26a1c";
$.ajax({
  url: responseURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keycode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}
function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=imperial&APPID=${api.key}')
    .then(weather => {
        return weather.json ();
    }).then(displayResults);
}
function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText ='${weather.name}, ${weather.sys.country}';
}
