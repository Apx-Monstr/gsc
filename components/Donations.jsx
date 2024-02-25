import { useState } from "react";
import down from "../app/images/down.svg";
import locationb from "../app/images/locationb.svg"
import call from "../app/images/call.svg";
const Donations = ({ data }) => {
  const [showDetails, setShowDetails] = useState(
    Array(data.length).fill(false)
  );

  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <>
      <h1 className="pt-7 text-4xl px-8">NGO &apos; s</h1>
      <div className="flex flex-col gap-4 p-7">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDetails(index)}
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-10 w-10 mr-2 rounded-full"
                />
                <h2 className="text-2xl">{item.name}</h2>
              </div>
              <div className="justify-items-end">
                {showDetails[index] ? (
                  <img className="rotate-180" src={down.src} />
                ) : (
                  <img src={down.src} />
                )}
              </div>
            </div>
            {showDetails[index] && (
              <div className="mt-7 px-2">
                <div className="flex">
                  <img className="size-6 mr-2" src={locationb.src} alt="" />
                  <p className="text-gray-400"> {item.add}</p>
                </div>
                <div className="flex mt-3">
                  <img className="size-6 mr-2" src={call.src} alt="" />
                  <p className="text-gray-400"> {item.mno}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Donations;
