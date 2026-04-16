import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Grouping all the conatct test cases", () => {

    test("Testing the Contact Component first by rendering it", () => {
        render(<Contact />);

        const Heading = screen.getByRole("heading");

        expect(Heading).toBeInTheDocument();

    })

    test("Testing the buttol Component first by rendering it", () => {
        render(<Contact />);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();

    })

    test("Testing the input name first by rendering it", () => {
        render(<Contact />);

        const input = screen.getByPlaceholderText("Your Name");

        expect(input).toBeInTheDocument();

    })

});




