import React from 'react';
import ReactDOM from "react-dom";
import "./login.css"
import { useState } from 'react';
import { AuthContext, UserAuth } from '../../Utils/AuthContext';

 export default function Login() {
    const { isLoggedIn, login } = UserAuth(AuthContext);

    const handleLogin = () => {
        // calls the authentication API
        login();
    };

    return(
        <>
            {isLoggedIn ? (
                <h1>Welcome Back!</h1>
            ) : (
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            values={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /> 
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            values={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button onClick={handleLogin}>Log in</button>
                </form>
            )}
        </>        
    );
 };


//  <div className='user-auth'>
//             <button className='login'>Log in</button>
//             <button className='signup'>Sign up</button>
//             <h1>Welcome Back</h1>
//                 <form>
//                     <label className='email'>Enter your email:
//                         <input type="text" />
//                     </label>
//                 </form>
//                 <form>
//                     <label className='password'>Enter your password:
//                         <input type="password" />
//                     </label>
//                 </form>
//         </div>