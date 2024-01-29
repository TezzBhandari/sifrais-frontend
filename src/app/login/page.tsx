"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import styles from "./components/Login.module.css";
import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";
import FormBanner from "./components/FormBanner/FormBanner";
import Link from "next/link";
import {
  userLoginStore,
  userEmailCheck,
} from "./components/authFile/loginAuth";
import { toast } from "react-toastify";
import { GoArrowRight } from "react-icons/go";
import { IFormData } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const page = () => {
  const router = useRouter();

  const { userLogin } = userLoginStore();
  const { email, emailCheck } = userEmailCheck();

  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  const handleUsername = () => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/checkuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
          }),
        });

        if (!response.ok) {
          toast.error("Username doesn't exist.");
        }
        const data = await response.json();

        //Check the Login Status
        if (data.email && data.status == 200) {
          emailCheck({ email: data.email });
        }
      } catch (error) {
        // Handle network errors or other exceptions
        toast.error("Username doesn't exist.");
      }
    };

    if (!formData.username) {
      toast.error("Please input the email field.");
    } else {
      fetchUsername();
    }
  };

  const handleLogin = () => {
    const fetchLoginReq = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          toast.error("Username or Password didn't match.");
        }

        const data = await response.json();
        //Passing the loggedIN data received from the server to userLogin function to loginAuth.ts file to store in Zustand.
        if (data.message == "Success" && data.status == 200) {
          userLogin(data);
          localStorage.setItem("accessToken", data?.access_token);
          localStorage.setItem("refreshToken", data?.refresh_token)
          router.push("/dashboard");
        }
      } catch (error) {
        // Handle network errors or other exceptions
        toast.error("Username or Password didn't match.");
      }
    };
    fetchLoginReq();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className="flex justify-center"
        style={{ height: "800px", alignItems: "center" }}
      >
        <div
          className={styles.loginContainer}
          style={{ alignItems: "center", flexDirection: "column" }}
        >
          {/* Title and District Name here */}
          <div className={styles.formBox}>
            <div className={styles.formStyles}>
              {!email ? (
                <>
                  <FormBanner />
                  <div style={{ marginTop: "50px" }}></div>
                  <p className="label-text">प्रयोगकर्ताको ईमेल</p>

                  <InputField
                    onChange={handleInputChange}
                    type="text"
                    name="username"
                    placeholder="ईमेल"
                    value={formData.username}
                    className="my-3  rounded-sm p-1"
                  />
                  <Link className="link-blue" href="forgotemail">
                    प्रयोगकर्ता ईमेल बिर्सनुभयो ?
                  </Link>
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex flex-row items-center">
                      <Link
                        style={{ fontSize: "12px" }}
                        className="link-grey"
                        href="/createaccount"
                      >
                        नया खाता खोल्नुहोस{" "}
                      </Link>
                      <GoArrowRight size="12px" />
                    </div>
                    <Button
                      onClick={handleUsername}
                      buttonName="अर्को"
                      className="btn"
                    />
                  </div>
                </>
              ) : (
                <>
                  <FormBanner />
                  <div style={{ marginTop: "25px" }}></div>
                  <p className="label-text">प्रयोगकर्ताको पासवर्ड</p>
                  <InputField
                    placeholder="पासवर्ड"
                    onChange={handleInputChange}
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    className="my-3  rounded-sm p-1"
                  />
                  <Link className="link-blue" href="/forgotpassword">
                    प्रयोगकर्ता पासवर्ड बिर्सनुभयो ?
                  </Link>
                  <div className="flex justify-between mt-5 items-center">
                    <Link
                      href="/createaccount"
                      className="link-grey"
                      style={{ fontSize: "12px" }}
                    >
                      नया खाता खोल्नुहोस
                    </Link>
                    <Button
                      onClick={handleLogin}
                      buttonName="साइन इन"
                      className="btn"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
