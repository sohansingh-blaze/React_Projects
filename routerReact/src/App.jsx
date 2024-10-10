import { useState } from 'react'
import './App.css'
import Header from './components/Headers/Header'
import Home from './components/Home/Home'
import Footer from './components/Footers/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
