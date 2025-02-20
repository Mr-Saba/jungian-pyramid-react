import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import finalBackground from '../assets/finalBackground.jpg'
import LabelBlack from '../assets/labelBlack.png'
import Pyramid from '../components/Pyramid'
import sdasd from '../assets/avatars/2.jpg'

function PrintFinal({answer1, answer2, selectedStageOptions, selectedStageOptionImages, selectedStageAvatar}) {

  return (
    <div className='printFinal'>
    <img className='printFinal__background' src={finalBackground} />
    <div className='printFinal__content'>
        <div className='printFinal__content__outcome'>
            <Pyramid selectedOptions={selectedStageOptions} selectedOptionImages={selectedStageOptionImages} />
            <div className='printFinal__content__outcome__imageContainer'>
                <img src={sdasd}/>
            </div>
        </div>
        <div className={`printFinal__content__questions final`}>
            <div className='printFinal__content__questions__item' >
                <div className='printFinal__content__questions__cube'></div>
                <div className='printFinal__content__questions__texts'>
                <div className={`printFinal__content__questions__texts__period`}>
                    <h1>If you had to summarize your personal brand vision in one powerful sentence, what would it be?</h1>
                    <textarea onChange={(e) => setAnswer1(e.target.value)} value={answer1} disabled={true}></textarea>
                </div>
                </div> 
            </div>
            <div className='printFinal__content__questions__item'>
                <div className='printFinal__content__questions__cube'></div>
                <div className='printFinal__content__questions__texts'>
                <div className={`printFinal__content__questions__texts__period`}>
                    <h1>What specific actions can you take in the next 30 days to start embodying your personal brand?</h1>
                    <textarea onChange={(e) => setAnswer2(e.target.value)} value={answer2} disabled={true}></textarea>
                </div>
                </div>
            </div> 
        </div>
        </div>
    {/* {!isFinishContentVisible && <img className='printFinal__label' src={LabelBlack} />} */}
    {
    //   !isFinishContentVisible ?
    //     (answer1?.trim().length > 0 && answer2?.trim().length > 0) && <p className='printFinal__finishText' onClick={() => setIsFinishContentVisible(true)}>finish</p>
    //   :
    }
    {/* {(!isFirstAnswered && answer1?.trim().length > 0) && <p className={`printFinal__finishText`} onClick={() => {setIsFirstAnswered(true)}}>next</p>} */}
  
  </div>
  )
}

export default PrintFinal