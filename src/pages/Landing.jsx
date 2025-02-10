import React, { useRef, useState } from 'react'
import landingBackground from '../assets/landingBackground.jpg'
import landingLabel from '../assets/landingLabel.png'
import Cover from '../components/Cover'

function Pyramid({onPageChange, period, setPeriod}) {

  const [isStarterContentVisible, setIsStarterContentVisible] = useState(true)

  const inputRef = useRef()

  const handleCoverClick = () => {
    if(!period && isStarterContentVisible) {
      setIsStarterContentVisible(false)
    } 
  }
  const handlePageChange = () => {
    if(!period || period.trim() === '') {
      inputRef.current.classList.add('error')
    } else {
      onPageChange()
    }
  }

  const handleInputChange = () => {

  }

  return (
    <div className='landing'>
      <img className='landing__background' src={landingBackground} />
      <div className='landing__content'>
        <div className='landing__content__cube'></div>
        <div className='landing__content__texts'>
          {
            isStarterContentVisible ? 
              <div className={`landing__content__texts__starter ${isStarterContentVisible ? 'fade-in' : 'fade-out'}`}>
                <h1>persona prism</h1>
                <h1>Shaping Your Professional Persona Branding </h1>
                <p>The purpose of this coaching tool is to help the client create a clear vision of their branding approach. This is done by mixing and combining archetypes to create a Brand Complex. By the end of their work with the Persona Prism, the client will have a unique personal brand built from the five components in this tool.</p>
              </div>
            :
              <div className={`landing__content__texts__period ${isStarterContentVisible ? 'fade-out' : 'fade-in'}`}>
                <h1>Could you please specify the timeframe within which you aim to develop your professional persona?</h1>
                <input ref={inputRef} onChange={(e) => setPeriod(e.target.value)} value={period} type='text' maxLength={10} />
              </div>
          }
        </div>
      </div>
      <img className='landing__label' src={landingLabel} />
      <p className='landing__startText' onClick={handlePageChange}>start</p>
      <Cover onClick={handleCoverClick} />
    </div>
  )
}

export default Pyramid