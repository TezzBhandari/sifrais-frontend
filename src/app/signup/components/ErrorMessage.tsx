import React from "react";
import { MdError } from "react-icons/md";

export type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className="flex text-sm items-center gap-1 text-[#d93025] w-full">
      <span>
        <MdError />
      </span>
      {message}
    </p>
  );
};

export default ErrorMessage;
