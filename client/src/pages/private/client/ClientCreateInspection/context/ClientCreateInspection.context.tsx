import { ChildrenType, ElementActive, TouchedForms } from "@/models";
import {
  ChangeEventType,
  ClickEventType,
  ClientCreateInspectionValues,
  ErrorsClientCreateInspectionValues,
  LegalElectronicUrl,
  LegalVehicleUrl,
  PersonalElectronicUrl,
  PersonalVehicleUrl,
  SelectEventType,
  SubmitEventType,
  TouchedClientCreateInspectionValues,
  addInspectionLegalElectronic,
  addInspectionLegalVehicle,
  addInspectionPersonalElectronic,
  addInspectionPersonalVehicle,
  validateClientCreateInspection,
} from "@/pages";
import {
  touchedElectronicValuesTrue,
  touchedVehicleValuesTrue,
  validate,
} from "@/utilities";
import { createContext, useContext, useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import {
  emptyClientCreateInspectionValues,
  touchedTouchedClientCreateInspectionValues,
} from "../../../utilities/client-create-inspection/objects-client-create-inspection.utility";
import {
  IClientCreateInspectionContext,
  emptyClientCreateInspectionContext,
} from "./empty-clientCreateInspection-context";

const ClientCreateInspectionContext =
  createContext<IClientCreateInspectionContext>(
    emptyClientCreateInspectionContext
  );

export const ClientCreateInspectionProvider = ({ children }: ChildrenType) => {
  const [inputValues, setInputValues] = useState<ClientCreateInspectionValues>(
    emptyClientCreateInspectionValues
  );

  const [inputTouched, setInputsTouched] =
    useState<TouchedClientCreateInspectionValues>(
      touchedTouchedClientCreateInspectionValues
    );

  const [errorsInputValues, setErrorsInputValues] = useState<
    Partial<ErrorsClientCreateInspectionValues> | undefined
  >(undefined);

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

    if (value === "vehicle" || value === "electronic") {
      setElementActive({
        vehicle: value === "vehicle",
        electronic: value === "electronic",
      });
    }
  };

  const partialErrors = () => {
    const withoutGncPhoneErrors: boolean =
      (validate(errorsInputValues?.vehicle) && page === 1) ||
      (validate(errorsInputValues?.electronic) && page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const withGncErrors: boolean =
      ((validate(errorsInputValues?.gnc) ||
        validate(errorsInputValues?.vehicle)) &&
        page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const withPhoneErrors: boolean =
      ((validate(errorsInputValues?.phone) ||
        validate(errorsInputValues?.electronic)) &&
        page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

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
      (elementActive.vehicle && page === 1 && "vehicle") ||
      (elementActive.electronic && page === 1 && "electronic") ||
      "";

    return toucheds;
  };

  const trueValues = (typeOfToucheds: string) => {
    let values;

    if (typeOfToucheds === "vehicle") {
      values = touchedVehicleValuesTrue;
    } else if (typeOfToucheds === "electronic") {
      values = touchedElectronicValuesTrue;
    }

    return values;
  };

  const markedTouches = () => {
    setInputsTouched({
      ...touchedTouchedClientCreateInspectionValues,
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
        ...inputValues[type as keyof ClientCreateInspectionValues],
        [key]: checked,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateInspectionValues],
        [key]: checked,
      },
    });

    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateInspectionValues],
            [key]: checked,
          },
        },
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
        ...inputValues[type as keyof ClientCreateInspectionValues],
        [key]: [...images],
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateInspectionValues],
        [key]: [...images],
      },
    });

    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateInspectionValues],
            [key]: [...images],
          },
        },
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
        ...inputValues[type as keyof ClientCreateInspectionValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateInspectionValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateInspectionValues],
            [key]: value,
          },
        },
        elementActive,
      })
    );
  };

  const changeInputValuesNumber = (e: ChangeEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    const numberValue = Number(value);

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof ClientCreateInspectionValues],
        [key]: numberValue,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateInspectionValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateInspectionValues],
            [key]: numberValue,
          },
        },
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
        ...inputValues[type as keyof ClientCreateInspectionValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateInspectionValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateInspectionValues],
            [key]: value,
          },
        },
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

  useEffect(() => {
    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues,
        elementActive,
      })
    );
  }, [page]);

  const submitValues = (e: SubmitEventType) => {
    e.preventDefault();
    setErrorsInputValues(
      validateClientCreateInspection({
        inputValues,
        elementActive,
      })
    );

    //  validationFormDataInspect({ inputValues, errorsInputValues, triggers });
  };

  const values = {
    submitValues,
    changeInputValues,
    changeSelectValues,
    inputValues,
    inputTouched,
    errorsInputValues,
    setInputValues,
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
    <ClientCreateInspectionContext.Provider value={values}>
      {children}
    </ClientCreateInspectionContext.Provider>
  );
};

export const useClientCreateInspectionContext = () => {
  const context = useContext(ClientCreateInspectionContext);

  if (!context) {
    throw new Error(
      "useClientCreateInspectionContext can only be used inside ClientCreateInspectionProvide"
    );
  }

  return context;
};