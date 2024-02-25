import React, { useState, useEffect } from "react";
import clothImage from "../app/images/cloth.svg";
import medicineImage from "../app/images/medicine.svg";
import bookImage from "../app/images/book.svg";
import location from "../app/images/location.svg";
import Modal from "./Modal";
import { ref, get } from "firebase/database";
import database from "@/app/firebase/databaseConfig";
const Ngo = ({ type }) => {
  const [data, setDonations] = useState([])
  useEffect(()=>{
    const fetchDonations = async ()=>{
      if (type === 'ngo'){
        try{
          const donationsRef = ref(database, 'donations');
          get(donationsRef)
          .then((res)=>{
            console.log(res.val());
            setDonations(Object.values(res.val()));
          })
        }
        catch (error){
          console.log(error)
        }
      }
    }
    fetchDonations();
  }, [])
  console.log("Data of Donations ", data)
  const [showModal, setShowModal] = useState(false);
  const [selectedNgo, setSelectedNgo] = useState(null);

  const openModal = (index) => {
    setSelectedNgo(data[index]); // Pass the user data associated with the selected index
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1 className="pt-7 text-4xl px-8">Donations</h1>
      <div className="flex flex-col gap-4 p-7">
        {data.map((user, index) => (
          <div key={index} className="bg-gray-200 px-5 pt-5 pb-4 rounded-xl">
            <h2 className="text-2xl font-medium">{user.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              {user.medicine && (
                <img
                  className="h-5 w-5"
                  src={medicineImage.src}
                  alt="Medicine"
                />
              )}
              {user.book && (
                <img src={bookImage.src} alt="Book" className="h-5 w-5" />
              )}
              {user.cloth && (
                <img src={clothImage.src} alt="Cloth" className="h-5 w-5" />
              )}
            </div>
            <p className="mt-2 text-md">{user.address}</p>
            <p className=" mt-3 text-xs">{user.phone}</p>
            <div className="flex flex-row gap-3 pt-6">
              <img src={location.src} alt="" />
              <button
                onClick={() => openModal(index)}
                className="bg-white px-4 w-full rounded-xl"
              >
                Description
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        selectedNgo={selectedNgo}
      />
    </>
  );
};

export default Ngo;
