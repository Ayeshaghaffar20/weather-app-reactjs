
import './App.css'
import Temprature from './component/Temprature'
import Highlights from './component/Highlights'
import { useEffect, useState } from 'react'

function App() {
let [city,setCity]= useState("Karachi")
let [weatherData,setWeatherData]= useState(null)
  const apiUrl =`https://api.weatherapi.com/v1/current.json?key=482ca3b9eb294058b7c210050251201&q=${city}&aqi=no`
  
useEffect(()=>{
    fetch(apiUrl)
  .then((Response)=>{
    if(!Response.ok){
      throw new Error("Error")
    }
    return Response.json();
  })
  .then((data)=>{
    console.log(data);
    setWeatherData(data)
    

  })
  .catch((e)=>{
    console.log(e);
    
  })

},[city])
  

  return (
    <div className='bg-[#1F213A] h-screen flex justify-center align-top'>
      <div className='mt-40 w-1/5 h-1/3'>
      <Temprature setCity={setCity}
      stats={{
        temp:weatherData?.current.temp_c,
        condition:weatherData?.current.condition.text,
        isDay:weatherData?.current.is_day,
        location:weatherData?.location.name,
        time:weatherData?.location.localtime
      }}
      
      />
      
      
      </div>
      <div className='mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6'>
      <h1 className="text-slate-200 text-2xl col-span-2">
          Today's Highlights</h1>
          <Highlights 
          stats={{ 
            title:"Wind Status",
            value:weatherData?.current.wind_mph,
            unit:"mph",
            direction:weatherData?.current.wind_dir,
          }}
          />
          <Highlights 
          stats={{ 
            title:"Humidity",
            value:weatherData?.current.humidity,
            unit:"%",
          }}
          />
          <Highlights
         stats={{
                title: "Air Pressure",
                value: weatherData?.current.pressure_mb,
                unit: "mb",
              }}
          />
          <Highlights/>
      
      </div>

    </div>
  )
}

export default App
