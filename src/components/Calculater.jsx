import React, { useEffect } from 'react'
import Button from './Button'
import Input from './Input'
import EqualButton from './EqualButton'
import { useState } from 'react'
import './Calculater.css'
import ToggleButton from './ToggleButton'



function Calculater({number,color,clickValue}) {

  // const getLocalItem = ()=>{
  // const number =  (localStorage.getItem('mynumber'))
  // return number
  // }
 
  const [data, setData] = useState('')
  const [toggle, setToggle] = useState(false)
  
  const inputButton = (e)=>{
   
  setData( data.concat (e.target.name))

  //  alert('Hiiiiiiii')
  }

  const clearAll =()=>{
    setData('')
  }

  const backSpace = ()=>{
    setData (data.slice(0,data.length-1))
    // setData(data.slice(0,-1))
  }

  const equalBtn = ()=>{
    try{

      setData(eval(data).toString())
      // localStorage.setItem('mynumber',JSON.stringify(eval(data)))

    //  console.log( (eval(data)))

    }
    catch{
           setData('Error')
    }
    
  }
  
  // useEffect(()=>{
  //     localStorage.setItem('mynumber',JSON.stringify(eval(data)))
  // },[eval])

  return ( 
    <div className="outer_div">
       <h1 style={{textAlign:'center'}}>Calculator</h1>
   
    <div className='main'>
      
      <Input data={data}/>
      <div className="first_row">
        <Button toggle={toggle} inputButton={clearAll}  color={'#646404'} number={'AC'}/>
        <Button inputButton={backSpace} clickValue='DE'  color={'#646404'} number={'DE'}/>
        <Button clickValue='%' inputButton={inputButton} color={'#646404'} number={'%'}/>
        <Button clickValue='/' inputButton={inputButton} color={'#646404'} number={'/'}/>
      </div>

      <div className="second_row">
        <Button clickValue='7' inputButton={inputButton} number={'7'}/>
        <Button clickValue='8' inputButton={inputButton} number={'8'}/>
        <Button clickValue='9' inputButton={inputButton} number={'9'}/>
        <Button clickValue='*' inputButton={inputButton} color={'#646404'} number={'*'}/>
      </div>

      <div className="third_row">
        <Button clickValue='4' inputButton={inputButton} number={'4'}/>
        <Button clickValue='5' inputButton={inputButton} number={'5'}/>
        <Button clickValue='6' inputButton={inputButton} number={'6'}/>
        <Button clickValue='-' inputButton={inputButton} color={'#646404'} number={'-'}/>
      </div>

      <div className="forth_row">
        <Button clickValue='1' inputButton={inputButton} number={'1'}/>
        <Button clickValue='2' inputButton={inputButton} number={'2'}/>
        <Button clickValue='3' inputButton={inputButton} number={'3'}/>
        <Button clickValue='+' inputButton={inputButton} color={'#646404'} number={'+'}/>
      </div>

      <div className="fifth_row">
        <Button clickValue='0' inputButton={inputButton} number={'0'}/>
        <Button clickValue='.' inputButton={inputButton} number={'.'}/>
       <EqualButton equalBtn={equalBtn} />
      </div>
             
    </div>
    </div>
  )
}

export default Calculater
