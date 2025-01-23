import React from "react";

const OurOffer: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-start justify-between bg-gradient-to-t from-white to-white/0 rounded-[40px] px-2">
      {/* Offer Text */}
      <div className="w-full font-poppins space-y-4 px-2">
        <h1 className="text-black text-2xl font-bold ">Our Offer:</h1>
        <p className="text-start text-l text-light-gray-400 leading-relaxed pb-4">
          At FlexDown, precision is our promise in every property we handle. We
          believe that attention to detail makes all the difference, whether
          you're buying, selling, or investing.
        </p>
      </div>

      {/* Footer Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
        <span className="text-center text-gray-500 text-sm">
          © 2025 FlexDown - All rights reserved
        </span>
      </div>
    </div>
  );
};

export default OurOffer;
