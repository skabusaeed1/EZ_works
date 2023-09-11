import React from 'react'
import './Gridbox.css'

const Gridbox = ({ icon, title, text }) => {
  return (
    <div className="Grid_box">
      <div className='grid_container'>
        <div className="grid_icon">{icon}</div>
      <div className="grid_title">{title}</div>
      </div>
      <p className='grid_text'>{text}</p>
    </div>
  )
}

export default Gridbox
