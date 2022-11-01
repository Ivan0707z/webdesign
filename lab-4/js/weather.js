function myWeatherJSON(data) {
    console.log(data);

    document.getElementById('cloud').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';

    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = data.main.temp;

    document.getElementById('speed').innerHTML = data.wind.speed;
    document.getElementById('deg').innerHTML = data.wind.deg;
    document.getElementById('gust').innerHTML = data.wind.gust;

    document.getElementById('feels_like').innerHTML = data.main.feels_like;
    document.getElementById('gust').innerHTML = data.wind.gust;
    document.getElementById('humidity').innerHTML = data.main.humidity;
}


var apis = '5e877397a40ddd1e9263281697195144',
    city = 'Vinnytsia, UA';

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apis + "&units=metric&lang=ua")
    .then(res => res.json())
    .then(data => { myWeatherJSON(data); });