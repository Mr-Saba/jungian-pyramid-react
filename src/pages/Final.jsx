import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import finalBackground from '../assets/finalBackground.jpg'
import Label from '../assets/label.png'
import Pyramid from '../components/Pyramid'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function Final({selectedStageOptions, selectedStageOptionImages, selectedStageAvatar}) {

  const navigate = useNavigate()

  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [isFinishContentVisible, setIsFinishContentVisible] = useState(false)

  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    html2canvas(pdfRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Portrait mode, millimeters, A4 size
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  }

  return (
    <div ref={pdfRef} className='final'>
      <img className='final__background' src={finalBackground} />
      <div className='final__content'>
        {
          isFinishContentVisible &&
            <div>
              <Pyramid selectedOptions={selectedStageOptions} selectedOptionImages={selectedStageOptionImages} />
              <img src={selectedStageAvatar}/>
            </div>
        }
        <>
          <div className='final__content__item' >
            <div className='final__content__cube'></div>
            <div className='final__content__texts'>
              <div className={`final__content__texts__period`}>
                <h1>If you had to summarize your personal brand vision in one powerful sentence, what would it be?</h1>
                <textarea onChange={(e) => setAnswer1(e.target.value)}></textarea>
              </div>
            </div> 
          </div>
          <div className='final__content__item'>
            <div className='final__content__cube'></div>
            <div className='final__content__texts'>
              <div className={`final__content__texts__period`}>
                <h1>What specific actions can you take in the next 30 days to start embodying your personal brand?</h1>
                <textarea onChange={(e) => setAnswer2(e.target.value)}></textarea>
              </div>
            </div>
          </div> 
        </>
      </div>
      <img className='final__label' src={Label} />
      {
        !isFinishContentVisible ?
          (answer1?.trim().length > 0 && answer2?.trim().length > 0) && <p className='final__finishText' onClick={() => setIsFinishContentVisible(true)}>finish</p>
        :
          <p className='final__finishText' onClick={handleDownloadPDF}>download pdf</p>
      }
    </div>
  )
}

export default Final