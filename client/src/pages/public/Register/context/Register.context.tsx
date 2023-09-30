import { createContext, useContext } from "react";
import {
  IRegisterContext,
  emptyRegisterContext,
} from "./empty-register-context";
import { ChildrenType } from "@/models";

const RegisterContext = createContext<IRegisterContext>(emptyRegisterContext);

export const RegisterProvider = ({ children }: ChildrenType) => {
  const values = {};

  return (
    <RegisterContext.Provider value={{ values }}>
      {children}
    </RegisterContext.Provider>
  );
};


export const useRegisterContext = () => {
  const context = useContext(RegisterContext)

    if (!context) {
      throw new Error(
        "useRegisterContext can only be used inside RegisterProvider"
      );
    }

    return context;
}