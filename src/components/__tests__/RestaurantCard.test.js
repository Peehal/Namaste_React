import RestaurantCard from "../RestaurantCard";
import MOCK_RES_DATA from "../mocks/Res_card_Mock.json"
import{render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props Data ", () => {

    render(<RestaurantCard resData={MOCK_RES_DATA} />)

    const name = screen.getByText("Barbeque Nation");
    expect(name).toBeInTheDocument();

})