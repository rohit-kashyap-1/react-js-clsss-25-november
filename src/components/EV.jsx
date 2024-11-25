import React, { useState } from 'react'

export default function EV() {
    const [name,setName] = useState('')

  
    const abc = (msg)=>{
        console.log(msg)
    }
  return (
    <div>
      {/* <button  onClick={()=>{console.log('button clicked')}}>Button 1</button> */}
      <button onClick={()=>{abc('msg 1')}}>Click 1</button>
      <button onClick={()=>{abc('msg 2')}}>Click 2</button>
      <hr />





      <input type='text' onChange={(e)=>{setName(e.target.value)}}   />
      <div>{name}</div>



    </div>
  )
}
