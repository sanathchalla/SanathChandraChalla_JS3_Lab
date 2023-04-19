//need to connect to the backend server API dynamically to get the results
//url of the server whic get the data to us
const api = {
    key:"b6c5c2c3ef8d611e38aa79cd75348595",
    base:"https://api.openweathermap.org/data/2.5/"
}
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchBox.value);
    }
}
function getResults(query){
    console.log(query);

    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then(response => {
        displayResults(response)
    });
}
function displayResults(weather){
    console.log(weather);

     // neeed to go section get control over dom and update contents
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = getDateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span> &#8451;</span>`;

    let weather_desc = document.querySelector('.current .weather');
    weather_desc.innerText = `${weather.weather[0].main}`

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)} <span> &#8451;</span> / ${Math.round(weather.main.temp_max)} <span> &#8451;</span>`
}

function getDateBuilder(d){
    console.log(d);
    let days = ["Sunday","Monady","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let date = d.getDate();
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
// fetch(url).then(res => {
//     res.json()
// }).then(resss=>{
//     displayResults( )
// })
// let headers={
//     contentType:"application/json"
// }
// fetch("POST",url,{},headers).then()

//AJAX
//Asynchronous Javascript and XML,JSON
//need to go section get control over dom and update contents
