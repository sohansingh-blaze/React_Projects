import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  return (
    <>
    <h2 className="bg-blue-400 text-black rounded-2xl m-4">Components and Props </h2>
    <Cards username="Sohan Singh" imgsr="https://static.toiimg.com/thumb/msid-107259151,width-960,height-1280,resizemode-6.cms" />
    <Cards username="SinAn" imgsr="https://i.pinimg.com/736x/85/8a/9a/858a9acef83250adb12db9387a2b9d28.jpg" />
    <Cards />
    </>
  )
}

export default App
