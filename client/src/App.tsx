import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import {Container} from "@mui/material";

import './style.css'
import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Home'
import PrivateRouter from "./PrivateRouter";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

interface Route {
    path: string,
    element: JSX.Element
}

function App() {
    const authRoutes: Route[] = [
        {
            path: '/',
            element: <Home/>
        },
    ]


    return (
        <Container maxWidth="md">
            <BrowserRouter>
                <Routes>
                    {authRoutes.map(route => (
                            <Route key={route.path} path={route.path} element={
                                <PrivateRouter>{route.element}</PrivateRouter>
                            }/>
                        )
                    )}

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
