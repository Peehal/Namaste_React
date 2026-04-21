import { fireEvent, render, screen } from "@testing-library/react"
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

it("Should Search Res List for the PIZZA text  ", async () => {

    await act(async () => {
        render(<Body />)
    });

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    // expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchBtn);


    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);

});

it("Should filter the tp rated Restaurant", async() => {

    await act(async() => {
        render(<Body />);
    })

    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardAfterFilter = screen.getAllByTestId("resCard")
    expect(cardAfterFilter.length).toBe(17);


})


