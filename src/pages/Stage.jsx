import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router'
import Flower from '../components/Flower'
import StageTitle from "../components/StageTitle"
import Pyramid from "../components/Pyramid"
import NextButton from '../assets/arrow-right-circle.svg'
import DoneButton from '../assets/done-circle.png'
import {flowerDynamicStepData} from '../data/flower.js'

function Stage({period, selectedOptions, setSelectedOptions, selectedOptionImages, setSelectedOptionImages, selectedStageAvatar, setSelectedStageAvatar}) {

  const [activeStep, setActiveStep] = useState(0)
  const [isOptionSelected, setIsOptionSelected] = useState(false)

  const [isPyramidFinished, setIsPyramidFinished] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // setActiveStep(4)
    // setIsPyramidFinished(true)
  }, [])

  const handleNext = () => {
    if(isPyramidFinished) {
      navigate('/final')
    }
    
    if(activeStep !== 4) {
      setActiveStep(p => {
        let nextBlankIndex = p + 1//selectedOptions.indexOf(selectedOptions.find(item => item === ''))
        return nextBlankIndex
      })
      setIsOptionSelected(selectedOptions[activeStep + 1] !== '')
    } else {
      setIsPyramidFinished(true)
    }
  }

  const handlePrev = () => {
    if(isPyramidFinished) {
      setIsPyramidFinished(false)
      return
    }
  
    setActiveStep(p => {
      let prevFilledIndex = p - 1//selectedOptions.reverse().indexOf(selectedOptions.find(item => item !== ''))
      return prevFilledIndex
    })
    setIsOptionSelected(selectedOptions[activeStep - 1] !== '')    
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

  // const editOption = (index) => {
  //   if(selectedOptions[activeStep] === '') return
 
  //   setIsOptionSelected(false)
  //   setActiveStep(index)
  //   setSelectedOptions((prev) => {
  //     const newOptions = [...prev];
  //     newOptions[index] = ''; 
  //     return newOptions; 
  //   });
  //   setSelectedOptionImages((prev) => {
  //     const newOptions = [...prev];
  //     newOptions[index] = ''; 
  //     return newOptions; 
  //   });
  // }

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create temporary URL for preview
      setAvatars([imageUrl])      
      setSelectedStageAvatar(imageUrl)
      setIsOptionSelected(true)
    }
  }

  const [avatars, setAvatars] = useState(
    Array.from({ length: 91 }, (_, index) => `/assets/avatars/${index + 1}.jpg`)
  );

  const handleImageSelect = (e, item) => {
    setAvatars([item])
    setSelectedStageAvatar(e.target.src)
    setIsOptionSelected(true)
  }
  
  return (
    <div className={`stage step${activeStep+1} ${isPyramidFinished ? 'pyramidFinished' : ''}`}>
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
              <Pyramid selectedOptions={selectedOptions} selectedOptionImages={selectedOptionImages} activeStep={activeStep} />
            </div>
          </> 
        : 
          <>
            <div key={activeStep} className="stage__titleContainer">
              <p className="stage__titleContainer__question">Please select a symbol that resonates with your personal brand, or alternatively, upload or imagine one that reflects your professional persona</p>
            </div>
            <div className="stage__imageContainer">
              {
                avatars.map((item, index) => {
                  return (
                  <img 
                    className={`stage__imageContainer__item ${selectedStageAvatar?.endsWith(item) ? 'selected' : ''}`} 
                    key={index} 
                    src={item}
                    // src={index >= 15 ? item : `/assets/avatars/${index + 1}.jpg`} 
                    onClick={(e) => handleImageSelect(e, item)} 
                  />
                )})
              }
              {
              !selectedStageAvatar && 
              <div className="stage__imageContainer__item upload">
                <label className="">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                  />
                </label>
              </div>
              }
            </div>
          </>
      }

      {!selectedStageAvatar && 
      <button className={`stage__backButton ${activeStep === 0 ? 'disabled' : ''}`} onClick={handlePrev}>
          <img src={NextButton} />
      </button>
      }
      <button className={`stage__nextButton ${!isOptionSelected ? 'disabled' : ''} ${!isPyramidFinished ? 'done' : ''} `} onClick={handleNext}>
          <img src={NextButton} />
      </button>

      <button onClick={() => setIsPyramidFinished(p => !p)}>sadasdasd</button>
    </div>
  )
}

export default Stage
