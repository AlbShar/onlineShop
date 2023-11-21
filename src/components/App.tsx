import classes from "./App.module.scss";
import React from 'react';


export const App = () => {
    return (
        <>
            <h1 className={classes.greeting}>Greeting!</h1>
            <div className={classes.block}>
                HI, man!!!!
            </div>
        </>
        
    );
};