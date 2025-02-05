import React, { useState } from "react"
import Flower from '../components/Flower'
import StageTitle from "../components/StageTitle"
import Pyramid from "../components/Pyramid"
import NextButton from '../assets/arrow-right-circle.svg'

function Stage() {
  return (
    <div className="stage">
        <StageTitle />
        <div>
          <Flower />
          <Pyramid />
        </div>
        <button className="nextButton">
            <img src={NextButton} />
        </button>
    </div>
  )
}

export default Stage
