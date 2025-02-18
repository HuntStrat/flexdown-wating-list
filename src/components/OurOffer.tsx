import React from "react";

const OurOffer: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-[25vh] md:px-4">
      {/* Offer Text */}
      <div className="w-full font-poppins space-y-4 px-4 md:flex flex-row justify-between lg:align-center">
        <h1 className="text-black text-2xl font-bold md:w-1/2 md:text-3xl lg:mt-8">Our Offer:</h1>
        <p className="text-start text-l text-light-gray-400 leading-relaxed pb-4 md:w-[45%]">
          At FlexDown, precision is our promise in every property we handle. We
          believe that attention to detail makes all the difference, whether
          you're buying, selling, or investing.
        </p>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center items-center mb-4 md:mt-0">
        <span className="text-center text-gray-500 text-sm">
          © 2025 FlexDown - 
        </span>
      </div>
    </div>
  );
};

export default OurOffer;
