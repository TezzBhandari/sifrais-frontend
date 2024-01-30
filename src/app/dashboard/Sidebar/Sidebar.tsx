// SideBar.tsx
"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import SideSifaris from "./Components/SideSifaris";
import { sidebarDashboard, sidebarElements } from "./sidebarData";
import SideDashboard from "./Components/SideDashboard";
import SideEmployee from "./Components/SideEmployee";
import useSidebarToggle from "../store/store";
import { DropdownMenu } from "@/components/DropdownMenu";
import MMenu from "@/components/SystemCofigurationMenu";
import DashboardMenu from "@/components/DashboardMenu";
import DownArrow from "@/../public/assets/logo/DownArrow.svg";

const Sidebar: React.FC = () => {
  //Importing zustand state from store file.
  const { isSidebarOpen, setSidebarOpen } = useSidebarToggle();

  //Title to be listed on the sidebar.
  const data = [
    {
      id: 1,
      name: "dashboard",
      dropDownContent: sidebarDashboard,
      component: <SideDashboard />,
    },
    // {
    //   id: 2,
    //   name: "sifaris",
    //   component: <SideSifaris />,
    // },
    // {
    //   id: 3,
    //   name: "employee",
    //   component: <SideEmployee />,
    // },
  ];

  //Implemented to check sidebar subtitle.
  // const [isArrowDown, setArrowDown] = useState(false);

  //Changing the arrow of icon in the subtitle.
  // const [clickedArrow, setClickedArrow] = useState(0);

  //Changing the state on sidebar on Click.
  const handleBurger = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`text-white min-h-screen fixed left-0 top-[90px] ${styles.sidebarMain}`}
      style={{ width: `${isSidebarOpen ? "6%" : "18%"}` }}
    >
      <div className="p-4">
        <div className="flex justify-end">
          <button onClick={handleBurger}>
            {" "}
            <Image
              src={`/assets/icons/sidebar/${
                isSidebarOpen ? "arrowright" : "arrowleft"
              }.svg`}
              width={12}
              height={12}
              alt="Arrow"
              className={styles.sidebararrow}
            />{" "}
          </button>
        </div>
        <div
          className="sidebarelements flex flex-col gap-1"
          style={{ marginTop: "10px" }}
        >
          {/* {sidebarElements.map((sideelement, idxValue) => {
            return (
              <React.Fragment key={idxValue}>
                <div className="flex flex-row justify-center">
                  <div
                    className={styles.elementBox}
                    style={{
                      backgroundColor: `${
                        isArrowDown && sideelement.id == clickedArrow
                          ? "rgba(217, 217, 217, 0.08)"
                          : ""
                      }`,
                    }}
                  >
                    <Image
                      src={sideelement.icon}
                      width={24}
                      height={24}
                      alt={sideelement.name}
                      className={styles.sidebaricon}
                    />

                    {
                      // Handles all the element of the Sidebar Header.
                      !isSidebarOpen ? (
                        <>
                          <div>
                            <ArrowUpDown
                              sideElementName={sideelement.name}
                              setArrowDown={setArrowDown}
                              setClickedArrow={setClickedArrow}
                              sideElementId={sideelement.id}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )
                    }
                  </div>
                </div>

                {isArrowDown &&
                clickedArrow == sideelement.id &&
                !isSidebarOpen ? (
                  <div className="flex justify-center">
                    <div className={`flex justify-center ${styles.sidebox}`}>
                      // {/* If arrow is down in specific Bar, checking which Component to show based on click. 
                      {data[clickedArrow - 1].component}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })} */}

          {sidebarElements.map((sidebarElement, index) => {
            return (
              <React.Fragment key={sidebarElement.id}>
                <div className="">
                  <DropdownMenu
                    buttonContent={(isOpen: boolean) => {
                      return (
                        <div
                          className={` ${
                            isOpen ? "bg-[#D9D9D914] opacity-80" : ""
                          } flex justify-between items-center px-4 py-1  text-sm rounded-[10px] font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                          <div className="flex items-center gap-4">
                            <Image
                              src={sidebarElement.icon}
                              width={24}
                              height={24}
                              alt={sidebarElement.name}
                              className={styles.sidebaricon}
                            />
                            <span
                              className={`${
                                isSidebarOpen ? "hidden" : "block"
                              }`}
                            >
                              {sidebarElement.name}
                            </span>
                          </div>
                          <span
                            className={`${
                              isOpen ? "" : "transform -rotate-90"
                            } ${isSidebarOpen ? "hidden" : "block"}`}
                          >
                            <Image
                              className="text-white font-[900]"
                              width={15}
                              height={16}
                              src={DownArrow}
                              alt={"dropdown icon"}
                              style={{ filter: "brightness(0) invert(1)" }}
                            />
                          </span>
                        </div>
                      );
                    }}
                    dropMenuLinks={
                      !isSidebarOpen ? sidebarElement.dropDownLinks : []
                    }
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
