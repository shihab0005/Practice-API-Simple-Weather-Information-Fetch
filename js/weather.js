const Weather_KEY = '6295f08e43206058238c5c5995a9f08c';

const loadWeather = () => {
    const getCityName = document.getElementById('input-field').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getCityName}&appid=${Weather_KEY}&units=metric`;

    fetch(url)
        .then(Response => Response.json())
        .then(data => displayWeatherInformation(data));

}
const cityInformation = (id, value) => {
    document.getElementById(id).innerText = value

}

const displayWeatherInformation = (data) => {
    console.log(data)
    // console.log(data.name)
    // console.log(data.name)
    //set weather icon..
    const URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('wIcon');
    imgIcon.setAttribute('src', URL);

    cityInformation('countryName', data.sys.country);
    cityInformation('cityName', data.name)
    cityInformation('temperature', data.main.temp)
    cityInformation('cloudInf', data.weather[0].main)
    // const cityName = document.getElementById('cityName');
    // cityName.innerText = data.name







}