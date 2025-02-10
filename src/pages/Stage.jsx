import React, { useState, useEffect } from "react"
import Flower from '../components/Flower'
import StageTitle from "../components/StageTitle"
import Pyramid from "../components/Pyramid"
import NextButton from '../assets/arrow-right-circle.svg'
import DoneButton from '../assets/done-circle.png'
import {flowerDynamicStepData} from '../data/flower.js'

function Stage({onPageChange, period}) {
  const [activeStep, setActiveStep] = useState(0)
  const [isOptionSelected, setIsOptionSelected] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState(['','','','','',])
  const [selectedOptionImages, setSelectedOptionImages] = useState(['','','','','',])

  const handleNext = () => {
    // debugger
    if(!isOptionSelected) return
    if(selectedOptions[activeStep] !== '') setIsOptionSelected(false)

    if(activeStep !== 4) {
      setActiveStep(p => {
        let nextBlankIndex = p + 1//selectedOptions.indexOf(selectedOptions.find(item => item === ''))
        return nextBlankIndex
      })
    } else {
      onPageChange()
    }
  }

  const handlePrev = () => {
    // debugger
    setIsOptionSelected(selectedOptions[activeStep - 1] !== '')

    setActiveStep(p => {
      let prevFilledIndex = p - 1//selectedOptions.reverse().indexOf(selectedOptions.find(item => item !== ''))
      return prevFilledIndex
    })
  }

  const selectOption = (content, imgSource) => {

    setSelectedOptions((prev) => {
      const newOptions = [...prev];
      newOptions[activeStep] = content; 
      return newOptions; 
    });

    setSelectedOptionImages((prev) => {
      const newOptions = [...prev];
      newOptions[activeStep] = imgSource; 
      return newOptions; 
    });

    setIsOptionSelected(true)
  }

  const editOption = (index) => {
    if(selectedOptions[activeStep] === '') return
 
    setIsOptionSelected(false)
    setActiveStep(index)
    setSelectedOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index] = ''; 
      return newOptions; 
    });
    setSelectedOptionImages((prev) => {
      const newOptions = [...prev];
      newOptions[index] = ''; 
      return newOptions; 
    });
  }

  const isFinishButtonVisible = () => {
    let isVisible = activeStep === 4
    return isVisible;
  }

  
  return (
    <div className={`stage step${activeStep+1}`}>
        <StageTitle key={activeStep} titleContent={flowerDynamicStepData[activeStep].titles} period={period}/>
        <div className="stage__flowerPyramidContainer">
          <Flower circleContent={flowerDynamicStepData[activeStep].options} onOptionSelect={(content, imgSource) => selectOption(content, imgSource)} />
          <Pyramid selectedOptions={selectedOptions} selectedOptionImages={selectedOptionImages} onEditOption={(index) => editOption(index)} />
        </div>
        <button className={`stage__backButton ${activeStep === 0 ? 'disabled' : ''}`} onClick={handlePrev}>
            <img src={NextButton} />
        </button>
        <button className={`stage__nextButton ${!isOptionSelected ? 'disabled' : ''}`} onClick={handleNext}>
            {/* <img src={!isFinishButtonVisible() ? NextButton : DoneButton} /> */}
            <img src={NextButton} />
        </button>
    </div>
  )
}

export default Stage
