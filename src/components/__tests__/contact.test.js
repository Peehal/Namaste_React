import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Testing the Contact Component first by rendering it", () => {
    render( <Contact /> );

    const Heading = screen.getByRole("heading");

    expect(Heading).toBeInTheDocument();

})



test("Testing the buttol Component first by rendering it", () => {
    render( <Contact /> );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

})