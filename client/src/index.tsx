import { App } from '~/app';
import { Home } from "~/pages/home";
import { About } from "~/pages/about";
import { Basket } from '~/pages/basket';
import { Admin } from '~/pages/admin';
import { ProductItem } from '~/pages/productItem';

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/Basket",
        element: <Basket/>,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document?.getElementById("root") ?? document.createElement("div")
);

if (!root) {
  throw new Error('There isn"t root in html file');
}

root.render( <RouterProvider router={router} />);
