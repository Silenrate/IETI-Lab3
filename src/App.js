import React, { useState } from 'react';
import './App.css';
import {Login} from './components/Login';

const App = () => {

    localStorage.setItem("Username", "daniel@gmail.com");
    localStorage.setItem("Password", "12345");

    const[isLoggedInState,setIsLoggedInState] = useState(localStorage.getItem("isLoggedIn"));

    const handleSuccessfullyLogin = (e) => {
        console.log("Logueado");
        setIsLoggedInState(true);
        localStorage.setItem("isLoggedIn", true);
    }

    const handleFailedLogin = (e) => {
        alert("Usuario o Clave Incorrectos");
        setIsLoggedInState(false);
        localStorage.setItem("isLoggedIn", false);
    }

    return (
        <div className="App">
            <Login successful={handleSuccessfullyLogin} failed={handleFailedLogin}/>
        </div>
    );
}

export default App;
