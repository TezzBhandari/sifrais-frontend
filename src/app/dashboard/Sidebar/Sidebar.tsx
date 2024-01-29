// SideBar.tsx
"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import SideSifaris from "./Components/SideSifaris";
import { sidebarDashboard, sidebarElements } from "./sidebarData";
import ArrowUpDown from "./Components/ArrowUpDown";
import SideDashboard from "./Components/SideDashboard";
import SideEmployee from "./Components/SideEmployee";
import useSidebarToggle from "../store/store"
import { DropdownMenu } from "@/components/DropdownMenu";
import MMenu from "@/components/SystemCofigurationMenu";
import DashboardMenu from "@/components/DashboardMenu";

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
  const [isArrowDown, setArrowDown] = useState(false);

  //Changing the arrow of icon in the subtitle.
  const [clickedArrow, setClickedArrow] = useState(0);

  //Changing the state on sidebar on Click.
  const handleBurger = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`text-white min-h-screen ${styles.sidebarMain}`}
      style={{ width: `${isSidebarOpen ? "6%" : "22%"}` }}
    >
      <div className="p-4">
        <div className="flex justify-end">
          <button onClick={handleBurger}>
            {" "}
            <Image
              src={`/assets/icons/sidebar/${isSidebarOpen ? "arrowright" : "arrowleft"
                }.svg`}
              width={12}
              height={12}
              alt="Arrow"
              className={styles.sidebararrow}
            />{" "}
          </button>
        </div>
        <div className="sidebarelements" style={{ marginTop: "10px" }}>
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
          <DashboardMenu />
          <MMenu />
          {/* {
            sidebarElements.map((sidebarElement, index) => {
              return <React.Fragment key={sidebarElement.id}>
                <div className="">
                  <div
                  >

                    <DropdownMenu buttonContent={(isOpen: boolean) => {
                      return <Image
                        src={sidebarElement.icon}
                        width={24}
                        height={24}
                        alt={sidebarElement.name}
                        className={styles.sidebaricon}
                      />
                    }} dropMenuLinks={sidebarElement.dropDownLinks} />
                  </div>
                </div>
              </React.Fragment>
            })
          } */}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
