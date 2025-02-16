import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router'
import Flower from '../components/Flower'
import StageTitle from "../components/StageTitle"
import Pyramid from "../components/Pyramid"
import NextButton from '../assets/arrow-right-circle.svg'
import DoneButton from '../assets/done-circle.png'
import {flowerDynamicStepData} from '../data/flower.js'

function Stage({period, selectedOptions, setSelectedOptions, selectedOptionImages, setSelectedOptionImages, setSelectedStageAvatar}) {

  const [activeStep, setActiveStep] = useState(0)
  const [isOptionSelected, setIsOptionSelected] = useState(false)

  const [isPyramidFinished, setIsPyramidFinished] = useState(false)

  const [uploadedImages, setUploadedImages] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // setActiveStep(4)
    // setIsPyramidFinished(true)
  }, [])

  const handleNext = () => {
    // debugger
    if(isPyramidFinished) {
      navigate('/final')
    }
    if(!isOptionSelected) return
    if(selectedOptions[activeStep] !== '') setIsOptionSelected(false)

    if(activeStep !== 4) {
      setActiveStep(p => {
        let nextBlankIndex = p + 1//selectedOptions.indexOf(selectedOptions.find(item => item === ''))
        return nextBlankIndex
      })
    } else {
      setIsPyramidFinished(true)
    }
  }

  const handlePrev = () => {
    if(activeStep === 0) return

    // debugger
    setIsOptionSelected(selectedOptions[activeStep - 1] !== '')

    setActiveStep(p => {
      let prevFilledIndex = p - 1//selectedOptions.reverse().indexOf(selectedOptions.find(item => item !== ''))
      return prevFilledIndex
    })
    
    setIsPyramidFinished(false)
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

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create temporary URL for preview
      setUploadedImages([...uploadedImages, imageUrl]); // Add new image to the list
    }
  }

  const handleImageSelect = (e) => {
    setSelectedStageAvatar(e.target.src)
    setIsOptionSelected(true)
  }
  
  return (
    <div className={`stage step${activeStep+1}`}>
      {
        !isPyramidFinished ? 
          <>
            <div className="stage__titleContainer">
              <h1 className="stage__titleContainer__title">{flowerDynamicStepData[activeStep].titles.title}</h1>
              <p className="stage__titleContainer__definition">{flowerDynamicStepData[activeStep].titles.definition}</p>
              <p className="stage__titleContainer__description">{flowerDynamicStepData[activeStep].titles.description.replace('. . .', period)}</p>
            </div>
            <div className="stage__flowerPyramidContainer">
              <Flower circleContent={flowerDynamicStepData[activeStep].options} onOptionSelect={(content, imgSource) => selectOption(content, imgSource)} />
              <Pyramid selectedOptions={selectedOptions} selectedOptionImages={selectedOptionImages} onEditOption={(index) => editOption(index)} activeStep={activeStep} />
            </div>
          </> 
        : 
          <>
            <div key={activeStep} className="stage__titleContainer">
              <p className="stage__titleContainer__question">Please select a symbol that resonates with your personal brand, or alternatively, upload or imagine one that reflects your professional persona</p>
            </div>
            <div className="stage__imageContainer">
              {
                Array.from({ length: 15 }).concat(uploadedImages).map((item, index) => (
                  <img 
                    className={`stage__imageContainer__item `} 
                    key={index} 
                    src={index >= 15 ? item : `/assets/avatars/${index + 1}.jpg`} 
                    onClick={handleImageSelect} 
                  />
                ))
              }
              <div>
                upload image
              </div>
            </div>
          </>
      }

      <button className={`stage__backButton ${activeStep === 0 ? 'disabled' : ''}`} onClick={handlePrev}>
          <img src={NextButton} />
      </button>
      <button className={`stage__nextButton ${!isOptionSelected ? 'disabled' : ''} ${!isPyramidFinished ? 'done' : ''} `} onClick={handleNext}>
          {/* <img src={NextButton} /> */}
          <img src={!isPyramidFinished ? NextButton : DoneButton} />
      </button>


      <button onClick={() => setIsPyramidFinished(p => !p)}>sadasdasd</button>
    </div>
  )
}

export default Stage
