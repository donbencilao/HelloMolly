import React, {useState} from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import SearchBox from "./searchbox";
import Gallery from "./gallery";


function Search({API_URL,CLIENT_ID}){
    const [keyword, setKeyword] = useState("")
    const [photoResults, setPhotoResults] = useState([])
    const [resultTotalPages, setResultTotalPages] = useState(-1)
    const [currentPage, setCurrentPage] = useState(0)
    /**
     * Handler for update photo gallery
     * @param event
     */
    const handlePageClick = (event) => {
        const page = event.selected;
        callApi(page).then()
    };

    /**
     * Calls the unsplash search api to get photo results
     * @param page
     * @returns {Promise<void>}
     */
    const callApi = async (page = 0)=>{
        //keyword validation, This will prevent unnecessary api calls.
        if(!keyword){
           return
        }
        if(keyword === window.sessionStorage.getItem("keyword") && window.sessionStorage.getItem("page") === page){
            return
        }
        //----
        window.sessionStorage.setItem("keyword",keyword)
        window.sessionStorage.setItem("page",page)
        setCurrentPage(()=>page)
        try{
            const url = `${API_URL}/photos?page=${page}&per_page=12&query=${keyword}&client_id=${CLIENT_ID}`
            const res = await axios.get(url)
            setPhotoResults(()=>res.data.results)
            setResultTotalPages(()=>res.data.total_pages)
        }catch (e) {
            alert("Something went wrong, please try again")
        }

    }
    return <div className={"container mt-5"}>
        <SearchBox callApi={callApi} setKeyword={setKeyword}/>
        {resultTotalPages === -1 && <p className={"my-4 text-center"} data-testid={"default-msg"}>Please enter the nice things you want to see :)</p>}
        {resultTotalPages === 0 && <p className={"my-4 text-center"} data-testid={"sorry-msg"}>Sorry, we don't have that in our collection, please try a different word.</p>}
        <Gallery photoResults={photoResults} />

        {/*Simple pagination to navigate around the results*/}
        {resultTotalPages > 0 && <ReactPaginate
            className={"flex my-3 p-2"}
            pageClassName={"flex-auto text-center"}
            activeClassName={"text-blue-700 font-bold"}
            breakLabel="..."
            nextLabel=" >>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            forcePage={currentPage}
            pageCount={resultTotalPages}
            previousLabel="<< "
            renderOnZeroPageCount={null}
        />}

    </div>
}

export default Search