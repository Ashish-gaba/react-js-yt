import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    //We can bypass this fetch call, and directly do the fetch call on client side by loader method
//     const [data, setData] = useState([])
//     useEffect(() => {
//       fetch('https://api.github.com/users/ashish-gaba')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data)
//       })
//     }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

//Loader
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ashish-gaba')
    return response.json()
}