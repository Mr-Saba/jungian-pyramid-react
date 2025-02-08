import React from 'react'

function FlowerOption({content, onOptionSelect}) {
  return (
    <div onClick={onOptionSelect}>
      <p className='flower__quarter__circles__text'>
        {content}
      </p>
    </div>
  )
}

export default FlowerOption