import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import finalBackground from '../assets/finalBackground.jpg'
import LabelBlack from '../assets/labelBlack.png'
import Pyramid from '../components/Pyramid'
import PyramidIcon from '../assets/pyramidIcon.svg'

function Final({selectedStageOptions, selectedStageOptionImages, selectedStageAvatar}) {

  const navigate = useNavigate()

  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [isFirstAnswered, setIsFirstAnswered] = useState(false)
  const [isFinishContentVisible, setIsFinishContentVisible] = useState(false)
  const [isPdfDownloading, setIsPdfDownloading] = useState(false)
  
  const handleDownloadPDF = async () => {
    document.documentElement.style.setProperty('--app-scale', 0.6);
    window.print();
    window.dispatchEvent(new Event('resize'));
  };
  

  return (
    <div className='final'>
      <img className='final__background' src={finalBackground} />
      <div className='final__content'>
        {
          isFinishContentVisible &&
            <div className='final__content__outcome'>
              <Pyramid selectedOptions={selectedStageOptions} selectedOptionImages={selectedStageOptionImages} />
              <div className='final__content__outcome__imageContainer'>
                <img src={selectedStageAvatar}/>
              </div>
            </div>
        }
        <div className={`final__content__questions ${isFinishContentVisible ? 'final' : ''}`}>
          {(!isFirstAnswered || isFinishContentVisible) &&<div className='final__content__questions__item' >
              <div className='final__content__questions__cube'></div>
              <div className='final__content__questions__texts'>
                <div className={`final__content__questions__texts__period`}>
                  <h1>If you had to summarize your personal brand vision in one powerful sentence, what would it be?</h1>
                  <textarea onChange={(e) => setAnswer1(e.target.value)} value={answer1} disabled={isFinishContentVisible}></textarea>
                </div>
              </div> 
            </div>
          }
          {(isFirstAnswered || isFinishContentVisible) &&
            <div className='final__content__questions__item'>
              <div className='final__content__questions__cube'></div>
              <div className='final__content__questions__texts'>
                <div className={`final__content__questions__texts__period`}>
                  <h1>What specific actions can you take in the next 30 days to start embodying your personal brand?</h1>
                  <textarea onChange={(e) => setAnswer2(e.target.value)} value={answer2} disabled={isFinishContentVisible}></textarea>
                </div>
              </div>
            </div> 
          }
        </div>
      </div>
      {!isFinishContentVisible && <img className='final__label' src={LabelBlack} />}
      {
        !isFinishContentVisible ?
          (answer1?.trim().length > 0 && answer2?.trim().length > 0) && <p className='final__finishText' onClick={() => setIsFinishContentVisible(true)}>finish</p>
        :
        <p className={`final__finishText`} onClick={handleDownloadPDF}>download pdf</p>
      }
      {(!isFirstAnswered && answer1?.trim().length > 0) && <p className={`final__finishText`} onClick={() => {setIsFirstAnswered(true)}}>next</p>}

      {!isFinishContentVisible && <button className={`stage__pyramidButton`} onClick={() => navigate('/stage')}>
          <img src={PyramidIcon} />
      </button>

      }
    </div>
  )
}

export default Final