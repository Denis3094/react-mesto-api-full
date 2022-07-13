import { useEffect } from "react";

const useCloseEscape = (isOpen, closeAllPopups) => {
  useEffect(() => {
    function handleEscClick(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    if (isOpen) document.addEventListener("keydown", handleEscClick);

    return () => document.removeEventListener("keydown", handleEscClick);
  },[isOpen, closeAllPopups]);
};

export default useCloseEscape;
