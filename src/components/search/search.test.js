import {render, screen, cleanup} from "@testing-library/react";
import Search from "./search";
import userEvent from '@testing-library/user-event'
import SearchBox from "./searchbox";
import Gallery from "./gallery";

afterEach(()=>cleanup())

const setup = () => {
    const utils = render(<Search />)
    const input = utils.getByLabelText('search-input')
    const searchBtn = utils.getByTestId("search-btn")
    return {
        input,
        searchBtn,
        ...utils,
    }
}

test("Expect the app to have search input",()=>{
    const {input} = setup()
    expect(input).toBeInTheDocument();
})

test("Expect the app to have search button",()=>{
    render(<Search/>);
    const searchElem = screen.getByTestId("search-btn")
    expect(searchElem).toBeInTheDocument();
})

test("Expects to trigger callApi",()=>{
    const setKeyword = jest.fn(() => {})
    const callApi = jest.fn(() => {})
    render(<SearchBox callApi={callApi} setKeyword={setKeyword} />);
    const searchElem = screen.getByTestId("search-btn")
    userEvent.click(searchElem)
    expect(callApi).toHaveBeenCalledTimes(1)
})

test("Expects to show gallery items based on data passed",()=>{
    const fakeData = [
        {
        "id": "EP_OHkgn1JI",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1496070242169-b672c576566b?ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80",
            "regular": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1496070242169-b672c576566b"
        }
        },
        {
            "id": "EP_OHkgn1J2",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1496070242169-b672c576566b?ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80",
                "regular": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1496070242169-b672c576566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODU2MzB8MHwxfHNlYXJjaHwxfHxmcm9nfGVufDB8fHx8MTY2OTkwMTQ2Mw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1496070242169-b672c576566b"
        }}
    ]
    render(<Gallery photoResults={fakeData} />)
    const galleryItem = screen.getAllByTestId("gallery-item")
    expect(galleryItem.length).toBe(2);
})