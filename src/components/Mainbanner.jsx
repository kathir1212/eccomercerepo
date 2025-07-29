import React from 'react';
import Banner from "../assets/banner.jpg"

export const Mainbanner = () => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Slides */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
src={Banner}
            className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Fashion Deals"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
          src={Banner}

className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Tech Gadgets"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1616627562163-3bb8d4b7fc7c?auto=format&fit=crop&w=1740&q=80"
            className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="E-commerce Accessories"
          />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        <button className="w-3 h-3 rounded-full bg-white" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button className="w-3 h-3 rounded-full bg-white" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button className="w-3 h-3 rounded-full bg-white" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
