import { App } from "./components/App";
import { Shop } from "./pages/shop";
import { About } from "./pages/about";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={"Loading..."}><About/></Suspense>,
      },
      {
        path: "/shop",
        element: <Suspense fallback={"Loading..."}><Shop/></Suspense>,
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
