import React, { useState } from 'react'
import {flowerStaticData} from '../data/flower.js'
import FlowerOption from './FlowerOption.jsx'

function Flower({circleContent, onOptionSelect}) {
  return (
    <div className='flower'>
      {flowerStaticData.map((item, i) => (
        <div className='flower__quarter' key={i}>
            <div className='flower__quarter__sector'>
              <p>{item.sectorTitle}</p>
            </div>
            <div className='flower__quarter__images'>
                {item.circles.map((circle, j) =>
                  <img src={circle.imgSource} key={j} />
                )}
            </div>
            <div className='flower__quarter__circles'>
                {circleContent[i].map((contentItem, j) =>
                  <FlowerOption key={j} content={contentItem} onOptionSelect={() => {onOptionSelect(contentItem, item.circles[j].imgSource); console.log(item)}}/>
                )}
            </div>
            {/* <div className='flower__quarter__titles'>
                {item.circles.map((circle, j) =>
                  <p key={j}>
                    {circle.title.split('').map((char, i, arr) => {
                      // let sizeToTake = 360/arr.length
                      return (
                        <span key={i} style={{transform: `rotate(${i*(120/arr.length)}deg)`}}>{char}</span>
                      )
                    })}
                  </p>
                )}
            </div> */}
        </div>
      ))}
    </div>
  )
}

export default Flower