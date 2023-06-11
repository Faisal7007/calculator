import React from 'react'
import './EqualButton.css'

function EqualButton({equalBtn}) {
  return (
    <div >
        <button onClick={equalBtn} className='equal_btn'>=</button>
      
    </div>
  )
}

export default EqualButton
