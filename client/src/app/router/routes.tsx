import { Home } from "~/pages/home";
import { About } from "~/pages/about";
import { Admin } from "~/pages/admin";
import { Basket } from "~/pages/basket";
import { Auth } from "~/pages/auth";
import { ProductItem } from "~/pages/productItem";
import { ROUTES } from "~/shared/consts";

export const authRoutes = [
  {
    path: ROUTES.ADMIN,
    Component: <Admin />,
  },
  {
    path: ROUTES.BASKET,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: ROUTES.HOME,
    Component: <Home />,
  },
  {
    path: `${ROUTES.PRODUCT}/:id`,
    Component: <ProductItem />,
  },
  {
    path: ROUTES.ABOUT,
    Component: <About />,
  },
  {
    path: ROUTES.LOGIN,
    Component: <Auth />,
  },
  {
    path: ROUTES.REGISTRATION,
    Component: <Auth />,
  },
];
