import React from "react";
import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Utils/auth";
import FooterNav from "../../Components/Footer/FooterNav";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthed = useSelector((state) => state.auth.isLoggedIn)

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
    if(isAuthed) {
      navigate("/")
    }
  };


  //Toggle Page
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
    Navigate("/signup");
  };

const Navigate = useNavigate();

  return (
    <div>


    {/*Toggle Button */}
    <div className="border border-black w-10 mt-0 flex justify-center"></div>
    <div className="toggle-button flex justify-center items-center mt-28">
      <div className="">
        <div className="flex justify-between mb-4">
          <button
            onClick={handleToggle}
            className="px-4 py-2 text-md font-bold text-gray-600 bg-blue-100 rounded-sm focus:outline-none w-22 border border-[]"
          >
            Log in
          </button>
          <button
            onClick={handleToggle}
            className="px-2 py-2 text-md font-bold text-gray-600 bg-white focus:outline-none border-2 border-blue-100 w-22"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>



      <div className="pt-[10px] pb-[6rem] flex justify-center">
        <div className="w-[520px] h-[683px] bg-gray-100">
          <h1 className="text-[37px] px-[132px] pt-[94px] pb-[107px] leading-[45px]">
            Welcome Back
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col ">
            <input
              className="p-3 h-12 w-[360px] m-auto text-[18px] flex mb-5 bg-white"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="p-3 h-12 w-[360px] m-auto text-[18px] flex mb-[45px] bg-white]"
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
