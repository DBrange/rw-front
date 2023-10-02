import React, { createContext, useContext, useEffect, useState } from "react";
import { ILoginContext, emptyLoginContext } from "./empty-login-context";
import { ChangeEventType, SubmitEventType } from "../../Inspect";
import { InputValues, TouchedInputValues, validateLogin } from "..";

const LoginContext = createContext<ILoginContext>(emptyLoginContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const LoginProvider = ({ children }: ChildrenType) => {
  
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
  });

  const [errorValues, setErrorValues] = useState<
    Partial<InputValues> | undefined
  >();

  const [touchedValues, setTouchedValues] = useState<TouchedInputValues>({
    email: false,
    password: false,
  });

  const loginData = (e: ChangeEventType) => {
    const { value, name } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });

    setErrorValues(
      validateLogin({
        ...inputValues,
        [name]: value,
      })
    );

    setTouchedValues({
      ...touchedValues,
      [name]: true,
    });
  };

  useEffect(() => {
    setErrorValues(
      validateLogin({
        ...inputValues,
      })
    );
  }, []);

  const submitData = (e: SubmitEventType) => {
    e.preventDefault();
    setTouchedValues({
      email: true,
      password: true,
    });
  };

  const values = {
    loginData,
    submitData,
    inputValues,
    setInputValues,
    errorValues,
    touchedValues,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("useLoginContext can only be used inside LoginProvider");
  }

  return context;
};
