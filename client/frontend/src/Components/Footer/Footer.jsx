import { useState } from "react";
// import { sanitize } from '';
import Loading from './Loading';
import { Spinner, IconButton } from '@material-tailwind/react';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/icons/Icon-InstagramLogo.png";
import FacebookIcon from "../../assets/icons/Icon-FacebookLogo.png";
import TwitterIcon from "../../assets/icons/Icon-TwitterLogo.png";
import ArrowIcon from "../../assets/Icon-ArrowUp.png";

const Footer = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    //If User has not entered anything
    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */

  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== results?.[0]?.trim()) {
      return formattedMessage ? sanitize(formattedMessage) : null;
    }
  };

  return (
    <div>
      <div className="Footer-container flex justify-center flex-col pt-60">
        <div className="p-5 w-full mt-8 border border-gray-200 bg-[#7F92B5] text-center">
          {" "}
          <span className="inline-flex">
            <a className="text-gray-500 px-5">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a className="ml-4 text-gray-500 px-5">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a className="ml-4 text-gray-500 px-5">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
          </span>
        </div>
        <div className="p-2 bg-[#C3D5F5] h-[20vw] flex justify-center flex-col mt-auto text-center">
          <a className="text-black font-['Arial'] font-extrabold text-4xl py-10 ">
            Stay in Touch
          </a>
          <form
            method="POST"
            action="https://gmail.us11.list-manage.com/subscribe/post?u=116baf287fef2694aeb38d725&amp;id=402b0ba692&amp;f_id=00239fe0f0"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="validate leading-normal my-5 w-full flex flex-col justify-center"
          >
            <div className="flex flex-col justify-center self-center">
              <div className="pb-2">
                {"sending" === status ? (
                  <Spinner
                    showSpinner
                    message="Sending..."
                    contentColorCLass="text-white"
                    hasVisibilityToggle={false}
                  />
                ) : null}
                {"error" === status || error ? (
                  <div
                    className="text-red-700 pt-2"
                    dangerouslySetInnerHTML={{
                      __html: error || getMessage(message),
                    }}
                  />
                ) : null}
                {"success" === status && "error" !== status && !error && (
                  <div
                    className="text-green-200 font-bold pt-2"
                    dangerouslySetInnerHTML={{ __html: sanitize(message) }}
                  />
                )}
              </div>

              <div className="flex flex-row">
                <div className="border-b border-[#7F92B5] w-[26rem] self-center text-left">
                <div className="flex flex-row">
                  <input
                    className="appearance-none bg-transparent border-none w-[26rem] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-xl"
                    onChange={(event) => setEmail(event?.target?.value ?? "")}
                    type="email"
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    
                  />
                  <div className="flex justify-end">
                  <button
                  className="cursor-pointer hover:bg-indigo-100 focus:outline-none z-50 object-left"
                  onClick={handleFormSubmit}
                >
                  <input
                    type="image"
                    src={ArrowIcon}
                    alt="Arrow Icon"
                    width="30px"
                    className="flex flex-row justify-center item-center self-center"
                  />
                </button>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs">
              By entering my email I accept the terms and conditions and the
              privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <div classNameName='border border-black fixed w-full h-[300px] flex justify-between items-center px-4'>
//     <div classNameName='flex items-center'></div>
//     <div classNameName='text-indigo-500'></div>
// </div>
