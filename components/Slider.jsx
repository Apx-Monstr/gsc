import React, { useEffect } from "react";
import next from "../app/images/next.svg"
import previous from "../app/images/previous.svg"
const Slider = () => {
  useEffect(() => {
    const carousel = document.getElementById("default-carousel");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const items = Array.from(carousel.querySelectorAll("[data-carousel-item]"));
    const indicators = Array.from(
      carousel.querySelectorAll("[data-carousel-slide-to]")
    );

    let currentIndex = 0;

    const showSlide = (index) => {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.setAttribute("aria-current", "true");
        } else {
          indicator.setAttribute("aria-current", "false");
        }
      });
    };

    const goToSlide = (index) => {
      currentIndex = index;
      showSlide(currentIndex);
    };

    const goToPrevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
    };

    const goToNextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    };

    prevButton.addEventListener("click", goToPrevSlide);
    nextButton.addEventListener("click", goToNextSlide);
    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        goToSlide(i);
      });
    });

    showSlide(currentIndex);

    return () => {
      prevButton.removeEventListener("click", goToPrevSlide);
      nextButton.removeEventListener("click", goToNextSlide);
      indicators.forEach((indicator, i) => {
        indicator.removeEventListener("click", () => {
          goToSlide(i);
        });
      });
    };
  }, []);

  return (
    <div className="p-0 h-[600px]">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-[600px] overflow-hidden m-0 p-0 md:h-96 rounded-lg">
          <div className="duration-700 ease-in-out h-[600px]" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 1"
            />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="Slide 2"
            />
          </div>
          {/* Add other image items here similarly */}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          {/* Add buttons for other slides */}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> */}
          {/* Add SVG for previous */}
          <img src={previous.src} alt="" />
          {/* </span> */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> */}
          {/* Add SVG for next */}
          <img src={next.src} alt="" />
          {/* </span> */}
        </button>
      </div>
    </div>
  );
};

export default Slider;
