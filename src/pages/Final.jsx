import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import finalBackground from '../assets/finalBackground.jpg'
import Label from '../assets/Label.png'

function Pyramid({period, setPeriod}) {

  const inputRef = useRef()

  const navigate = useNavigate()


  return (
    <div className='final'>
      <img className='final__background' src={finalBackground} />
      <div className='final__content'>
        <div style={{display: 'flex'}}>
          <div className='final__content__cube'></div>
          <div className='final__content__texts'>
            <div className={`final__content__texts__period`}>
              <h1>If you had to summarize your personal brand vision in one powerful sentence, what would it be?</h1>
              <input ref={inputRef} onChange={(e) => setPeriod(e.target.value)} value={period} type='text' maxLength={10} />
            </div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div className='final__content__cube'></div>
          <div className='final__content__texts'>
            <div className={`final__content__texts__period`}>
              <h1>What specific actions can you take in the next 30 days to start embodying your personal brand?</h1>
              <input ref={inputRef} onChange={(e) => setPeriod(e.target.value)} value={period} type='text' maxLength={10} />
            </div>
          </div>
        </div>
      </div>
      <img className='final__label' src={Label} />
    </div>
  )
}

export default Pyramid