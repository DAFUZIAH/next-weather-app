import React from 'react'

const Informations = ({ data }) => {
  return (
    <div className="bg-black rounded-xl flex justify-between items-center text-yellow-300 px-4 py-6">
        <div className="text-xl font-bold text-center">
            {data.main.feels_like.toFixed(0)}&#176;
            <p className="font-light text-xs mt-2">Feels Like</p>
        </div>
        <div className="text-xl font-bold text-center">
            {data.main.humidity}%
            <p className="font-light text-xs mt-2">Humidity</p>
        </div>
        <div className="text-xl font-bold text-center">
            {data.wind.speed.toFixed(0)} KM/H
            <p className="font-light text-xs mt-2">Wind</p>
        </div>
    </div>
  )
}

export default Informations