import React, { createContext, useContext, useEffect, useState } from "react";
import { ILoginContext, emptyLoginContext } from "./empty-login-context";
import { ChangeEventType, SubmitEventType } from "../../Inspect";
import {
  InputValues,
  TouchedInputValues,
  loginClient,
  loginUrl,
  validateLogin,
} from "..";
import useSWRMutation from "swr/mutation";
import { useDispatch, useSelector } from "react-redux";
import { addClient } from "@/redux/slices/clientSlice";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/models/types/routes";
import { AppStore } from "@/redux";
import { addNotification } from "@/redux/slices/notificationSlice";
import { Notification } from "@/models";

const LoginContext = createContext<ILoginContext>(emptyLoginContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const LoginProvider = ({ children }: ChildrenType) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const [formNotFound, setFormNotFound] = useState(false);

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

  const { data, trigger, error } = useSWRMutation(loginUrl, loginClient);

  const fetchErrors = [error];

  useEffect(() => {
    for (const err in fetchErrors) {
      if (fetchErrors[err]) {
        setFormNotFound(true);
      } else {
        setFormNotFound(false);
      }
    }
  }, [...fetchErrors]);

  useEffect(() => {
    setErrorValues(
      validateLogin({
        ...inputValues,
      })
    );
  }, []);
  // const user = useSelector((store: AppStore) => store.user);

  useEffect(() => {
    if (data) {
      dispatch(addClient(data));
      // addNotification(user.user?.receivedNotifications as Notification[]);

      const client = JSON.parse(localStorage.getItem("client") as string);
      navigate(
        // client.userBroker
        // ?
        // `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.DASHBOARD}`
        // :
        `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.DASHBOARD}`
      );
    }
  }, [data]);

  const submitData = (e: SubmitEventType) => {
    e.preventDefault();
    setTouchedValues({
      email: true,
      password: true,
    });

    trigger(inputValues);
  };

  const values = {
    loginData,
    submitData,
    inputValues,
    setInputValues,
    errorValues,
    touchedValues,
    formNotFound,
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
