import React, { useEffect, useState } from "react";
import close from "../app/images/close.svg";
import Slider from "./Slider";
import clothImage from "../app/images/cloth.svg";
import medicineImage from "../app/images/medicine.svg";
import bookImage from "../app/images/book.svg";
import location from "../app/images/location.svg";
import { ref, get } from "firebase/database";
import database from "@/app/firebase/databaseConfig";

const images = [
  {title:"Helo from Felplspd0",url:"https://images.unsplash.com/photo-1707343843598-39755549ac9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
  {title:"Helo from Felplswdewadwpd0",url:"https://images.unsplash.com/photo-1708721205486-dd5afb8cd39e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
  {title:"Helo from Felplsaaewdspd0",url:"https://images.unsplash.com/photo-1682688759157-57988e10ffa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"},
]

const Modal = ({ isOpen, onClose, selectedNgo}) => {
  // const [donation, setDonations] = useState([null]);
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     try{
  //       const donationRef = ref(database, `donations`);
  //       get(donationRef)
  //       .then((res)=>{
  //         setDonations(res.val());
  //         console.log(res.val())
  //       })
  //     }
  //     catch (error){
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
  // }, [])
  const acceptDonation = async =>{
    try{
      const acceptRef = ref(database, `donations/${selectedNgo.id}/acceptedBy`);
      const statusRef = ref(database, `donations/${selectedNgo.id}/stauts`);
      const listRef = ref(database, `donations/${selectedNgo.id}/acceptedBy`);
    }
    catch(err){
      console.log(err)
    }
    console.log(selectedNgo.by, selectedNgo.staus, selectedNgo.id)
  }
  if (!isOpen) return null;
  return (
    <div className="flex fixed z-10 inset-0 overflow-y-auto justify-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex flex-row p-0 rounded-lg bg-white w-[900px] h-[600px]">
          <div className="w-[70%]">
            <Slider slides={images}/>
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
              <p className="mt-2 text-md">{selectedNgo.add}</p>
              <p className="mt-2 text-md">{selectedNgo.address}</p>
              <p className="mt-3 text-xs">{selectedNgo.img}</p>
              <p className="mt-3 text-xs">{selectedNgo.description}</p>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <button onClick={acceptDonation} className="bg-red-600 text-white w-[80%] px-4 py-3 rounded-lg">
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
