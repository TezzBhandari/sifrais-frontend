'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, HtmlHTMLAttributes, useState } from 'react'
import { cn } from '@/lib/utils/classnames';

import DotIcon from "@/../public/assets/logo/DotIcon.svg"

interface DropDownLink {
  id: string | number;
  href: string; // unique
  label: string;
  disabled: boolean;
}

interface DropdownMenuProps extends HtmlHTMLAttributes<HTMLDivElement> {
  buttonContent: (isOpen: boolean) => React.ReactNode
  dropMenuLinks: Array<DropDownLink>
}

interface SubMenuProps extends HtmlHTMLAttributes<HTMLDivElement> {
  dropMenuLinks: Array<DropDownLink>
}

const SubMenu = React.forwardRef<HTMLDivElement, SubMenuProps>(({ dropMenuLinks, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full rounded-[10px] px-2 py-1 mt-1 origin-top-right bg-[#D9D9D914] opacity-80 flex flex-col ring-1 ring-black/5 focus:outline-none", className)} {...props}>
      {dropMenuLinks.map((link) => {
        return <button key={link.id} className='w-full flex items-center justify-between' disabled={link.disabled}>
          <Link
            href={link.href}
            className={`${link.disabled ? "opacity-75" : ""} group text-white flex w-full items-center gap-6 rounded-md px-3 py-2 text-sm hover:bg-blue-950 hover:opacity-100 hover:text-white `}
          >
            <span><Image src={DotIcon} alt={'dot icon'} /></span>
            <span className='capitalize'>{link.label}</span>
          </Link>
        </button>
      })}

    </div>)
})

SubMenu.displayName = "SubMenu"


// DROP DOWN MENU
const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(({ className, buttonContent, dropMenuLinks, ...props }, ref) => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }


  return (
    <div className={cn("relative w-full", className)} {...props} ref={ref}>
      <button onClick={() => {
        toggle()
      }} className=" w-full bg-transparent border-none outline-none focus:border-none focus:outline-none" >
        {buttonContent(isOpen)}
      </button>
      <div className="transition-all duration-150 ease-in-out w-full bg-transparent">
        {
          isOpen && dropMenuLinks.length > 0 ? <SubMenu dropMenuLinks={dropMenuLinks} /> : null
        }
      </div>
    </div>
  )
})

DropdownMenu.displayName = "DropDownMenu"

export type { DropdownMenuProps }
export { DropdownMenu } 