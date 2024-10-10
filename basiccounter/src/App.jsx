import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()  {
let [ctr,setCounter] =useState(0)

//let ctr=0
const addValue=()=>{
  setCounter(ctr+1)
  if(ctr>=10){
    setCounter(10)
  }
  console.log("Clicked ",ctr)
}
const remValue=()=>{
  setCounter(ctr-1)
  if(ctr<=0){
    setCounter(0)
  }
  console.log("Clicked ",ctr)
}
return (
  <div>
    <h1>Sohan Singh</h1>
    <h2>Counter : {ctr}</h2>
    <button onClick={addValue}>Add Value (+)</button><br/>
    <button onClick={remValue}>Remove Value (-)</button>
  </div>
)
}

export default App
