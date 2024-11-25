import React, { useState } from 'react'

export default function Theme() {
  const [theme,setTheme] = useState('light') //

  const makeLight = ()=>{
    setTheme('light')
  }
  const makeDark = ()=>{
    setTheme('dark')
  }
  return (
    <div style={{ padding:'24px', height:'100vh',backgroundColor:(theme=='dark')?'#2c2c2c':'#fff', color:(theme=='dark')?'#fff':'#000' }}>
        <h1 style={{ marginTop:'0' }}>Component with State</h1>
        <button onClick={makeLight}>Light Mode</button>
        <button onClick={makeDark}>Dark Mode</button>
    </div>
  )
}
