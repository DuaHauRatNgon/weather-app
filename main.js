var searchBtn = document.querySelector("#searchBtn");
var city = document.querySelector("#city");
var data = document.querySelector("#data");
var tempperature = document.getElementById("tempperature");
var icon = document.querySelector("#icon");
var temperatureData = document.querySelector("#temperatureData");
var C = document.querySelector("#C");
var description = document.querySelector("#description");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#wind");
var sunrise = document.querySelector("#sunrise");
var sunset = document.querySelector("#sunset");
var tinhHinh = document.querySelector("#tinh-hinh");
var tamNhin = document.querySelector("#tam-nhin");

function start(){
    searchBtn.addEventListener("change", function(e){
        var searchBtnValue = e.target.value;
        getDataByFetch(searchBtnValue);
    });
}

function getDataByFetch(value){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=70f7944cc6f0bac7afe6be3d4c6bdc28&lang=vi`;
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(jsDataType){
            renderCity(jsDataType.name);
            renderTemp(jsDataType);
            renderInformation(jsDataType);
        })
}

function renderCity(jsDataTypeCity){
    city.innerHTML = jsDataTypeCity;
}

function renderTemp(jsDataType){
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${jsDataType.weather[0].icon}@2x.png`);  //bieu tuong thoi tiet
    var nhiet_do = Math.round(jsDataType.main.feels_like - 272.15);     //nhiet do C
    C.innerHTML = nhiet_do + "℃";
    description.innerHTML = jsDataType.weather[0].description;      //tinh hinh thoi tiet
}

function renderInformation(jsDataType){
    humidity.innerHTML = "Độ ẩm: " + jsDataType.main.humidity + "%";
    windSpeed.innerHTML = "Tốc độ gió: " + jsDataType.wind.speed +" km/h";
    tinhHinh.innerHTML = "Trạng thái: " + jsDataType.weather[0].main;
    tamNhin.innerHTML = "Tầm nhìn xa: " + jsDataType.visibility/1000 + " km"; 
}

start();