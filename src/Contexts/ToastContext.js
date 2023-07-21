// IMPORT CHAKRA UI
import { useToast } from "@chakra-ui/react";

// HOOKS
import { createContext, useContext } from "react";
const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const toastThatShowing = useToast();

  const customizeToast = (toastTitle, tostStatus) => {
    return toastThatShowing({
      title: toastTitle,
      status: tostStatus,
      variant: "top-accent",
      isClosable: true,
      position: "top",
      duration: 3000,
    });
  };

  return (
    <>
      <ToastContext.Provider value={{ customizeToast }}>
        {children}
      </ToastContext.Provider>
    </>
  );
};

export const useMyToast = () => {
  return useContext(ToastContext);
};
