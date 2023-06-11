import React from 'react'
import './ToggleButton.css'

function ToggleButton({handleToggle,text}) {
  return (
    <div className='main_div'>
       <button onClick={handleToggle} className='toggle_btn'>{text}</button>
      
    </div>
  )
}

export default ToggleButton
