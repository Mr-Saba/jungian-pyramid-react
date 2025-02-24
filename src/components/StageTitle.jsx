import React from "react"

function StageTitle({titleContent, period}) {
  return (
    <div className="stageTitle">
      <h1 className="stageTitle__title">{titleContent.title}</h1>
      <p className="stageTitle__definition">{titleContent.definition}</p>
      <p className="stageTitle__description">{titleContent.description.replace('. . .', period)}</p>
    </div>
  )
}

export default StageTitle
