import React from "react";

const Home: React.FC = () => {
  return (
    <div className=" w-screen h-screen bg-custom-bg bg-cover bg-center">
      {/* Content Section */}
      <div className="absolute w-[50%] h-[60%] flex flex-col items-center justify-between text-black font-poppins">
         <div>
<img src="logo" alt="" />
         </div>
<div>
    <h1>Smarter Deals for Modern Living</h1>
</div>
<div className="h-[15vh] flex flex-col items-center justify-between w-full mb-4">
    <h3>Join out waitinglist</h3>
          <input
            className="w-[70%] md:w-[38%] mb-8 p-2 border-2 rounded-md focus:border-purple-500"
            type="email"
            placeholder="Enter email"
           
           
          />
          <button
            className="rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 px-16 md:px-16 drop-shadow-xl md:mb-16"
           
          >
            Notify me
          </button>
        </div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-[10px] right-[10px] left-[10px] h-[400px] rounded-[40px] bg-gradient-to-t from-white to-white/0"></div>
      
    </div>
  );
};

export default Home;
