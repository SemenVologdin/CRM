import React from 'react'
import {Navigate} from "react-router-dom";
import Login from "./components/Login";

export default ({children}: {children:JSX.Element}) => {
    const isLogged: boolean = false;

    return(
        isLogged
            ? children
            : <Navigate to="/login"/>
    )
}