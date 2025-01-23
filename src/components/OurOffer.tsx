import React from "react";

const OurOffer: React.FC = () => {
  return (
    <div className="w-full h-auto md:h-[20vh] md:mt-10 md:ml-4 md:mr-4 flex flex-col items-start justify-between bg-gradient-to-t from-white to-white/0 rounded-[40px] px-2">
      {/* Offer Text */}
      <div className="w-full font-poppins space-y-4 px-2 md:flex flex-row justify-between">
        <h1 className="text-black text-2xl font-bold md:w-1/2 ">Our Offer:</h1>
        <p className="text-start text-l text-light-gray-400 leading-relaxed pb-4 pl-4 md:w-[50%]">
          At FlexDown, precision is our promise in every property we handle. We
          believe that attention to detail makes all the difference, whether
          you're buying, selling, or investing.
        </p>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center items-center mt-4 mb-4 md:mt-0">
        <span className="text-center text-gray-500 text-sm">
          © 2025 FlexDown - All rights reserved
        </span>
      </div>
    </div>
  );
};

export default OurOffer;
