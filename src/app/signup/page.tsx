import Image from "next/image";

import FlagBanner from "../../../public/assets/logo/SignupFlagBanner.svg";
import SifarisLogo from "../../../public/assets/logo/SifarisLogo.svg";

import SignupForm from "./components/SignupForm";

const page = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden w-full ">
        {/* BLUE TOPBAR  */}
        <div className="blue-section h-10 bg-[#003878]" />

        {/* MAIN CONTENT OF THE PAGE  */}
        <div className="form-content h-signup-content overflow-hidden flex relative bg-white py-10 px-20">
          {/* FLAG BANNER  */}
          <Image
            className="absolute bottom-[25px] left-0 z-50"
            src={FlagBanner}
            priority
            width={620}
            height={80}
            alt={"Flag Banner"}
          />

          {/* SIGNUP CONTAINER  */}
          <div className="container flex mx-auto">
            {/* Logo Container - Left Section  */}
            <div className="logo-container flex flex-col gap-5 justify-start pt-12 items-center grow">
              <Image
                src={SifarisLogo}
                priority
                width={220}
                height={380}
                className="max-w-full"
                alt="signup logo"
              />
              <div className="logo-description flex flex-col items-center">
                <p className="text-[#E20917] text-[2.125rem] font-semibold">
                  ई - सिफरिस प्रणाली
                </p>
                <p className="flex flex-col items-center">
                  <span>बेनी नगरपालिका</span>{" "}
                  <span>नगर कार्यपालिकको कार्यालय</span>
                </p>
                <p className="text-[#002147] text-[1.125rem]">
                  बेनी बजार, म्याग्दी
                </p>
              </div>
            </div>

            {/* FORM CONTAINER - RIGHT SECTION  */}
            <div className="Form-Container flex flex-col pt-24 grow-[3]">
              {/* FORM HEADING  */}
              <div className="Form-heading-container w-full mb-9 text-center">
                <h2 className="text-[#002147] text-3xl font-semibold ">
                  खाता बनाउनुहोस
                </h2>
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
