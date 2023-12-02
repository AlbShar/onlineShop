import { Outlet, Link } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <>
      <Link to="/admin">Admin</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <h1 className={classes.greeting}>Greeting!</h1>
      <div className={classes.block}>HI, man!!!!</div>
      <Outlet />
    </>
  );
};
