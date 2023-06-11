import React from 'react'
import './Input.css'

function Input({data}) {
  return (
    <div className='main'>
      <form >

        <input value={data}  type="text"  />
      </form>

      
    </div>
  )
}

export default Input
