import { Outlet, Link } from "react-router-dom";
import "./styles/global.scss";
import { withProviders } from "./providers";
import { MyRoutes } from "./router";

export const App = withProviders(MyRoutes);
