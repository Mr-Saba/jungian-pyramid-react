import React, { useState } from 'react'
import landingBackground from '../assets/landingBackground.jpg'
import landingLabel from '../assets/landingLabel.png'
import Cover from '../components/Cover'

function Pyramid({onPageChange}) {
  return (
    <div className='landing'>
      <img className='landing__background' src={landingBackground} />
      <div className='landing__content'>
        <div className='landing__content__cube'></div>
        <div className='landing__content__texts'>
          <h1>persona prism</h1>
          <h1>Shaping Your Professional Persona Branding </h1>
          <p>The purpose of this coaching tool is to help the client create a clear vision of their branding approach. This is done by mixing and combining archetypes to create a Brand Complex. By the end of their work with the Persona Prism, the client will have a unique personal brand built from the five components in this tool.</p>
        </div>
      </div>
      <img className='landing__label' src={landingLabel} />
      <Cover onClick={onPageChange} />
    </div>
  )
}

export default Pyramid