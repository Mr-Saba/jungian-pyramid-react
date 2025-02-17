import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import finalBackground from '../assets/finalBackground.jpg'
import Label from '../assets/label.png'
import Pyramid from '../components/Pyramid'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import App from '../App'

function Final({selectedStageOptions, selectedStageOptionImages, selectedStageAvatar}) {

  const navigate = useNavigate()

  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [isFinishContentVisible, setIsFinishContentVisible] = useState(false)
  const [isPdfDownloading, setIsPdfDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    // const hiddenElements = document.querySelectorAll(".hide-in-pdf"); // Select elements to hide

    // hiddenElements.forEach(el => el.style.display = "none");

    // html2canvas(document.querySelector('.app'), { scale: 2 }).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF("p", "mm", "a4"); // Portrait mode, millimeters, A4 size
    //   const imgWidth = 210;
    //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

    //   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    //   pdf.save("download.pdf");

    //   hiddenElements.forEach(el => el.style.display = "");
    // });

    const fileName = 'test.pdf';
    const blob = await pdf(<App />).toBlob();
    saveAs(blob, fileName);
  }

  return (
    <div className='final'>
      <img className='final__background' src={finalBackground} />
      <div className='final__content'>
        {
          isFinishContentVisible &&
            <div className='final__content__outcome'>
              <Pyramid selectedOptions={selectedStageOptions} selectedOptionImages={selectedStageOptionImages} />
              <div className='final__content__outcome__imageContainer'>
                <img src={`/assets/avatars/${2}.jpg`}/>
              </div>
            </div>
        }
        <div className={`final__content__questions ${isFinishContentVisible ? 'final' : ''}`}>
          <div className='final__content__questions__item' >
            <div className='final__content__questions__cube'></div>
            <div className='final__content__questions__texts'>
              <div className={`final__content__questions__texts__period`}>
                <h1>If you had to summarize your personal brand vision in one powerful sentence, what would it be?</h1>
                <textarea onChange={(e) => setAnswer1(e.target.value)}></textarea>
              </div>
            </div> 
          </div>
          <div className='final__content__questions__item'>
            <div className='final__content__questions__cube'></div>
            <div className='final__content__questions__texts'>
              <div className={`final__content__questions__texts__period`}>
                <h1>What specific actions can you take in the next 30 days to start embodying your personal brand?</h1>
                <textarea onChange={(e) => setAnswer2(e.target.value)}></textarea>
              </div>
            </div>
          </div> 
        </div>
      </div>
      {!isFinishContentVisible && <img className='final__label' src={Label} />}
      {
        !isFinishContentVisible ?
          (answer1?.trim().length > 0 && answer2?.trim().length > 0) && <p className='final__finishText' onClick={() => setIsFinishContentVisible(true)}>finish</p>
        :
        <p className={`final__finishText hide-in-pdf`} onClick={handleDownloadPDF}>download pdf</p>
      }
    </div>
  )
}

export default Final