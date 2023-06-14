import { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { signupUser } from "../../Utils/auth";
import FooterNav from "../../Components/Footer/FooterNav";

export default function Signup() {
  //Handle signup Credentials
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser(email, username, password));
  };

  const Navigate = useNavigate();

  //Toggle Page
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
    Navigate("/login");
  };

  const [showSignup, setShowSignup] = useState(true);

  const handleToggle2 = () => {
    setShowSignup(!showSignup);
    Navigate("/signup");
  };

  return (
    <>
      <section className="text-gray-600 body-font self-center h-[55rem]">
        {" "}
        {/*h-300 */}
        {/*Toggle Button */}
        <div className="border border-black w-10 mt-0 flex justify-center"></div>
        <div className="toggle-button flex justify-center items-center mt-28">
          <div className="">
            <div className="flex justify-between mb-4">
              <button
                onClick={handleToggle}
                className="px-4 py-2 text-md font-bold text-gray-600 bg-white rounded-sm focus:outline-none w-22 border-2 border-[#C7A695]"
              >
                Log in
              </button>
              <button
                onClick={handleToggle}
                className="px-2 py-2 text-md font-bold text-gray-600 bg-[#C7A695] focus:outline-none border border-[#C7A695] w-22"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        {/*Sign up Form */}
        <div className="SignUp-Container py-2 flex justify-center">
          <div className="box lg:w-[30rem] lg:h-[38rem] md:h-[38rem] md:w-[30rem] sm:w-[30rem] xs:w-[30rem] bg-gray-100 p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-2xl font-medium title-font mb-20 text-center font-[Inter] pt-20">
              become a part of our community.
            </h2>
            <div className="flex justify-center">
            <form onSubmit={handleSignup} className="flex flex-col justify-center">
              <div className="relative mb-4">
                <label
                  for="email"
                  className="leading-7 text-sm text-gray-600"
                ></label>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out [min-width:35ch]"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="username"
                  className="leading-7 text-sm text-gray-600"
                ></label>
                <input
                  type="username"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out [min-width:35ch]"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="password"
                  className="leading-7 text-sm text-gray-600"
                ></label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out [min-width:35ch]"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="confirmed-password"
                  className="leading-7 text-sm text-gray-600"
                ></label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirm-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4 [min-width:35ch]"
                />
              </div>
              <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg font-bold mb-12 mx-auto w-30 flex content-center">
                Sign Up {/*Needs correct font*/}
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      <FooterNav />
    </>
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
