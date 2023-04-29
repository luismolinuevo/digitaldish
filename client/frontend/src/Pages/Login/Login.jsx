import React from 'react';
import ReactDOM from "react-dom";
import "./login.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from "../../Utils/auth"

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(username, password));
    };

    return (
        <form onSubmit={handleLogin} className='pt-80'>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type='submit'>Log in</button>
        </form>
    )

    // return(
    //     <>
    //         {isLoggedIn ? (
    //             <h1>Welcome Back!</h1>
    //         ) : (
    //             <form onSubmit={handleLogin}>
    //                 <label>
    //                     Username:
    //                     <input
    //                         type="text"
    //                         values={username}
    //                         onChange={(e) => setUsername(e.target.value)}
    //                     /> 
    //                 </label>
    //                 <label>
    //                     Password:
    //                     <input
    //                         type="password"
    //                         values={password}
    //                         onChange={(e) => setPassword(e.target.value)}
    //                     />
    //                 </label>
    //                 <button onClick={handleLogin}>Log in</button>
    //             </form>
    //         )}
    //     </>        
    // );
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