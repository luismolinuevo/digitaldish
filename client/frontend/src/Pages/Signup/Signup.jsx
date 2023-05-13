import { useState } from "react";
import ReactDOM from "react-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { signupUser } from "../../Utils/auth";


export default function Signup() {
  
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
      e.preventDefault();
      dispatch(signupUser(email,username,password));
    }

  return (
    <section className="text-gray-600 body-font self-center">
      <div className="container w-full right-[35%] py-24 mx-100 flex fixed">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        </div>
        <div className="box lg:w-2/6 md:w-1/2 bg-gray-100 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-20 text-center font-[Inter]">
            be a part of our community.
          </h2>
          <form onSubmit={handleSignup}>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600 pl-6">
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[310px]"
            />
          </div>
          <div className="relative mb-4">
            <label for="username" className="leading-7 text-sm text-gray-600 pl-6">
            </label>
            <input
              type="username"
              placeholder="Username"
              value={username}
              name="username"
              onChange={(e)=>setUsername(e.target.value)}
              required
              className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[310px]"
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600 pl-6">
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[310px]"
            />
          </div>
          <div className="relative mb-4">
            <label for="confirmed-password" className="leading-7 text-sm text-gray-600 pl-6">
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              name="confirm-password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
              className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4 w-[310px]"
            />
          </div>
          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg font-bold mb-12 mx-auto w-30 flex content-center"> 
            Sign Up {/*Needs correct font*/}
          </button>
          </form>
        </div>
      </div>
    </section>
  );
}

//  <>
//  <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
//      <div className='button-toggles flex flex-col border border-red-700 bg-red-50 w-[80px] h-[80px]'>
//          <div className='log-in'>Log in</div>
//          <div className='sign-up'>Sign up</div>
//      </div>

//  </div>
// </>
