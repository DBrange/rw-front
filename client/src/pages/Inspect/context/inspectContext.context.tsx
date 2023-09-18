import useSWRMutation from "swr/mutation";
import { createContext, useContext, useEffect, useState } from "react";
import { IInspectContext, emptyInspectContext } from "./empty-inspect-context";
import {
  ChangeEventType,
  SubmitEventType,
  SelectEventType,
  AllInspectValues,
  emptyAllInspectValues,
  ErrorsAllInspectValues,
  TouchedAllInspectValues,
  touchedAllInspectValues,
  validateAllInspect,
  ClickEventType,
  validationFormDataInspect,
} from "..";
import {
  PersonalVehicleUrl,
  addInspectionPersonalVehicle,
  PersonalElectronicUrl,
  addInspectionPersonalElectronic,
  LegalVehicleUrl,
  addInspectionLegalVehicle,
  LegalElectronicUrl,
  addInspectionLegalElectronic,
} from "../services/add-inspect.service";
import { ElementActive, TouchedForms, UserActive } from "@/models";
import {
  touchedElectronicValuesTrue,
  touchedLegalPersonalValuesTrue,
  touchedPersonalValuesTrue,
  touchedVehicleValuesTrue,
  validate,
} from "@/utilities";

export const InspectContext =
  createContext<IInspectContext>(emptyInspectContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const InspectProvider = ({ children }: ChildrenType) => {
  const [inputValues, setInputValues] = useState<AllInspectValues>(
    emptyAllInspectValues
  );

  const [inputTouched, setInputsTouched] = useState<TouchedAllInspectValues>(
    touchedAllInspectValues
  );

  const [errorsInputValues, setErrorsInputValues] = useState<
    Partial<ErrorsAllInspectValues> | undefined
  >(undefined);

  const [userActive, setUserActive] = useState<UserActive>({
    personal: true,
    legalPersonal: false,
  });

  const [elementActive, setElementActive] = useState<ElementActive>({
    vehicle: true,
    electronic: false,
  });

  const [formNotFound, setFormNotFound] = useState<boolean>(false);

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
    } else if (value === "vehicle" || value === "electronic") {
      setElementActive({
        vehicle: value === "vehicle",
        electronic: value === "electronic",
      });
    }
  };

  const partialErrors = () => {
    const userErrors =
      (validate(errorsInputValues?.personal) && page === 2) ||
      (validate(errorsInputValues?.legalPersonal) && page === 2);

    const withoutGncPhoneErrors: boolean =
      userErrors ||
      (validate(errorsInputValues?.vehicle) && page === 3) ||
      (validate(errorsInputValues?.electronic) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const withGncErrors: boolean =
      userErrors ||
      ((validate(errorsInputValues?.gnc) ||
        validate(errorsInputValues?.vehicle)) &&
        page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const withPhoneErrors: boolean =
      userErrors ||
      ((validate(errorsInputValues?.phone) ||
        validate(errorsInputValues?.electronic)) &&
        page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    // let errors: boolean = false

    // if (elementActive.vehicle) {
    //   if (!inputValues.vehicle.gnc) {
    //    errors = userErrors || withoutGncPhoneErrors;
    //   } else if (inputValues.vehicle.gnc) {
    //     errors = userErrors || withGncErrors;
    //   }
    // }

    // if (elementActive.electronic) {
    //   if (!(inputValues.electronic.type === "CELULAR")) {
    //     errors = userErrors || withoutGncPhoneErrors;
    //   } else if (inputValues.electronic.type === "CELULAR") {
    //     errors = userErrors || withPhoneErrors;
    //   }
    // }
      const errors: boolean = inputValues.vehicle.gnc
        ? withGncErrors
        : inputValues.electronic.type === "CELULAR"
        ? withPhoneErrors
        : withoutGncPhoneErrors;

      return errors;
  };

  const typeOfToucheds: () => TouchedForms = () => {
    let toucheds: TouchedForms;
    toucheds =
      (userActive.personal && page === 2 && "personal") ||
      (userActive.legalPersonal && page === 2 && "legalPersonal") ||
      (elementActive.vehicle && page === 3 && "vehicle") ||
      (elementActive.electronic && page === 3 && "electronic") ||
      "";

    return toucheds;
  };

  const trueValues = (typeOfToucheds: string) => {
    let values;

    if (typeOfToucheds === "personal") {
      values = touchedPersonalValuesTrue;
    } else if (typeOfToucheds === "legalPersonal") {
      values = touchedLegalPersonalValuesTrue;
    } else if (typeOfToucheds === "vehicle") {
      values = touchedVehicleValuesTrue;
    } else if (typeOfToucheds === "electronic") {
      values = touchedElectronicValuesTrue;
    }

    return values;
  };

  const markedTouches = () => {
    setInputsTouched({
      ...touchedAllInspectValues,
      [typeOfToucheds()]: {
        ...trueValues(typeOfToucheds()),
      },
    });
  };

  const changeInputForCheckbox = (e: ChangeEventType) => {
    const { name, checked } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof AllInspectValues],
        [key]: checked,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllInspectValues],
        [key]: checked,
      },
    });

    setErrorsInputValues(
      validateAllInspect({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllInspectValues],
            [key]: checked,
          },
        },
        userActive,
        elementActive,
      })
    );
  };

  const changeInputForImages = (e: ChangeEventType, images: string[]) => {
    const { name } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof AllInspectValues],
        [key]: [...images],
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllInspectValues],
        [key]: [...images],
      },
    });

    setErrorsInputValues(
      validateAllInspect({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllInspectValues],
            [key]: [...images],
          },
        },
        userActive,
        elementActive,
      })
    );
  };

  const changeInputValues = (e: ChangeEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof AllInspectValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllInspectValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateAllInspect({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllInspectValues],
            [key]: value,
          },
        },
        userActive,
        elementActive,
      })
    );
  };
  const changeInputValuesNumber = (e: ChangeEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    const numberValue = Number(value)

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof AllInspectValues],
        [key]: numberValue,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllInspectValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateAllInspect({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllInspectValues],
            [key]: numberValue,
          },
        },
        userActive,
        elementActive,
      })
    );
  };

  const changeSelectValues = (e: SelectEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof AllInspectValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllInspectValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateAllInspect({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllInspectValues],
            [key]: value,
          },
        },
        userActive,
        elementActive,
      })
    );
  };

  const {
    error: errorInspectionPersonalVehicle,
    trigger: triggerInspectionPersonalVehicle,
  } = useSWRMutation(PersonalVehicleUrl, addInspectionPersonalVehicle);

  const {
    error: errorInspectionPersonalElectronic,
    trigger: triggerInspectionPersonalElectronic,
  } = useSWRMutation(PersonalElectronicUrl, addInspectionPersonalElectronic);

  const {
    error: errorInspectionLegalVehicle,
    trigger: triggerInspectionLegalVehicle,
  } = useSWRMutation(LegalVehicleUrl, addInspectionLegalVehicle);

  const {
    error: errorInspectionLegalElectronic,
    trigger: triggerInspectionLegalElectronic,
  } = useSWRMutation(LegalElectronicUrl, addInspectionLegalElectronic);

  const triggers = {
    triggerInspectionPersonalVehicle,
    triggerInspectionPersonalElectronic,
    triggerInspectionLegalVehicle,
    triggerInspectionLegalElectronic,
  };

  const fetchErrors = [
    errorInspectionPersonalVehicle,
    errorInspectionPersonalElectronic,
    errorInspectionLegalVehicle,
    errorInspectionLegalElectronic,
  ];

  useEffect(() => {
    for (const err in fetchErrors) {
      if (fetchErrors[err]) {
        setFormNotFound(true);
      }
    }
  }, [...fetchErrors]);

  const submitValues = (e: SubmitEventType) => {
    e.preventDefault();
    setErrorsInputValues(
      validateAllInspect({
        inputValues,
        userActive,
        elementActive,
      })
    );

    validationFormDataInspect({ inputValues, errorsInputValues, triggers });
  };

  const values = {
    submitValues,
    changeInputValues,
    changeSelectValues,
    inputValues,
    inputTouched,
    errorsInputValues,
    setInputValues,
    setUserActive,
    userActive,
    setElementActive,
    elementActive,
    setPage,
    page,
    changePage,
    changeForm,
    setInputsTouched,
    partialErrors,
    typeOfToucheds,
    formNotFound,
    changeInputForCheckbox,
    changeInputForImages,
    markedTouches,
    changeInputValuesNumber,
  };

  return (
    <InspectContext.Provider value={values}>{children}</InspectContext.Provider>
  );
};

export const useInspectContext = () => {
  const context = useContext(InspectContext);
  if (!context) {
    throw new Error(
      "useInspectContext can only be used inside InspectProvider"
    );
  }

  return context;
};
