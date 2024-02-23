import React from "react";

const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}) => {
  return (
    <div
      style={{
        transform: showModal ? " translateX(0%)" : "translateX(-200%)",
      }}
      className="absolute px-2 top-0 left-0 w-full h-full transition-all duration-500"
    >
      <div className="container mx-auto h-[80vh] max-w-2xl rounded-xl bg-slate-500 py-6 px-4 ">
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="w-8 h-8 border border-white  text-white mb-4 font-bold rounded-full bg-slate-600"
        >
          X
        </button>
        <h3>INGRESO DE DATA</h3>
      </div>
    </div>
  );
};

export default Modal;
