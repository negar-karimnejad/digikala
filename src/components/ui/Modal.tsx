import { ReactNode, useEffect } from "react";

function Modal({
  children,
  isOpen,
  centered = true,
  isStory,
  closeModalHandler,
}: {
  children: ReactNode;
  isOpen: boolean;
  centered?: boolean;
  isStory?: boolean;
  closeModalHandler: () => void;
}) {
  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500 ${
        centered ? "justify-end min-[600px]:justify-center" : "py-20"
      } ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-hidden max-sm:fixed bottom-0 right-0 w-full rounded-lg bg-white px-5 shadow transition-all duration-500 dark:text-white
         ${
           centered
             ? "dark:bg-neutral-800 min-[600px]:w-[500px]"
             : "dark:bg-neutral-800 min-[600px]:w-[750px]"
         } ${
          isStory
            ? "!overflow-visible !bg-black/50 min-[600px]:w-[400px] !h-[35rem] !max-sm:h-screen"
            : ""
        } ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
