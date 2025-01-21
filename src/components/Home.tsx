import React from "react";
import OurOffer from "./OurOffer";
import WaitingList from "./WaitingList"

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-custom-bg bg-cover bg-center relative">
      {/* Content Section */}
      <div className="w-full h-[80vh] flex flex-row justify-between items-center px-8 py-8">
        {/* Left Section */}
        <div className="w-1/2 h-[70vh] flex flex-col items-start justify-between text-black space-y-6 p-4">
          {/* Logo */}
          <img className="w-[28%]" src="/src/assets/logo/Logo.svg" alt="Logo" />

          {/* Heading */}
          <h1 className="w-[70%] leading-100 font-poppins font-bold text-6xl">
            Smarter Deals for Modern Living
          </h1>

          {/* Waiting List Form */}
          <div className="w-full" >
           <WaitingList />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/src/assets/images/waiting-list.png"
            alt="Waiting List"
            className="max-w-full h-[70vh] "
          />
        </div>
      </div>

      <OurOffer />
    </div>
  );
};

export default Home;
