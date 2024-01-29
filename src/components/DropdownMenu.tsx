'use client'
import { cn } from '@/lib/utils/classnames';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment, HtmlHTMLAttributes, useState } from 'react'

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


// DROP DOWN MENU
const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(({ className, buttonContent, dropMenuLinks, ...props }, ref) => {

  return (
    <Menu as="div" className={cn("relative w-full", className)} {...props} ref={ref}>
      <Menu.Button className=" w-full bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" >{({ open }) => {
        return <>{buttonContent(open)}</>
      }}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-full origin-top-right bg-white ring-1 ring-black/5 focus:outline-none">
          <div className='px-1 py-1 flex flex-col'>
            {dropMenuLinks.map((link) => {
              return <Menu.Item key={link.id} as={Fragment} disabled={link.disabled}>
                {({ active }) => (
                  <Link
                    href={link.href}
                    className={`${link.disabled ? "opacity-75" : ""} ${active ? 'bg-blue-950 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
})

DropdownMenu.displayName = "DropDownMenu"

export type { DropdownMenuProps }
export { DropdownMenu } 