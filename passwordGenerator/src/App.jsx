import { useState, useCallback, useEffect ,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAll, setnumAll] = useState(false)
  const [charAll, setCharAll] = useState(false)
  const [pswd, setpswd] = useState("")
  
  const passRef=useRef(null)

  const PasswordGen = useCallback(()=>{
    let pass=""
    let st="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAll){
      st+="0123456789"
    }
    if(charAll)
      {
        st+="!@#$%&^_-"
      }
    for (let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*st.length+1)
      pass+=st.charAt(char)
    }
    setpswd(pass)

  },[length, numAll,charAll ,setpswd])
 let x=useEffect(()=>{PasswordGen()
 },[length, numAll,charAll ,PasswordGen])

const copyPasswordToClipboard=useCallback(()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(pswd)
},[pswd])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-lg rounded-xl px-8 py-4 my-8 bg-gray-400'>
      <h1 className='text-4xl text-center font-mono pb-5 pt-3'>Password Generator</h1>
        <div className='flex shadow-lg rounded-md overflow-hidden mb-4'>
        <input type='text'
        value={pswd}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passRef}
        />
        <button onClick={copyPasswordToClipboard} className='hover:bg-blue-800 outline-none font-mono bg-blue-600 text-white px-3 py-1 shrink-0'> copy </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numAll}
            id='numberInput'
            onChange={()=>{setnumAll((prev)=>!prev);
               }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={charAll}
            id='charInput'
            onChange={()=>{setCharAll((prev)=>!prev);
               }}
            />
            <label>Special Symbols</label>
          </div>
        </div>
        <div className='flex text-md gap-x-2 justify-center'>
          <button className='hover:bg-orange-700 outline-none font-mono mt-5 px-4 bg-orange-600 text-white py-2' onClick={()=>{PasswordGen()}}>Generate again</button>
        </div>
      </div>
      <p className='text-center'> by SinAn🔥</p>
    </>
  )
}

export default App
