"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GetBreadCrumb } from "@/lib/utils/breadCrumb";

const BreadCrumb = ({ delimeter }: { delimeter: React.ReactNode }) => {
  const currentPath = usePathname();

  // generates breadcrumb with it's corresponding url
  const breadCrums = GetBreadCrumb(currentPath);

  return (
    <>
      {breadCrums.map((p, idx) => {
        return (
          <React.Fragment key={p.url + idx}>
            <Link href={p.url} key={idx}>
              {p.pathLabel}
            </Link>
            {idx === breadCrums.length - 1 ? null : <span>{delimeter}</span>}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default BreadCrumb;
