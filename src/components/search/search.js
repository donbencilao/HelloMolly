import React, {useState} from 'react';
import axios from "axios";

export const Button = ({handler,label,testid})=>{
    return <button data-testid={testid} onClick={handler}>{label}</button>
}

function Search(){
    const [keyword, setKeyword] = useState("")
    const [photoResults, setPhotoResults] = useState([])
    const callApi = async (page)=>{
        //call unsplash api with axios here
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=HETzfvQXJwR2mSvoVFhaIXj0K1R9tBKw80Wlcu0UuY0`
        const res = await axios.get(url)
        setPhotoResults(()=>res.data.results)
        console.log({res})
    }
    return <div className={"container mt-5"}>
        <div className="relative">
            <input type="search" id="default-search" aria-label="search-input" onChange={(event)=>setKeyword(event.target.value)}
                   className="block w-full p-3 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search Mockups, Logos..." required/>
                <button onClick={callApi} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                </button>
        </div>
        <div className={"grid grid-cols-4"}>
            {photoResults && photoResults.map((data)=>{
                return <div className={"w-auto h-60"} style={{backgroundImage: `url(${data.urls.regular})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
            })}
        </div>

    </div>
}

export default Search