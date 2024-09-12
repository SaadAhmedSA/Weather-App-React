import React, { useRef, useState } from 'react'
import axios  from 'axios'
import { Card } from './assets/card.jsx'
import "./App.css"

const App = () => {

  const [data, setdata ] = useState([])
  const [loading, setloading ] = useState()
  const city = useRef()
  console.log(data);
  function weatherapp(event){
    event.preventDefault()
    console.log(city.current.value);
    setloading(true)
 
    const key = 'b4db485d7c4c485fa6d84351232508'
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city.current.value}&aqi=no`)
      .then((res) => {
        console.log('res==>', res.data);
        setdata([res.data, ...data]);
        city.current.value = '';
        setloading(false)
      })
      .catch((err) => {
        console.log(err);
        alert('no such city');
        city.current.value = '';
        setloading(false)
      })

  }

  return (
    
    <div className='main text-center'>
      
<div className='inp mt-5'>
<h1 className='text-4xl m-2'>Weather App</h1>
<form onSubmit={weatherapp}>
  <input className='input' type="text" ref={city} placeholder='Enter City Name'/>
  <button type='submit' className='btn btn-info'>{loading ? "loading..." :"Check"}</button>
</form>
{/* <Card/> */}
{data.length>0? data.map((item , index)=>{
  return(
  <Card key={index} name={item.location.name} temperature={item.current.temp_c} src={item.current.condition.icon}  date={item.location.localtime} weatherText={item.current.condition.text} country={item.location.country}/>
  )
}) : <h1 className='text-4xl m-2'>Search Weather..</h1>}
</div>
    </div>
  )
}

export default App

