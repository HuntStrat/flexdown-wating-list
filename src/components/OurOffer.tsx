import React from "react";



const OurOffer: React.FC = () => {
return(

    <div className="absolute h-[24vh] flex flex-col items-center justify-between left-[10px] bottom-[15px] right-[10px]  rounded-[40px] bg-gradient-to-t from-white to-white/0 p-4">
       <div className=" flex flex-row justify-between align-center font-poppins px-4">
       <h1 className="text-black text-3xl font-bold p-8 ">Our Offer: </h1>
      <span className="w-[45%] p-4 text-start text-xl text-light-gray leading-36 md:text-lg md:p-2">At FlexDown, precision is our promise in every property we handle. We believe that attention to detail make all the difference, weather your're buying selling or investing.</span>

       </div>



<div className="flex items-center justify-center p-2 mt-[-35px]">
<span className="mt-4 text-center text-l font-bol text-gray md:mt-0">2025 FlexDown - All rights reserved</span>
</div>
 

      </div>
      


);
};

export default OurOffer;