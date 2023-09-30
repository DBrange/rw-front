import React, { createContext, useContext, useState } from "react";
import { ILoginContext, emptyLoginContext } from "./empty-login-context";
import { ChangeEventType, SubmitEventType } from "../../Inspect";
import { InputValues, TouchedInputValues } from "..";

const LoginContext = createContext<ILoginContext>(emptyLoginContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const LoginProvider = ({ children }: ChildrenType) => {
  const validateLogin = (values: InputValues) => {
    const errors: Partial<InputValues> = {};

    const regex = { email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ };

    if (!values.email?.trim().length) errors.email = "No puede estar vacio";
    if (errors.email) {
      if (!regex.email.test(errors.email))
      errors.email = "Debe tener un formato de email";
  }
  if (!values.password?.trim().length) errors.password = "No puede estar vacio";

return errors
  };
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
  });

  const [errorValues, setErrorValues] = useState<Partial<InputValues> | undefined>();

  const [touchedValues, setTouchedValues] = useState<TouchedInputValues>({
    email: false,
    password: false
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

  const submitData = (e: SubmitEventType) => {
    e.preventDefault()
    console.log();
  };

  const values = {
    loginData,
    submitData,
    inputValues,
    setInputValues,
    errorValues,
    touchedValues
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error(
      "useLoginContext can only be used inside LoginProvider"
    );
  }

  return context;
};
