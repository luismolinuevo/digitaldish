import React from 'react';
import ReactDOM from "react-dom";
import "./login.css"

 export default function LoginPage() {
    return(
        <div className='user-auth'>
            <button className='login'>Log in</button>
            <button className='signup'>Sign up</button>
            <h1>Welcome Back</h1>
                <form>
                    <label className='email'>Enter your email:
                        <input type="text" />
                    </label>
                </form>
                <form>
                    <label className='password'>Enter your password:
                        <input type="password" />
                    </label>
                </form>
        </div>
    )
 };