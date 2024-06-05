// Loader.jsx
import React from 'react'
import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
      <img src="../../resources/Logo.webp" alt="Logo" className="loader-logo" />
      <div className='loader-inner'></div>
    </div>
  )
}

export default Loader