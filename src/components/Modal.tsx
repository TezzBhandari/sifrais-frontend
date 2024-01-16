"use client";
import { cn } from "@/lib/utils/classnames";
import { Transition } from "@headlessui/react";
import React from "react";
import ReactDom from "react-dom";

export interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, className, children, ...props }, ref) => {
    if (isOpen === false) {
      return null;
    }

    return ReactDom.createPortal(
      <>
        <Transition appear show={isOpen} as={React.Fragment}>
          {/* BACKDROP OVERLAY  */}
          <div className="w-full">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="overlay fixed inset-0 bg-black/30" />
            </Transition.Child>
            {/* Modal  */}
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                ref={ref}
                {...props}
                onBlur={() => onClose()}
                className={cn(
                  "bg-white w-full rounded-lg shadow-lg fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 p-4",
                  className,
                  "z-[1000]"
                )}
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </>,
      document.getElementById("portal") as HTMLElement
    );
  }
);

Modal.displayName = "Modal";

export { Modal };
