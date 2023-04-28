import React from 'react';
import ReactDOM from "react-dom";
import "./Signup.css"
import { useContext } from 'react';
import { AuthContext } from '../../Utils/AuthContext';

 export default function Signup() {
    const { isLoggedIn, login } = useContext(AuthContext);

    const handleLogin = () => {
        // calls the authentication API
        login();
    };

    return(
        <>
            {isLoggedIn ? (
                <p>Welcome Back!</p>
            ) : (
                <button onClick={handleLogin}>Log in</button>
            )}
        </>        
    );
 };