import { BookText, HandCoinsIcon, UserIcon } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

const WaitList = () => {
  return (
    <div className="w-full h-full px-[0.5rem] md:px-[2rem] pt-[1rem] flex flex-col md:justify-center justify-start items-center md:gap-[2.625rem] flex-1  border border-[#F0F0F0] bg-[#F3F3F3]">
      <div className="w-full h-auto flex-col items-start md:gap-[3.875rem]  self-stretch">
        {/* upperside */}
        <div className="flex  mb-[1rem] flex-col items-start gap-[1.5rem] self-stretch ">
          <div className="w-full h-auto flex flex-row justify-start items-start ">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <div className="flex flex-col justify-center items-center gap-[1rem] self-stretch">
            <div className="flex w-full flex-col justify-center items-center gap-[2.5rem] self-stretch">
              <h1 className="text-[#161617] md:h-[8rem] h-[6rem] w-full md:w-[40.82469rem] text-center text-[2rem] md:text-[3rem] font-semibold leading-[150%] ">
                <TypeAnimation
                  sequence={[
                    "Smarter Deals for  Modern Living",
                    3000, // Waits 1s
                    "Start Your Journey with Confidence 🚀",
                    4000, // Waits 2s
                    "List smarter, not harder", //
                    5000, // Waits 2s
                    "Smart Property Deals,Zero Hidden Fees 🏡",
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  //   style={{ fontSize: "u", display: "inline-block" }}
                />
              </h1>
              <p className="text-[#727272] text-center text-[ 1.125rem] font-normal leading-[150%] ">
                Sign up for our exclusive waiting list. Stay updated on the best
                real estate deals in Ghana!
              </p>
            </div>
            <div className="flex w-full md:w-auto relative md:flex-row flex-col gap-[0.4rem] md:gap-0 items-center   ">
              <input
                className="rounded-[6.25rem] outline-none md:w-[28.4375rem]  w-full h-[2.75rem] border bg-white px-[1.5625rem] gap-[0.625rem] py-[1.525rem] "
                type="email"
                name="email"
              />
              <button
                type="submit"
                className="md:absolute w-full md:w-auto right-0  inline-flex h-[2.75rem] py-[1.50rem] px-[1.625rem] justify-center items-center text-[#EFEFF1] text-center text-[1.125rem]  leading-normal font-semibold flex-shrink-0 bg-[#242629] rounded-[6.25rem] "
              >
                Notify me
              </button>
            </div>
          </div>
        </div>

        {/* lowerside */}
        <div className="flex w-full h-full md:h-auto flex-col py-[2rem] md:px-[1.125rem] justify-start gap-[2rem] items-end self-stretch rounded-[1rem] bg-[url('/images/background.jpeg')] bg-cover bg-center ">
          <div className="flex w-full flex-row justify-start items-center md:gap-[0.75rem] self-stretch">
            <div className="flex py-[0.875rem] px-[1.5rem] flex-col justify-center rounded-[12.89431rem] bg-white/50 items-center h-[2.74669rem]">
              <p className="text-center leading-normal text-[1.125rem] text-[#222425]">
                Selling
              </p>
            </div>
            <div className="flex py-[0.875rem] px-[1.5rem] flex-col justify-center rounded-[12.89431rem] bg-white/50 items-center h-[2.74669rem]">
              <p className="text-center leading-normal text-[1.125rem] text-[#222425]">
                Buying
              </p>
            </div>
            <div className="flex py-[0.875rem] px-[1.5rem] flex-col justify-center rounded-[12.89431rem] bg-white/50 items-center h-[2.74669rem]">
              <p className="text-center leading-normal text-[1.125rem] text-[#222425]">
                Renting
              </p>
            </div>
          </div>

          <div className="w-full lg:flex  h-auto hidden flex-row justify-end items-start gap-[1.375rem]">
            <Card
              icon={<HandCoinsIcon className="w-[1.5rem] h-[1.5rem] mb-4" />}
              heading="Discounts & 
Rewards"
              divider={<img src="/images/line.svg" />}
              subHeading={
                "Turn every transaction Into savings –exclusive rewards await."
              }
            />
            <Card
              icon={<UserIcon className="w-[2rem] h-[3rem]" />}
              heading="Free Sub-Accounts for All Sides"
              divider={<img src="/images/line.svg" />}
              subHeading={
                "Efficient access to transaction details and financial management."
              }
            />
            <Card
              icon={<BookText className="w-[2rem] h-[3rem]" />}
              heading="Secure Document Management"
              divider={<img src="/images/line.svg" />}
              subHeading={
                "Store, access, and share documents with confidence, no paperwork hassles."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, heading, subHeading, divider }) => {
  return (
    <div className="flex flex-col p-[0.75rem] items-start rounded-[0.5rem] bg-white/85 gap-[0.75rem] h-[13.62rem]  w-[16.1875rem]">
      {icon}
      <h3 className="text-[#312F33] font-semibold leading-normal text-[1.25rem]">
        {heading}
      </h3>
      {divider}
      <p className="text-[#5E6063] text-[1rem] font-normal leading-normal">
        {subHeading}
      </p>
    </div>
  );
};

export default WaitList;
