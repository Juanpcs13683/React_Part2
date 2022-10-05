import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = (props) => {
   const countries = props.p
   console.log('this is weather module', countries)
   // console.log('this is props', props)
     //weather module
  const [weather, setWeather] = useState([])
  

  // this hook get the weather info 
  useEffect(()=>{
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+countries.capital+'&APPID=a03b3c2d01fd32cedd9beeed856179a8')
    .then(response =>{
        console.log('promise of weather fulfilled')
        setWeather(response.data)

    })
  },[])

  console.log('this is weather module- weather', weather)
  const icons = weather.length===0 ? [] : 'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'
  //console.log('icons', icons)

  // {weather.main.temp-273}
    return(
    <div>
        <p><b>temperature:</b> {weather.length===0?'': Math.round(weather.main.temp-273)} celcius</p>
        <img src={icons} alt='image about weather time' />
        <p>wind {weather.length===0?'': weather.wind.speed} m/s</p>
    </div>
)}

export default Weather