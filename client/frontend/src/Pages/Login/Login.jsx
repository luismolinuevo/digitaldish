import React from "react";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Utils/auth";
import FooterNav from "../../Components/Footer/FooterNav";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };

  return (
    <div>
      <div className="pt-[125px] flex justify-center">
        <div className="w-[520px] h-[683px] border-[1px] border-black ">
          <h1 className="text-[37px] px-[132px] pt-[94px] pb-[107px] leading-[45px]">
            Welcome Back
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col ">
            <input
              className="p-3 h-12 w-[360px] m-auto text-[18px] flex mb-5 bg-[#D9D9D9]"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="p-3 h-12 w-[360px] m-auto text-[18px] flex mb-[45px] bg-[#D9D9D9]"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-[217px] h-[65px] m-auto text-[22px] bg-[#565353] text-white"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="text-center mt-[29px]">
            <p className="text-[17px]">Forgot your Username?</p>
            <p className="text-[17px]">Forgot Password?</p>
          </div>
        </div>
      </div>

      <FooterNav />
    </div>
  );

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
}

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
