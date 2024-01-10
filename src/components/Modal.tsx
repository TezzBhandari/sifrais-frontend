// "use client";
// import { cn } from "@/lib/utils/classnames";
// import React from "react";
// import ReactDom from "react-dom";

// export interface ModalProps
//   extends React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLDivElement>,
//     HTMLDivElement
//   > {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
//   ({ isOpen, onClose, className, children, ...props }, ref) => {
//     if (isOpen === false) {
//       return null;
//     }
//     return ReactDom.createPortal(
//       <>
//         <div
//           ref={ref}
//           {...props}
//           onBlur={() => onClose()}
//           className={cn(
//             "bg-white rounded-lg shadow-lg fixed top-2/4 left-2/4 translate-y-2/4 translate-x-2/4 p-4",
//             className,
//             "z-[1000]"
//           )}
//         >
//           <div
//             onClick={() => onClose}
//             onBlur={() => onClose}
//             className="overlay fixed inset-0 bg-black opacity-40 z-[1000]"
//           />
//           {children}
//         </div>
//       </>,
//       document.getElementById("portal") as HTMLElement
//     );
//   }
// );

// Modal.displayName = "Modal";

// export { Modal };

import React from "react";

const Modal = () => {
  return <div>Modal</div>;
};

export default Modal;
