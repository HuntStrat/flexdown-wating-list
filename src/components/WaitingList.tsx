import React, {useState} from "react";



const WaitingList: React.FC = () => {
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(true);
    const [showError, setShowError] = useState(false); 



    const handleSubmit = async () => {
        if (email) {
          try {
            const response = await fetch(
            "https://lockedin-flexdown.fly.dev/api/v1/user/waiting-list",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              },
            );
            if (response.ok) {
           
              setShowSuccess(true);
              setShowError(false); 
          
            } else {
           
              setShowError(true);
            }
          } catch (error) {
            console.error("Error submitting the form:", error);
            setShowError(true); 
          }
        }
      };
    return (
<div className="w-full h-[25vh] lg:h-[28vh] flex flex-col items-center justify-between rounded-[30px] bg-blur-white shadow-list-shadow 
border-[1px] border-transparent relative p-4 ">

<h3 className="font-semibold text-xl text-center lg:text-3xl lg:p-4">Join our waitlist</h3>

<div className=" w-full h-[15vh] font-poppins flex flex-col justify-between items-center lg:flex-row lg:items-center lg:justify-between lg:h-[15vh]">
    <input
     className="w-full p-4 lg:p-8 h-[60px] lg:h-[80px] rounded-[200px] border-2 text-l lg:text-[20px] border-border-gray"
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button
      className="w-full h-[60px] lg:w-[180px] lg:h-[80px] mt-4 lg:mt-12 lg:absolute lg:top-1/2 lg:right-2 lg:transform lg:-translate-y-1/2 rounded-[100px] lg:rounded-[200px] bg-black text-white text-l lg:text-xl border border-black drop-shadow-xl"
      onClick={handleSubmit}
    >
      Notify me
    </button>
  </div>

             {/* Success Popup */}
             {showSuccess && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="flex flex-col justify-between items-center h-[70vh] w-[90%] bg-white p-8 rounded-lg shadow-lg text-center font-poppins relative">
      {/* Close button in top-right corner */}
      <button
        className="absolute top-4 right-4 text-2xl font-bold text-light-black"
        onClick={() => setShowSuccess(false)}
      >
        X
      </button>

      <img className="w-[50%]" src="/src/assets/images/LogoPopUp.svg" alt="" />

      <h1 className="text-2xl font-bold text-light-black">
        You are on our list!
      </h1>

      <h3 className="font-bold text-xl text-light-black p-4">Thank you! 🥳 </h3>

      <span className="text-light-gray text-xl w-[65%] ">
        Keep an eye on your email – you'll be among the first to get updates and exclusive perks!
      </span>
      <button
        className="mt-4 px-8 py-4 bg-white text-light-black font-bold rounded-[200px] border-2 border-light-black hover:bg-opacity-90"
        onClick={() => setShowSuccess(false)}
      >
        Got it
      </button>
    </div>
  </div>
)}


      {/* Error Message */}
      {showError && (
        <div className="mt-8 text-red-500 font-lexend font-bold">
          There was an error joining the waiting list. Please try again.
        </div>
      )}
    </div>
  );
};

export default WaitingList