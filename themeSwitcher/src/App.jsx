import { useState,useEffect } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>   
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
                        <ThemeBtn />
                    </div>

                      <div className='flex mx-2 justify-around'> 
                        <Card />
                       
                       <Card /></div>
                    </div>

            </div>

    </ThemeContextProvider>
  )
}

export default App
