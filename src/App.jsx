import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import AddToCart from "./components/AddToCart";

function App() {
  return (
    <Provider store={appStore}>
      <div className="app mt-0 m-auto p-0 overflow-x-hidden box-border">
        <ToastContainer/>
        <Header />
        <Outlet />
        {/* <Body/> */}
        <Footer />
      </div>
    </Provider>
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
      {
        path: "/cart",
        element: <AddToCart/>,
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
