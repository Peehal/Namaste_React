import {fireEvent, render, screen} from "@testing-library/react"
import Body from "../Body"
import { act } from "react";   
import MOCK_DATA from "../mocks/mockResListData.json"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search Res List for the sweets text input ", async () => {

    await act(async () => {
        render(<Body />)
    });

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(4)

    const searchBtn = screen.getByRole("button", { name: "Search" }); 
    // expect(searchBtn).toBeInTheDocument();                           

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target:{value :"sweets"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);

});