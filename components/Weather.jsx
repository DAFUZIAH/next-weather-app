import React from 'react'
import Image from 'next/image'

const Weather = ({ data }) => {

  return (
    <div className="weather flex justify-center pt-8">
        <div>
            <div>
                <div className="rounded-full bg-black text-yellow-300 flex justify-center py-1">
                    {data.name}
                </div>
                <Image className="mx-auto" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/' width='100' height='100'/>
                <p className="font-semibold text-center mb-4">
                    {data.weather[0].main}
                </p>
            </div>
            <p className="text-9xl font-semibold text-center mb-8">
                {data.main.temp.toFixed(0)}&#176;
            </p>
        </div>
    </div>
  )
}

export default Weather