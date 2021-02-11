import React, { useState } from 'react';
import './App.css';
import {Login} from './components/Login';
import {Main} from './components/Main';

const App = () => {

    localStorage.setItem("Username", "daniel@gmail.com");
    localStorage.setItem("Password", "12345");

    const[isLoggedInState,setIsLoggedInState] = useState(true);

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

    const handleLogout = () => {
        setIsLoggedInState(false);
        localStorage.setItem("isLoggedIn", false);
    }

    const items = [{
        "description": "Do The NavBar",
        "responsible": {
            "name": "Daniel Walteros",
            "email": "daniel@gmail.com"
        },
        "status": "In Progress",
        "dueDate": 156464645646
        },{
        "description": "Eat Lunch",
        "responsible": {
            "name": "Daniel Walteros",
            "email": "daniel@gmail.com"
        },
        "status": "Ready",
        "dueDate": 156464645646
        },{
        "description": "Go to the doctor",
        "responsible": {
            "name": "Daniel Walteros",
            "email": "daniel@gmail.com"
        },
        "status": "Completed",
        "dueDate": 156464645646}
    ];

    const LoginView = () => (<Login successful={handleSuccessfullyLogin} failed={handleFailedLogin}/>);
    const MainView = () => (<Main items={items} logout={handleLogout} email={localStorage.getItem("Username")}/>);

    return (
        <div className="App">
            {!isLoggedInState && (<LoginView />)}
            {isLoggedInState && (<MainView />)}
        </div>
    );
}

export default App;
