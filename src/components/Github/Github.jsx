import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

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
    console.log(data);


    return (
        <div className='m-12 rounded-lg shadow-2xl bg-slate-400 text-black font-serif p-4 text-3xl'>
            <h1 className='text-center'>Github Details</h1>
            <div className="flex flex-col md:flex-row items-start">
                <img className=" rounded-lg mx-3 mb-3 md:mb-0" src={data.avatar_url} alt="Git Picture" width={300} />
                <div className="grid gap-2 ml-0 md:ml-10">
                    <label className="text-lg font-semibold">Name:</label>
                    <label>{data.name}</label>
                    <label className="text-lg font-semibold">Location:</label>
                    <label>{data.location}</label>
                    <label className="text-lg font-semibold">ID:</label>
                    <label>{data.id}</label>
                    <label className="text-lg font-semibold">Public Repositories:</label>
                    <label>{data.public_repos}</label>
                </div>
            </div>

        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rushikeshsasamkar')

    return response.json()

}