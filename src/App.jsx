import React, { useState, useEffect } from "react";
import "./styles/style.scss";
import Landing from "./pages/Landing";
import Stage from "./pages/Stage";
import Final from "./pages/Final";
import useAppScale from './hooks/useAppScale'
import { Routes, Route } from "react-router";

function App() {

  useAppScale()

  const [period, setPeriod] = useState()
  
  const [selectedStageOptions, setSelectedStageOptions] = useState(['','','','','',])
  const [selectedStageOptionImages, setSelectedStageOptionImages] = useState(['','','','','',])
  const [selectedStageAvatar, setSelectedStageAvatar] = useState()

  return (
    <div className={`app`}>
      <Routes>
        <Route path="/" element={
          <Landing 
            period={period} 
            setPeriod={setPeriod} 
          />
        } />
        <Route path="/stage" element={
          <Stage 
            period={period} 
            selectedOptions={selectedStageOptions} 
            setSelectedOptions={setSelectedStageOptions} 
            selectedOptionImages={selectedStageOptionImages} 
            setSelectedOptionImages={setSelectedStageOptionImages} 
            selectedStageAvatar={selectedStageAvatar}
            setSelectedStageAvatar={setSelectedStageAvatar}
          />
        } />
        <Route path="/final" element={
          <Final 
            selectedStageOptions={selectedStageOptions}
            selectedStageOptionImages={selectedStageOptionImages}
            selectedStageAvatar={selectedStageAvatar}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
