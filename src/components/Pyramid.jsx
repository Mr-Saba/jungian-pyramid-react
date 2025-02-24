import React from 'react'
import PyramidImg from '../assets/pyramid.png'
import {pyramidTextBackgroundImages, pyramidTitles} from '../data/pyramid.js'

function Pyramid({selectedOptions, selectedOptionImages}) {
  return (
    <div className='pyramid'>
        <div className='pyramid__numerationContainer'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className='pyramid__numerationContainer__item' key={index}>{index + 1}</div>
          ))}
        </div>
        <img src={PyramidImg} />
        <div className='pyramid__titlesContainer'>
          {pyramidTitles.map((item, j) => {
            if(selectedOptions[j]) {
              return <p className='pyramid__titlesContainer__item' key={j}>{item}</p>
            }
          })}
        </div>
        <div className='pyramid__optionsContainer'>
          {pyramidTextBackgroundImages.map((item, index) => (
            <div className={`pyramid__optionsContainer__item`} key={index} >
              <img src={item} />
              {selectedOptions[index] && <>
                  <p className='pyramid__optionsContainer__item__text'>{selectedOptions[index]}</p>
                  <div className='pyramid__optionsContainer__item__selectedImg'>
                    <img src={selectedOptionImages[index]} />
                  </div>
                </>
              }
            </div>
          ))}
        </div>
    </div>
  )
}

export default Pyramid