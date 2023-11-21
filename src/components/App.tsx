import { Outlet, Link } from "react-router-dom";
import classes from "./App.module.scss";
import React from 'react';


export const App = () => {
    return (
        <>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/">Home</Link>
            <h1 className={classes.greeting}>Greeting!</h1>
            <div className={classes.block}>
                HI, man!!!!
            </div>
            <Outlet/>
        </>
        
    );
};