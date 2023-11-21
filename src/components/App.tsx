import { Outlet, Link } from "react-router-dom";
import classes from "./App.module.scss";
import avatarJpg from "@/assets/avatar.jpg";
import avatarPng from "@/assets/avatar.png";
import Calendar from "@/assets/calendar.svg";

export const App = () => {
  return (
    <>
      <img width={100} src={avatarJpg} alt="" />
      <img width={100} src={avatarPng} alt="" />
      <Calendar fill='red' width='100' height={'100'}/>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/">Home</Link>
      <h1 className={classes.greeting}>Greeting!</h1>
      <div className={classes.block}>HI, man!!!!</div>
      <Outlet />
    </>
  );
};
