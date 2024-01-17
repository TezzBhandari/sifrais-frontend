import React from "react";
import BreadCrumb from "./BreadCrumb";

export interface DynamicRouteHeaderProps {
  pageHeader: React.ReactNode;
  delimeter?: React.ReactNode;
  show?: boolean;
}

const DynamicRouteHeader = ({
  pageHeader,
  delimeter = ">",
  show = true,
}: DynamicRouteHeaderProps) => {
  return (
    <div className="flex justify-center flex-col">
      <h2 className="text-[1.75rem] leading-[2rem] text-[#1D1C2B] font-bold">
        {pageHeader}
      </h2>
      {show ? (
        <p className="text-[0.875rem] text-[#002147] font-normal  leading-[1.625rem] space-x-[0.15rem] tracking-wider">
          <BreadCrumb delimeter={delimeter} />
        </p>
      ) : null}
    </div>
  );
};

export default DynamicRouteHeader;
