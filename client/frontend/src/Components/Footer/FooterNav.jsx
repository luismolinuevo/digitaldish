import { useState } from "react";
// import { sanitize } from "../../../utils/";
import { Link } from "react-router-dom";
// import InstagramIcon from "../../assets/icons/Icon-InstagramLogo.png";
// import FacebookIcon from "../../assets/icons/Icon-FacebookLogo.png";
// import TwitterIcon from "../../assets/icons/Icon-TwitterLogo.png";
// import ArrowIcon from "../../assets/Icon-ArrowUp.png";
// import AmexIcon from "../../assets/payment/american-express-icon.png";
// import VisaIcon from "../../assets/payment/visa-icon.png";
// import MasterIcon from "../../assets/payment/mastercard-icon.png";
// import PaypalIcon from "../../assets/payment/paypal-icon.png";
// import ApplePayIcon from "../../assets/payment/apple-pay-icon.png";
// import MainLogo from "../../assets/LogoMain.png";

export default function FooterNav({ status, message, onValidated }) {
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
    <div className="footer-nav  font-[Inter] bg-[#C3D5F5] pt-2">
      <div className="flex justify-center flex-col pt-30 pt-5">
        <div className="flex flex-row px-20">
          <div className="flex-col">
            <div className="logo-container p-5 w-[40rem] text-4xl ">
              <div className="flex text-gray-800">
                <img src={"/assets/LogoMain.png"} className="w-[3rem]" />
                <p className="pt-2 px-4 text-3xl">TECH NICHE</p>
              </div>
            </div>

            <form
              method="POST"
              action="https://gmail.us11.list-manage.com/subscribe/post?u=116baf287fef2694aeb38d725&amp;id=402b0ba692&amp;f_id=00239fe0f0"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              className="validate leading-normal my-5 w-full flex flex-col justify-center pb-10 pt-1 pl-5"
            >
            <div className="flex flex-row">
            <div className="border-b-2 border-[#7F92B5] w-[20rem] self-center text-left">
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
                src={"/assets/Icon-ArrowUp.png"}
                alt="Arrow Icon"
                width="30px"
                className="flex flex-row justify-center item-center self-center"
              />
            </button>
            </div>
              </div>
            </div>
          </div>

              <p className="text-xs pt-3 pl-2">
                By entering my email I accept the terms and {<br />} conditions
                and the privacy policy.
              </p>
            </form>

            <div className="py-10 pl-5 !w-full">
              <p className="text-2xl">CONTACT</p>
              <p className="py-2 text-base">
                For questions on your purchase, please write {<br />} to us at
                customerservice@techniche.com
              </p>
            </div>
          </div>

          <ul className="help-container w-[40rem] px-10 text-2xl flex flex-col">
            HELP
            <Link to="#">
              <li className="text-base py-4">Returns</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2 w-[15rem]">
                Frequently Asked Questions
              </li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Contact</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Shipping</li>
            </Link>
          </ul>
          <ul className="purchase-container w-[40rem] px-10 text-2xl">
            PURCHASE
            <Link to="#">
              {" "}
              <li className="text-base py-4">Community</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Devices</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Accessories</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Barters</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Negotiations</li>
            </Link>
            <Link to="#">
              <li className="text-base py-2">Auctions</li>
            </Link>
          </ul>
        </div>

        <div className=""></div>

        <div className="footer-bottom w-full bg-[#7F92B5] flex flex-row justify-around gap-x-80 pt-4">
          <div className="payments pr-20">
            <div className="text-center">
              <span className="inline-flex">
                <Link to="#" className="px-3">
                  <img
                    src={"/assets/payment/american-express-Icon.png"}
                    alt="American Express Icon"
                    width="50vw"
                  />
                </Link>
                <Link to="#" className="ml-4 px-3">
                  <img src={"/assets/payment/visa-Icon.png"} alt="Visa Icon" width="50vw" />
                </Link>
                <Link to="#" className="ml-4 px-3">
                  <img src={"/assets/payment/mastercard-Icon.png"} alt="Mastercard Icon" width="50vw" />
                </Link>
                <Link to="#" className="ml-4 px-3">
                  <img src={"/assets/payment/paypal-Icon.png"} alt="Paypal Icon" width="50vw" />
                </Link>
                <Link to="#" className="ml-4 px-3">
                  <img src={"/assets/payment/apple-pay-Icon.png"} alt="Apple Pay Icon" width="50vw" />
                </Link>
              </span>
            </div>
          </div>

          <div className="socials pr-40">
            <div className="text-center">
              <span className="inline-flex">
                <Link to="#" className="text-gray-500 px-3">
                  <img src={"/assets/icons/Icon-InstagramLogo.png"} alt="Instagram Icon" width="50vw" />
                </Link>
                <Link to="#" className="ml-4 text-gray-500 px-3">
                  <img src={"/assets/icons/Icon-TwitterLogo.png"} alt="Twitter Icon" width="50vw" />
                </Link>
                <Link to="#" className="ml-4 text-gray-500 px-3">
                  <img src={"/assets/icons/Icon-FacebookLogo.png"} alt="Facebook Icon" width="50vw" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
