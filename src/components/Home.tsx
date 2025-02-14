import React, { useState, useEffect } from "react";
import OurOffer from "./OurOffer";
import WaitingList from "./WaitingList";

const Home: React.FC = () => {
  // Array of text options
  const textOptions = [
    "Smart Property Deals, Zero Hidden Fees 🏡",
    "List smarter, not harder 📈",
    "Close Deals Faster, Grow Stronger 🤝",
    "Why pay 6% when you can pay 2.5%? Do the math. 🧮",
    "Start Your Journey with Confidence 🚀",
  ];

  // State to hold the current text and index
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Function to update the text
    const updateText = () => {
      // Start fade-out animation
      setIsAnimating(true);

      // After fade-out, change text
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % textOptions.length;
        setCurrentText(textOptions[nextIndex]);
        setCurrentIndex(nextIndex);

        // Start fade-in animation
        setIsAnimating(false);
      }, 500); // Match this with your CSS transition duration
    };

    // Set up interval to update text every 3 seconds
    const intervalId = setInterval(updateText, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, textOptions]);

  return (
    <div className="w-screen min-h-screen bg-custom-bg bg-cover bg-center relative">
      {/* Content Section */}
      <div className="w-full h-auto flex flex-col md:flex-col lg:flex-row justify-between items-start px-2 py-4">
        {/* Left Section */}
        <div className="w-full h-[55vh] md:h-[52vh] lg:h-[70vh] md:pl-8 flex flex-col items-start justify-between text-black p-4">
          {/* Logo */}
          <img className="w-[25%]" src="/src/assets/logo/Logo.svg" alt="Logo" />
          
          {/* Heading with transition effect */}
          <h1 
            className={`
              w-full leading-10 font-poppins font-bold 
              text-[40px] md:text-[50px] md:leading-20 
              lg:text-[50px] lg:leading-15 lg:w-[70%] 
              desktop1024:leading-10
              transition-opacity duration-500 ease-in-out
              ${isAnimating ? 'opacity-0' : 'opacity-100'}
            `}
          >
            {currentText}
          </h1>
          
          {/* Waiting List Form */}
          <div className="w-full">
            <WaitingList />
          </div>
        </div>

        {/* Rest of the component remains the same as your original code */}
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
      <div className="w-[98%] md:w-[100%] h-auto md:h-[29vh] xl:h-[25vh] md:ml-4 bg-gradient-to-t from-white to-white/0 rounded-[40px] px-2">
        <OurOffer />
      </div>
    </div>
  );
};

export default Home;
// 
// 
// 
// import React from "react";
// import OurOffer from "./OurOffer";
// import WaitingList from "./WaitingList"




// const Home: React.FC = () => {
//   return (
//     <div className="w-screen min-h-screen bg-custom-bg bg-cover bg-center relative">

//       {/* Content Section */}
//       <div className="w-full h-auto flex flex-col md:flex-col lg:flex-row justify-between items-start px-2 py-4">

//         {/* Left Section */}
//         <div className="w-full h-[55vh] md:h-[52vh] lg:h-[70vh] md:pl-8 flex flex-col items-start justify-between text-black p-4">
//           {/* Logo */}
//           <img className="w-[25%] " src="/src/assets/logo/Logo.svg" alt="Logo" />
//           {/* Heading */}
//           <h1 className="w-full leading-10 font-poppins font-bold text-[40px] md:text-[50px] md:leading-20 lg:text-[60px] lg:leading-20 lg:w-[70%]desktop1024:leading-10">
//             Smarter Deals for Modern Living
//           </h1>

//           {/* Waiting List Form */}
//           <div className="w-full" >
//            <WaitingList />
//           </div>
//         </div>



//         {/* Right Section */}
//         <div className="w-full flex items-center justify-center mt-4 md:mt-2 md:px-2">
//   {/* Image for xl screens */}
//   <img
//     src="/src/assets/images/waiting-list-bigscreen.png"
//     alt="Waiting List - Big Screen"
//     className="hidden xl:block max-w-full w-[95%] md:h-[68vh]"
//   />

//   {/* Image for md and small screens */}
//   <img
//     src="/src/assets/images/waiting-list.png"
//     alt="Waiting List - Small Screen"
//     className="block xl:hidden md:hidden max-w-full w-[95%] md:h-[68vh]"
//   />


// <img
//     src="/src/assets/images/waiting-list-tablet.png"
//     alt="Waiting List - Small Screen"
//     className="hidden md:block xl:hidden max-w-full w-[95%] md:h-[68vh]"
//   />
// </div>
//       </div>

// <div className=" w-[98%] md-w-[100%] h-auto md:h-[29vh] xl:h-[25vh] md:ml-4 bg-gradient-to-t from-white to-white/0 rounded-[40px] px-2" >
// <OurOffer />

// </div>




  
//     </div>
//   );
// };

// export default Home;
