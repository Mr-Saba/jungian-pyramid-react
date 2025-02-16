import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import finalBackground from '../assets/finalBackground.jpg'
import Label from '../assets/label.png'

function Pyramid({period, setPeriod}) {


  const navigate = useNavigate()


  return (
    <div className='final'>
      <img className='final__background' src={finalBackground} />
      <div className='final__content'>
        <div className='final__content__item' >
          <div className='final__content__cube'></div>
          <div className='final__content__texts'>
            <div className={`final__content__texts__period`}>
              <h1>If you had to summarize your personal brand vision in one powerful sentence, what would it be?</h1>
              <textarea></textarea>
            </div>
          </div> 
        </div>
        <div className='final__content__item'>
          <div className='final__content__cube'></div>
          <div className='final__content__texts'>
            <div className={`final__content__texts__period`}>
              <h1>What specific actions can you take in the next 30 days to start embodying your personal brand?</h1>
              <textarea></textarea>
            </div>
          </div>
        </div> 
      </div>
      <img className='final__label' src={Label} />
      <p className='final__finishText'>finish</p>
    </div>
  )
}

export default Pyramid