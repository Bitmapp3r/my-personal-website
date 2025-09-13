import { useEffect } from "react";

interface ProjectPopUpBoxProps {
  isOpen: boolean;
  onClickStateChangeFunction: () => void;
  children?: React.ReactNode;
}

export default function ProjectPopUpBox({
  isOpen,
  onClickStateChangeFunction,
  children,
}: ProjectPopUpBoxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // This cleanup is still needed as an external thing might unmount this
    // component without changing isOpen to false first.
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClickStateChangeFunction}
      className="fixed flex justify-center items-center top-0 h-screen w-screen bg-[#000000b6] z-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-md w-[90vw] bg-white p-6 rounded-lg shadow-lg relative"
      >
        <button
          onClick={onClickStateChangeFunction}
          className="cursor-pointer absolute top-1 right-3 text-gray-600 hover:text-gray-800 text-lg"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
