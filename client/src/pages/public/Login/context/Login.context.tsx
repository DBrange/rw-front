import { PrivateRoutes } from "@/models/types/routes";
import { addClient, clientKey, cookieKey } from "@/redux/slices/clientSlice";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import {
  InputValues,
  TouchedInputValues,
  loginClient,
  loginGoogleUrl,
  loginUrl,
  validateLogin,
} from "..";
import { ChangeEventType, SubmitEventType } from "../../Inspect";
import { ILoginContext, emptyLoginContext } from "./empty-login-context";
import { clearLocalStorage } from "@/utilities";
import { ClientInfo } from "@/models";
import useSWR from "swr";
import { loginGoogle } from '../services/getClient.service';
import Cookies from "js-cookie";

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

  useEffect(() => {
    clearLocalStorage(clientKey);
  }, [])

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

  // const { googleLoginData } = useParams();
  
  useEffect(() => {
    if (data) {
      dispatch(addClient(data));
      navigate(`/${PrivateRoutes.PRIVATE}`);
    }
  }, [data]);

  useEffect(() => {
    if (Cookies.get(cookieKey)) {
      const data: ClientInfo = JSON.parse(Cookies.get(cookieKey) as string);
      
      if (data.accessToken) {
        dispatch(addClient(data));
        navigate(`/${PrivateRoutes.PRIVATE}`);
      }
    }
    // if (googleLoginData) {
    //   dispatch(addClient(googleLoginData as unknown as ClientInfo));
    //   navigate(`/${PrivateRoutes.PRIVATE}`);
    // }
  }, [Cookies.get(cookieKey)]);

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
