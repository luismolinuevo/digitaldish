import React, { Children } from "react";

export default function MakeOfferModal({ isVisable, onClose, children }) {
  if (!isVisable) return null;

  const handleClose = (e) => {   //if you click out side the box is will close because the wrapper is in a div that is the background. And the div below contains the modal
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[584px] bg-white py-9 px-14">
        <div className="flex justify-end">
          <button className="" onClick={() => onClose()}>
            X
          </button>
        </div>
        <div>{children}</div>

        {/* <h1>Make an Offer</h1>
        <div className="flex">
          <div>
            <p>Title</p>
            <p>Listing Price: $60.00</p>
            <p>Username</p>
          </div>
          <div>
            <img></img>
          </div>
        </div>
        <div>
          <h3>Sugguested Offers:</h3>
          <div>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
