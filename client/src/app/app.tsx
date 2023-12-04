import { Outlet, Link } from "react-router-dom";
import classes from "./atyles/App.module.scss";
import { withProviders } from "./providers";
import { MyRoutes } from "./router";

export const App = withProviders(MyRoutes);
