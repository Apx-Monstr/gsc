"use client"

import React from "react";

const Modal1 = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  onInputChange,
  onImageChange,

}) => {
    // console.log("formData:", formData);
    
  return (
    
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Donate Now</h2>
            <button className="text-lg" onClick={onClose}>
              &times;
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="ttl"
              value={formData.ttl}
              onChange={onInputChange}
              placeholder="Donation Title"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="mno"
              value={formData.mno}
              onChange={onInputChange}
              placeholder="Mobile Number"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <div className="flex mb-2 place-content-between">
                <div className="mr-[300px]">
                Donation Contains :           
                </div>
              <label className="mr-2">
                <input
                  type="checkbox"
                  name="med"
                  checked={formData.med}
                  onChange={onInputChange}
                />
                Medicine
              </label>
              <label className="mr-2">
                <input
                  type="checkbox"
                  name="book"
                  checked={formData.book}
                  onChange={onInputChange}
                />
                Books
              </label>
              <label>
                <input
                  type="checkbox"
                  name="clh"
                  checked={formData.clh}
                  onChange={onInputChange}
                />
                Clothes
              </label>
            </div>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={onInputChange}
              placeholder="Description"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="add"
              value={formData.add}
              onChange={onInputChange}
              placeholder="Address Line 1"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            {/* <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={onInputChange}
              placeholder="Address Line 2"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            /> */}
            <input
              type="file"
              onChange={onImageChange}
              accept="image/*"
              multiple // Allow multiple image selection
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            {/* Display selected image names */}
            {formData.image && (
              <div className="mb-2">
                {Array.from(formData.image).map((file, index) => (
                  <p key={index}>{file.name}</p>
                ))}
              </div>
            )}
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded w-full"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal1;
