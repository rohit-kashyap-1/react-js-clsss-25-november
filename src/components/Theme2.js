import React, { useState } from 'react'

export default function Theme2() {
  const [theme,setTheme] = useState('light')
  const [name,setName] = useState('')
  return (
    <div style={{ padding:'22px',height:'100vh',backgroundColor:(theme=="dark")?"#2c2c2c":"#fff",color:(theme=="dark")?"#fff":"#000" }}>
    <h1 style={{ marginTop:0 }}>Component with multiple state</h1>
    <input type='text' onChange={(e)=>{setName(e.target.value); setTheme(name)}} />
    </div>
  )
}
