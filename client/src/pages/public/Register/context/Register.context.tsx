import { ChildrenType, IUserType, TouchedForms, UserActive } from "@/models";
import {
  touchedLegalPersonalValuesTrue,
  touchedPersonalValuesTrue,
  validate,
} from "@/utilities";
import { createContext, useContext, useEffect, useState } from "react";
import {
  ErrorsRegisterValues,
  RegisterValues,
  TouchedRegisterValues,
  emptyRegisterValues,
  touchedRegisterValues,
  validateRegister,
} from "..";
import {
  ChangeEventType,
  ClickEventType,
  SelectEventType,
  SubmitEventType,
} from "../../Inspect";
import {
  IRegisterContext,
  emptyRegisterContext,
} from "./empty-register-context";

const RegisterContext = createContext<IRegisterContext>(emptyRegisterContext);

export const RegisterProvider = ({ children }: ChildrenType) => {
  const [inputValues, setInputValues] =
    useState<RegisterValues>(emptyRegisterValues);

  const [inputTouched, setInputsTouched] = useState<TouchedRegisterValues>(
    touchedRegisterValues
  );

  const [errorsInputValues, setErrorsInputValues] = useState<
    Partial<ErrorsRegisterValues> | undefined
  >(undefined);

  const [userType, setUserType] = useState<IUserType>({
    client: true,
    broker: false,
  });

  const [userActive, setUserActive] = useState<UserActive>({
    personal: true,
    legalPersonal: false,
  });

  const [brokerActive, setBrokerActive] = useState<UserActive>({
    personal: true,
    legalPersonal: false,
  });

  const [page, setPage] = useState<number>(0);

  const changePage = (e: ClickEventType) => {
    const { value } = e.currentTarget;

    if (value === "next") {
      setPage(page + 1);
    } else if (value === "back") {
      if (page > 0) {
        setPage(page - 1);
      }
    }
  };

  const changeForm = (e: ClickEventType) => {
    const { value } = e.currentTarget;

    if (value === "personal" || value === "legalPersonal") {
      setUserActive({
        personal: value === "personal",
        legalPersonal: value === "legalPersonal",
      });
    } else if (value === 'client' || value === 'broker') {
      setUserType({
        client: value === 'client',
        broker: value === 'broker'
      })
    }
  };

  const partialErrors = () => {
    const userErrors =
      (validate(errorsInputValues?.personal) && page === 2) ||
      (validate(errorsInputValues?.legalPersonal) && page === 2) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 3);

    const errors: boolean = userErrors;
    return errors;
  };

  const typeOfToucheds: () => TouchedForms = () => {
    let toucheds: TouchedForms;
    toucheds =
      (userActive.personal && page === 1 && "personal") ||
      (userActive.legalPersonal && page === 1 && "legalPersonal") ||
      "";

    return toucheds;
  };

  const trueValues = (typeOfToucheds: string) => {
    let values;

    if (typeOfToucheds === "personal") {
      values = touchedPersonalValuesTrue;
    } else if (typeOfToucheds === "legalPersonal") {
      values = touchedLegalPersonalValuesTrue;
    }

    return values;
  };

  const markedTouches = () => {
    setInputsTouched({
      ...touchedRegisterValues,
      [typeOfToucheds()]: {
        ...trueValues(typeOfToucheds()),
      },
    });
  };

  const changeInputValues = (e: ChangeEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof RegisterValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof RegisterValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateRegister({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof RegisterValues],
            [key]: value,
          },
        },
        userActive,
      })
    );
  };

  const changeSelectValues = (e: SelectEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof RegisterValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof RegisterValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateRegister({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof RegisterValues],
            [key]: value,
          },
        },
        userActive,
      })
    );
  };

  const changeInputForCheckbox = (e: ChangeEventType) => {
    const { name, checked } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof RegisterValues],
        [key]: checked,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof RegisterValues],
        [key]: checked,
      },
    });

    setErrorsInputValues(
      validateRegister({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof RegisterValues],
            [key]: checked,
          },
        },
        userActive,
      })
    );
  };
  
  useEffect(() => {
    setErrorsInputValues(
      validateRegister({
        inputValues,
        userActive,
      })
    );
  }, [page]);

  const submitValues = (e: SubmitEventType) => {
    e.preventDefault();
    setErrorsInputValues(
      validateRegister({
        inputValues,
        userActive,
      })
    );

    console.log("chau");
    // validationFormDataInspect({ inputValues, errorsInputValues, triggers });
  };

  const values = {
    submitValues,
    changePage,
    page,
    partialErrors,
    markedTouches,
    userActive,
    changeForm,
    inputValues,
    changeInputValues,
    inputTouched,
    errorsInputValues,
    changeSelectValues,
    changeInputForCheckbox,
    userType,
  };

  return (
    <RegisterContext.Provider value={values}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error(
      "useRegisterContext can only be used inside RegisterProvider"
    );
  }

  return context;
};