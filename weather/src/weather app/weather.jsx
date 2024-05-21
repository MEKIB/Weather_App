import react,{useState} from 'react'
import axios from 'axios'
import './weather.css'
import search_icon from '../assets/search_icon.png'
import cloud_icon from '../assets/cloud_icon.png'
import wind_icon from '../assets/wind_icon.png'
import humidity_icon from '../assets/humidity_icon.png'
import clear_icon from '../assets/clear_icon.png'
import drizzle_icon from '../assets/drizzle_icon.png'
import rain_icon from '../assets/rain_icon.png'
// import snow_icon from '../assets/snow_icon.png'
function Weather(){
    const api_key="dd065b0d532abfbb5700b9b19a4af64d"
    const[wicon,setWicon]=useState(cloud_icon)
    const search=async()=>{
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&APPID=${api_key}`
        let response=await fetch(url)
        let data=await response.json();
        const humdity=document.getElementsByClassName("humidity_percent")
        const wind= document.getElementsByClassName("wind_speed")
        const temperature=document.getElementsByClassName("weather_temp")
        const location=document.getElementsByClassName("wheather_location")
        humdity[0].innerHTML=data.main.humidity +"%";
        wind[0].innerHTML=data.wind.speed + "km/h";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML=data.name;
        if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
            setWicon(snow_icon)
        }
        else{
            setWicon(clear_icon)
        }
    }
    return (
      <div className="container">
        <h1>WEATHER APP</h1>
        <div className="top_bar">
          <input type="text" className="cityInput" placeholder="search" />
          <div className="search_icon" onClick={search}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather_image">
          <img src={wicon} alt="" style={{ width: "100px" }} />
        </div>
        <div className="weather_temp">24°C</div>
        <div className="wheather_location">Ethiopia</div>
        <div className="data_container">
          <div className="element">
            <img
              src={humidity_icon}
              alt=""
              className="icon"
              style={{ width: "50px" }}
            />
            <div className="data">
              <div className="humidity_percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img
              src={wind_icon}
              alt=""
              className="icon"
              style={{ width: "50px" }}
            />
            <div className="data">
              <div className="wind_speed">18km/h</div>
              <div className="text">wind speed</div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Weather