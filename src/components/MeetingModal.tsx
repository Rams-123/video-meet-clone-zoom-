"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className={
              "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;

// import React, { ReactNode } from "react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { Button } from "./ui/button";

// interface MeetingModalProps {
//   title: string;
//   isOpen: boolean;
//   onClose: () => void;
//   className?: string;
//   children?: ReactNode;
//   image?: string;
//   buttonText?: string;
//   buttonIcon?: string;
//   instantMeeting?: boolean;
//   buttonClassName?: string;
//   handleClick?: () => void;
// }

// const MeetingModal = ({
//   isOpen,
//   onClose,
//   title,
//   className,
//   image,
//   buttonText,
//   instantMeeting,
//   handleClick,
//   buttonIcon,
//   children,
// }: MeetingModalProps) => {
//   return (
//     // <Dialog open={!isOpen} onOpenChange={onClose}>
//     <Dialog onOpenChange={onClose}>
//       <DialogTrigger>open</DialogTrigger>
//       <DialogContent className="flex flex-col w-full max-w-[520px] gap-6 border-noen bg-dark-1 px-6 py-9 text-white">
//         <div className="flex flex-col gap-6">
//           {image && (
//             <div className="flex justify-center">
//               <Image src={image} width={72} height={72} alt="head-img" />
//             </div>
//           )}
//           <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
//             {title}
//           </h1>
//           {children}
//           <Button
//             className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
//             onClick={handleClick}
//           >
//             {buttonIcon && (
//               <Image src={buttonIcon} alt="buttonIcon" width={13} height={13} />
//             )}
//             &nbsp;
//             {buttonText || "Schedule Meeting"}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default MeetingModal;
