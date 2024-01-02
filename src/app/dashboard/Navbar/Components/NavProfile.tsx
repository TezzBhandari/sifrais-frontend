"use client";
import React from "react";
import styles from "./Navcomponents.module.css";
import Image from "next/image";

const NavProfile = () => {
  return (
    <div className={styles.navprofile}>
      <div className="flex flex-row ml-3">
        <Image
          className={styles.navbaralert}
          src="/assets/icons/navbar/alert.svg"
          width={18}
          height={18}
          alt="notifications"
        />
        <div
          className={`flex items-center justify-center text-white-900 ${styles.alertvalue} `}
        >
          4
        </div>
        <div
          className="flex flex-row items-center ml-7"
          style={{ padding: "2px" }}
        >
          <div>
            <Image
              src="/assets/icons/navbar/fakeuser.jpeg"
              width={50}
              height={50}
              alt="user"
              className={styles.userimage}
            />
          </div>
          <div className={`mx-3 ${styles.navuserdetails}`}>
            <p>User name</p>
            <p className="font-medium">Designation</p>
          </div>
          <button onClick={() => alert("Logout garney ho?")}>
            <Image
              src="/assets/icons/navbar/arrowdown.svg"
              width={12}
              height={12}
              alt="down"
              className="mr-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
