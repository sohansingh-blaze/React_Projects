import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    //const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sohansingh-blaze')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
    const data=useLoaderData()
  return (
    <div className='display-flex text-center m-4 bg-purple-800 text-white text-2xl h-1/3 '>Github Followers : {data.followers} 
    <div className='flex justify-center p-5 m-auto h-1/3'> 
        <img src={data.avatar_url} alt="Git profile"  />
    </div>
    <h2 className='text-center font-mono text-lg text-white p-2'> {data.name}</h2>
    </div>
  )
}

export default Github
export const GithubInfoLoader=async () =>{
    const response=await fetch('https://api.github.com/users/sohansingh-blaze')
    return response.json()
}