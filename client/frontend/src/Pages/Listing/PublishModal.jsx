import React from "react";

export default function PublishModal ({ isVisable, onClose, children}) {
    if (!isVisable) return null;
  const handleClose = (e) => {
        if (e.target.id === "wrapper") {
            onClose()
        }
    };

    return (
        <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[584px] bg-white py-8 px-12">
        <div className="flex justify-end">
          <button className="" onClick={() => onClose()}>
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>

    );
}