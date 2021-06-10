import React, {useEffect, useState, createContext, useContext} from "react";
import { BrowserRouter } from 'react-router-dom'
import AuthDataProvider from "./components/context/AuthProvider";
import Router from './components/Router'

export default function App(props) {
    
    return (
        <div className="App">
            <BrowserRouter>
                <AuthDataProvider>
                    <Router />
                </AuthDataProvider>
            </BrowserRouter>
        </div>
    );
}
