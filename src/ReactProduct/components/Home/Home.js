import React, { useEffect, useState } from 'react'
import Details from '../Details/Details'
import Information from '../Information/Information'

import './Home.css'

const Home = () => {
  const [datas, setDatas] = useState([])
  const [time, setTime] = useState([])

  useEffect(() => {
    fetch(`fakedata.json`)
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])

  const handleClick = datas => {
    const newTime = [...time, datas]
    console.log(newTime)
    setTime(newTime)
  }

  return (
    <div className='data-container'>
      <div className='mainContainer'>
        <div className='info-container'>
          {datas.map(data => (
            <Information
              key={data.id}
              data={data}
              handleClick={handleClick}
            ></Information>
          ))}
        </div>
      </div>
      <div className='information-container'>
        <Details time={time}></Details>
      </div>
    </div>
  )
}

export default Home
