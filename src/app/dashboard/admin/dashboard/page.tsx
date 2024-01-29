'use client'
import { DropdownMenu } from "@/components/DropdownMenu";
import SelectForm from "@/components/SelectForm";
import { ReactNode } from "react";

let x = [1, 2, 3, 5, 5, 5, 555, 5, 5, 55, 5, 5, 555, 5, 5, 55];

const page = () => {
  const links = [
    { id: 1, disabled: true, href: '/account-settings', label: 'Account settings' },
    { id: 1, disabled: false, href: '/support', label: 'Support' },
    { id: 1, disabled: false, href: '/license', label: 'License' },
    { id: 1, disabled: false, href: '/sign-out', label: 'Sign out' },
  ]
  return (
    <div className="px-3 py-2">
      <DropdownMenu buttonContent={function (isOpen: boolean): ReactNode {
        return <span>drop {isOpen ? "d" : "r"}</span>
      }} dropMenuLinks={links} />
      {/* <SelectForm /> */}
      {/* {x.map((i, v) => {
        return (
          <h1 className="h-14 w-full" key={v}>
            {i}
          </h1>
        );
      })} */}
    </div>
  );
};

export default page;
