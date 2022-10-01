import React from 'react'
import './Information.css'

const Information = props => {
  const { handleClick, data } = props
  const { name, time, age, img, description } = data

  return (
    <div className='info-card'>
      <img className='data-image' src={img} alt='' />
      <div className='details-container'>
        <h3>{name}</h3>
        <p className='description'>{description}</p>
        <p>
          Perfect For: <b>{age} years</b>
        </p>
        <p>
          Time Need: <b>{time}s</b>
        </p>
      </div>
      <button onClick={() => handleClick(time)} className='info-btn'>
        <p>Add to list</p>
      </button>
    </div>
  )
}

export default Information
