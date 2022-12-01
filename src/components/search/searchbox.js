import React from 'react';

const SearchBox = ({callApi,setKeyword})=>{
   return <div className="relative">
       <input type="search" id="default-search" aria-label="search-input" onChange={(event)=>setKeyword(event.target.value)}
              className="block w-full p-3 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type in keyword here..." required/>
       <button onClick={callApi} type="submit" data-testid={"search-btn"}
               className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
       </button>
   </div>
}

export default SearchBox