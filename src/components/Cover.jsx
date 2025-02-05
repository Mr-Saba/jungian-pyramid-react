import React, { useState } from 'react';

function Cover({onClick}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="cover active" onClick={() => {setIsVisible(false); onClick && onClick()}}>
      </div>
    )
  );
}

export default Cover;
