import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";




const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      "name": "Peehal Sinha"
    }
    setUserName(data.name);
  }
    , []);


  return (

    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        
        <Header />
         
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter(
  [{
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<p>Loading...</p>} >
          <Grocery />
        </Suspense>
      }, {
        path: "/city/jamshedpur/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
