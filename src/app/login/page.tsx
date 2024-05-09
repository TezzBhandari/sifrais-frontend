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
import { Login } from "./action";

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

  // OTP FORM'S SUBMIT HANDLER
  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()


    // calling server actions
    const response = await Login({ username: formData.username as string, password: formData.password as string });
    // just for debugging
    alert(JSON.stringify(response));

    if (response.code === "success" && response.statusCode === 200) {
      // SAVING ACCESS TOKEN IN MEMORY; (Zustand)
      // setAccessToken(response.data.access_token);

      // STORING REFRESH TOKEN IN LOCAL STORAGE FOR REFRESHING ACCESS TOKEN
      // parsing refresh token in json format to store in local storage
      // const refreshTokenInJsonFormat = JSON.stringify(
      //   response.data.refresh_token
      // );
      // const accessTokenInJsonFormat = JSON.stringify(
      //   response.data.access_token
      // );
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      // toast.success("login Successful", {
      //   position: toast.POSITION.TOP_CENTER,
      // });

      // revoking user_id which is just needed for verifying otp
      // removes it from in memory store; (Zustand)
      // revokeUserId();
      // redirecting user to dashboard page
      // todo: hard push so that user can't return back to otp page
      router.push("/dashboard");
      return;
    }

    // handling errors
    if (response.code === "error") {
      // Case: User not authorized; could be invalid otp
      toast.error("invalid credentials", { position: toast.POSITION.TOP_CENTER })

      // if (response.statusCode && response.statusCode === 401) {
      //   const errorMessage = response.error?.message
      //     ? response.error.message
      //     : response.errorMessage;
      //   toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
      // } else {
      //   toast.error(response.errorMessage, {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      // }
    }
  };


  // const handleLogin = () => {
  //   const fetchLoginReq = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/api/login`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           username: formData.username,
  //           password: formData.password,
  //         }),
  //       });

  //       if (!response.ok) {
  //         toast.error("Username or Password didn't match.");
  //       }

  //       const data = await response.json();
  //       //Passing the loggedIN data received from the server to userLogin function to loginAuth.ts file to store in Zustand.
  //       if (data.message == "Success" && data.status == 200) {
  //         userLogin(data);
  //         localStorage.setItem("accessToken", data?.access_token);
  //         localStorage.setItem("refreshToken", data?.refresh_token)
  //         router.push("/dashboard");
  //       }
  //     } catch (error) {
  //       // Handle network errors or other exceptions
  //       toast.error("Username or Password didn't match.");
  //     }
  //   };
  //   fetchLoginReq();
  // };

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
                    <button
                      className="py-2 px-3 rounded-md text-white  bg-blue-950"
                      type="submit"
                      onClick={handleLogin}
                    >साइन इन</button>
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
