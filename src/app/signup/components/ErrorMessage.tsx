import React from "react";
import { MdError } from "react-icons/md";

export type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className=" border flex-wrap overflow-hidden flex text-sm items-center gap-1 text-[#d93025]">
      <span className="">
        <MdError />
      </span>
      <span className="">{message}</span>
    </p>
  );
};

export default ErrorMessage;
