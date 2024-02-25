import React, { useEffect } from "react";
import next from "../app/images/next.svg";
import previous from "../app/images/previous.svg";
import { useState } from "react";

const Slider = ({ slides }) => {
  console.log("sdajfksnajk",slides)
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (e) => {
    const n = slides.length;
    if (e.deltaY > 0) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % n);
    } else if (e.deltaY < 0) {
      setCurrentSlide((prevSlide) => (prevSlide + (n - 1)) % n);
    }
  };

  const onClickSetSlide = (index) => {
    setCurrentSlide(index);
  };

  const clickNext=()=>{
    if(currentSlide+1 < slides.length){
      setCurrentSlide(currentSlide+1)
    }
  }
  const clickPrev=()=>{
    if(currentSlide-1 > 0){
      setCurrentSlide(currentSlide-1)
    }
  }

  return (
    <div className="p-0  h-full w-full overflow-hidden relative">
      <div className="absolute w-full h-auto  px-6  top-1/2 left-0 z-20 flex justify-between">
        <img className="cursor-pointer"  src={previous.src} onClick={clickPrev}/>
        <img  className="cursor-pointer" src={next.src} onClick={clickNext}/>
      </div>
      <div
        id="default-carousel"
        className=" w-full h-screen flex"
        data-carousel="slide"
        onWheel={handleScroll}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out min-w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="h-full w-full min-w-full rounded-md" style={{ backgroundImage: `url(${slide})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
              <div className="h-full flex items-end">
                <div className="p-2 text-mwhite mb-12">
                  <div className="text-7xl pop mb-4">{slide.text}</div>
                  <div className="text-3xl">{slide.tagline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 w-full mb-6 z-20">
        <div className=" mx-auto w-fit flex gap-4">
          {slides.map((slide, index) => (
            <div key={index}
              className={`h-2 cursor-pointer w-10 rounded ${
                currentSlide === index ? "bg-white" : "bg-white w-2 opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Slider;
