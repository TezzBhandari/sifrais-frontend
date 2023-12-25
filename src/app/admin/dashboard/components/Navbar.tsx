import Image from "next/image";
import { MdNotifications } from "react-icons/md";
// import logo from "../../../../../public/assets/Mofa_SVG.svg";
import Search from "./Search";

const Navbar = () => {
  return (
    <header className="header h-[6rem] fixed top-0 left-0 z-50 w-full border-[3px] border-emerald-500 bg-white shadow-md overflow-hidden">
      {/* header-container responsive */}
      <div className="nav-content flex w-full h-full  ">
        {/* first column just for logo */}
        <div className="Logo-Section border-[3px] border-red-400 flex items-center justify-center gap-x-3">
          {/* <Image
            src={logo}
            className="w-16 h-16 border-red-500"
            alt="Mofaga Image"
          /> */}
          <div className="flex flex-col justify-center space-y-1">
            <p className="text-[12px] text-red-600">ई-सिफारिस प्रणाली</p>
            <p className="font-semibold text-sm text-red-600">
              वेनी नगरपालिका, नगर कार्यपालिकाको कार्यालय
            </p>
            <p className="font-semibold text-sm text-blue-600">
              बेनी बजार, म्याग्दी
            </p>
          </div>
        </div>

        {/* second column just for search bar */}
        <div className="Search-Bar-Section flex w-full h-full items-center justify-center border-[3px] border-blue-400">
          {/* grow-[2] shrink */}
          <div className="Search-bar-wrapper">
            <Search />
          </div>
        </div>
        {/* third column for notifications and profile */}
        <div className="Profile-Section border-[3px] border-yellow-500 flex items-center justify-center">
          {/* grow matra */}
          <MdNotifications className="text-3xl mt-3" />
          <p>hello image</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
