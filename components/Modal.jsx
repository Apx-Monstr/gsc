import React from "react";
import close from "../app/images/close.svg";
import Slider from "./Slider";
import clothImage from "../app/images/cloth.svg";
import medicineImage from "../app/images/medicine.svg";
import bookImage from "../app/images/book.svg";
import location from "../app/images/location.svg";

const Modal = ({ isOpen, onClose, selectedNgo }) => {
  if (!isOpen) return null;

  return (
    <div className="flex fixed z-10 inset-0 overflow-y-auto justify-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex flex-row p-0 rounded-lg bg-white w-[900px] h-[600px]">
          <div className="w-[70%]">
            <Slider />
          </div>
          <div className="w-[30%] relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700"
            >
              <img src={close.src} alt="Close" />
            </button>
            <div className="p-4">
              <h2 className="text-2xl font-medium">{selectedNgo.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                {selectedNgo.medicine && (
                  <img
                    className="h-5 w-5"
                    src={medicineImage.src}
                    alt="Medicine"
                  />
                )}
                {selectedNgo.book && (
                  <img src={bookImage.src} alt="Book" className="h-5 w-5" />
                )}
                {selectedNgo.cloth && (
                  <img src={clothImage.src} alt="Cloth" className="h-5 w-5" />
                )}
              </div>
              <p className="mt-2 text-md">{selectedNgo.address}</p>
              <p className="mt-2 text-md">{selectedNgo.address}</p>
              <p className="mt-3 text-xs">{selectedNgo.phone}</p>
              <p className="mt-3 text-xs">{selectedNgo.description}</p>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <button className="bg-red-600 text-white w-[80%] px-4 py-3 rounded-lg">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
