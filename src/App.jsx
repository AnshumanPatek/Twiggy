// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./App.css";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import RestaurantCard from "./components/RestaurantCard";
// import RestaurantCard from "./components/ReataurantCard";

function App() {
  return (
    <div className="app mt-0 m-auto p-0 overflow-x-hidden box-border">
      <Header />
      <Outlet />
      {/* <Body/> */}
      <Footer />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading...</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },

      // Dynamic Route
      // check:- baseurl/restaurants/123(any no.)
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
