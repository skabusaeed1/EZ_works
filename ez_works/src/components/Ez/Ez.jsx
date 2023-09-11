import React from 'react'
import './Ez.css'
import {useState} from 'react'
import {Data} from '../../Data'
import Gridbox from '../Gridbox/Gridbox'
import Input from '../Input/Input'

const Ez = () => {

  return (
    <div className="container">
    <div className="left_section">
      <div className="img_container">
        <img className="logo" src="https://www.ez.works/ez_works.webp" alt="logo"/>
      </div>
      <p className="container_heading">
      A Suite of Business Support Services
      </p>
      <p className="container_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      </p>

      <div className='form_div_1'>
        <Input/>
      </div>
    </div>

    <div className="right_section">
      {Data.map((item, index) => {
        return (
          <div key={index}>
            <Gridbox icon={item.icon} title={item.title} text={item.text} />
          </div>
        );
      })}
    </div>
    <div className='form_div_2'>
        <Input/>
      </div>
  </div>
  )
}

export default Ez
