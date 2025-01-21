import React, {useState} from "react";



const WaitingList: React.FC = () => {
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false); 



    const handleSubmit = async () => {
        if (email) {
          try {
            const response = await fetch(
              "https://flexdown.fly.dev/api/v1/man/user/pub",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              },
            );
            if (response.ok) {
              // Show success message
              setShowSuccess(true);
              setShowError(false); // Clear error if any
          
            } else {
              // If the response is not OK, show an error message
              setShowError(true);
            }
          } catch (error) {
            console.error("Error submitting the form:", error);
            setShowError(true); // Show error message if there's a network error
          }
        }
      };
    return (
<div className="w-full h-[25vh] flex flex-col items-center justify-between 
            p-10 rounded-[30px] 
             bg-blur-white 
             shadow-lsit-shadow 
             border-[1px] border-transparent 
             bg-clip-padding
             relative">

<h3 className="font-semibold text-[36px] text-center">Join our waitlist</h3>

<div className="relative w-full font-poppins">
    <input
      className="h-[80px] w-full p-4 border-2 rounded-[200px] text-[20px]" 
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[200px] h-[80px] rounded-[200px] bg-black text-white text-xl border border-black drop-shadow-xl"
      onClick={handleSubmit}
    >
      Notify me
    </button>
  </div>

        {showSuccess && (
          <div className="mt-8 text-black font-lexend font-bold">
            Successfully joined the waiting list! Redirecting to signup...
          </div>
        )}
        {showError && (
          <div className="mt-8 text-red-500 font-lexend font-bold">
            There was an error joining the waiting list. Please try again.
          </div>
        )}
</div>
       
    )
}

export default WaitingList