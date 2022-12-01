import {render, screen, cleanup,waitForElement, fireEvent} from "@testing-library/react";
import Search, {Button} from "./search";
import userEvent from '@testing-library/user-event'

afterEach(()=>cleanup())

const setup = () => {
    const utils = render(<Search />)
    const input = utils.getByLabelText('search-input')
    return {
        input,
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

test("Expects click hanlder to be called once",()=>{
    const handleClick = jest.fn()
    render(<Button testid={"search-btn"} handler={handleClick} label={"search"}/>);
    userEvent.click(screen.getByTestId("search-btn"))
    expect(handleClick).toHaveBeenCalledTimes(1)
})

test("Expects the initial number of result to be equal to 9",()=>{

})

test("Expects pagination to show if page number is greater than 1",()=>{

})