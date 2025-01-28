import React from "react";
import OurOffer from "./OurOffer";
import WaitingList from "./WaitingList"




const Home: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-custom-bg bg-cover bg-center relative">

      {/* Content Section */}
      <div className="w-full h-auto flex flex-col md:flex-col lg:flex-row justify-between items-start px-2 py-4">

        {/* Left Section */}
        <div className="w-full h-[55vh] md:h-[52vh] lg:h-[70vh] md:pl-8 flex flex-col items-start justify-between text-black p-4">
          {/* Logo */}
          <img className="w-[25%] " src="/src/assets/logo/Logo.svg" alt="Logo" />
          {/* Heading */}
          <h1 className="w-full leading-10 font-poppins font-bold text-[40px] md:text-[50px] md:leading-20 lg:text-[60px] lg:leading-20 lg:w-[70%]desktop1024:leading-10">
            Smarter Deals for Modern Living
          </h1>

          {/* Waiting List Form */}
          <div className="w-full" >
           <WaitingList />
          </div>
        </div>



        {/* Right Section */}
        <div className="w-full flex items-center justify-center mt-4 md:mt-2 md:px-2">
  {/* Image for xl screens */}
  <img
    src="/src/assets/images/waiting-list-bigscreen.png"
    alt="Waiting List - Big Screen"
    className="hidden xl:block max-w-full w-[95%] md:h-[68vh]"
  />

  {/* Image for md and small screens */}
  <img
    src="/src/assets/images/waiting-list.png"
    alt="Waiting List - Small Screen"
    className="block xl:hidden md:hidden max-w-full w-[95%] md:h-[68vh]"
  />


<img
    src="/src/assets/images/waiting-list-tablet.png"
    alt="Waiting List - Small Screen"
    className="hidden md:block xl:hidden max-w-full w-[95%] md:h-[68vh]"
  />
</div>
      </div>

<div className=" w-[98%] md-w-[100%] h-auto md:h-[29vh] xl:h-[25vh] md:ml-4 bg-gradient-to-t from-white to-white/0 rounded-[40px] px-2" >
<OurOffer />

</div>




  
    </div>
  );
};

export default Home;
