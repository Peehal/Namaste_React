import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore";

it("should load Header Component with a Login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toBeInTheDocument();
});


it("should load Header Component with a Cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // const cart = screen.getByRole("link", { name: /cart/i});
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
});


it("Should Change the Login Button to Logout On Click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const LoginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(LoginButton);

    const logoutButton = screen.getByRole("button", {name:"logout"});
    expect(logoutButton).toBeInTheDocument();
})