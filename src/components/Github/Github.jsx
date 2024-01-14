import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rushikeshsasamkar')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data)
    //         console.log(data.following);
    //     }
    //     )

    // },[]);


    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.following}

            <img className='border-r-amber-300 rounded-lg' src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rushikeshsasamkar')

    return response.json()

}