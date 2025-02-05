import React, { useState } from 'react'
import flowerData from '../data/flower.json'
import flowerOptions from '../data/flowerOptions.json'
import FlowerOption from './FlowerOption'

function Flower() {

  const [step, setStep] = useState(0)

  return (
    <div className='flower'>
      {flowerData.map((item, i) => (
        <div className='flower__quarter' key={i}>
            <div className='flower__quarter__sector'>
              <p>{item.sectorTitle}</p>
            </div>
            <div className='flower__quarter__images'>
                {item.circles.map((circle, i) =>
                  <>
                    <img src={circle.imgSource} key={i} />
                  </>
                )}
            </div>
            <div className='flower__quarter__circles'>
                {item.circles.map((circle, i) =>
                  <FlowerOption key={i} content={flowerOptions[step].options[i]} />
                )}
            </div>
            <div className='flower__quarter__titles'>
                {item.circles.map((circle, i) =>
                  <p>
                    {circle.title.split('').map((char, i, arr) => {
                      // let sizeToTake = 360/arr.length
                      return (
                        <span key={i} style={{transform: `rotate(${i*(120/arr.length)}deg)`}}>{char}</span>
                      )
                    })}
                  </p>
                )}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Flower