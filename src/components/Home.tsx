import React from "react";
import OurOffer from "./OurOffer";
import WaitingList from "./WaitingList"



const Home: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-custom-bg bg-cover bg-center relative">

      {/* Content Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-start px-2 py-4">

        {/* Left Section */}
        <div className="w-full h-[55vh] md:h-[70vh] flex flex-col items-start justify-between text-black space-y-6 p-4">
          {/* Logo */}
          <img className="w-[25%] " src="/src/assets/logo/Logo.svg" alt="Logo" />
          {/* Heading */}
          <h1 className="w-full leading-10 font-poppins font-bold text-[40px] lg:text-[70px] lg:leading-20 lg:w-[70%]">
            Smarter Deals for Modern Living
          </h1>

          {/* Waiting List Form */}
          <div className="w-full" >
           <WaitingList />
          </div>
        </div>



        {/* Right Section */}
        <div className="w-full flex items-center justify-center mt-4 md:mt-2">
          <img
            src="/src/assets/images/waiting-list.png"
            alt="Waiting List"
            className="max-w-full md:h-[68vh] "
          />

  
        </div>
      </div>

<div className="w-full px-2" >
<OurOffer />

</div>




  
    </div>
  );
};

export default Home;
