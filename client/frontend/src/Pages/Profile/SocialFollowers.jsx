import React from "react";
import ReactDOM from "react-dom";
import Footer from "../../Components/Footer/Footer";
import ReviewCards from "./CustomerReview";

export default function SocialFollowers() {

    const listings = 9;
const feedback = 2;
  return (
    <div>
      <div className="p-20">
      <div className="flex flex-row w-full justify-center gap-10 pl-40">
      <div>
              <div className="listing">
                <button
                //   style={buttonHighlight(1)}
                //   onClick={() => handleClick(1)}
                  strokeWidth={2}
                  className="hover:shadow-xl"
                >
                  Listing
                  <span className="text-gray-500 font-medium">
                    {" "}
                    ({listings})
                  </span>
                </button>
              </div>
              <div className="friends">
                <button
                //   style={buttonHighlight(2)}
                //   onClick={() => handleClick(2)}
                  strokeWidth={2}
                  className="hover:shadow-xl"
                >
                  Friends
                  <span>{}</span>
                </button>
              </div>
              <div className="feedback">
                <button
                //   style={buttonHighlight(3)}
                //   onClick={() => handleClick(3)}
                  strokeWidth={2}
                  className="hover:shadow-xl"
                >
                  Feedback
                  <span className="text-gray-500 font-medium">
                    {" "}
                    ({feedback})
                  </span>
                </button>
              </div>
            </div>
            </div>
        <p className="text-4xl pt-10 flex justify-center">Social Followers</p>
      </div>
      <div className="flex flew-row p-10 pt-0 mx-20">
        <div className="flex flex-col p-5 pt-0">
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
        </div>
        <div className="flex flex-col p-5 pt-0 ">
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}
