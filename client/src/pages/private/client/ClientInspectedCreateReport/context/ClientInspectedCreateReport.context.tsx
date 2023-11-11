import {
  FormOpenClose,
  FormThirdPartyInjured,
  FormThirdPartyVehicle,
} from "@/components";
import {
  ChildrenType,
  ElementReportActive,
  ReportActive,
  ThirdPartyInjuredValues,
  ThirdPartyVehicleValues,
  TouchedForms,
  TouchedThirdPartyInjuredValues,
  TouchedThirdPartyVehicleValues,
} from "@/models";
import {
  ChangeEventTextAreaType,
  ChangeEventType,
  ClickEventType,

  SelectEventType,
  SubmitEventType,

} from "@/pages";
import { AppStore } from "@/redux";
import {
  touchedAllCrashVehiclesValuesTrue,
  touchedAllThirdPartyInjuredValuesTrue,
  touchedCrashVehicleValuesTrue,
  touchedElectronicValuesTrue,
  touchedFireVehiclesValuesTrue,
  touchedTheftElectronicValuesTrue,
  touchedTheftVehiclesValuesTrue,
  touchedThirdPartyInjuredTrue,
  touchedThirdPartyVehicleValuesTrue,
  touchedVehicleReportValuesTrue,
  touchedVehicleValuesTrue,
  validate,
} from "@/utilities";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSWRMutation from "swr/mutation";
import {
  emptyClientInspectedCreateReportValues,
  touchedClientInspectedCreateReportValues,
} from "../../../utilities/client-inspected-create-report/objects-client-inspected-create-report";
import { addReportCrash, addReportFire, addReportTheft, reportInInspectionCrashUrl, reportInInspectionFireUrl, reportInInspectionTheftUrl } from "../services/add-report-inspected.service";
import {
  IClientInspectedCreateReportContext,
  emptyClientInspectedCreateReportContext,
} from "./empty-ClientInspectedCreatesReport-context";
import { useParams } from "react-router-dom";
import { ClientInspectedCreateReportValues, TouchedClientInspectedCreateReportValues, ErrorsClientInspectedCreateReportValues, validateClientInspectedCreateReport } from "@/pages/private";
import { validationFormDataInspectedReport } from "..";

type onlyOwner = Pick<ThirdPartyVehicleValues, "owner">;
type onlyLicensePhoto = Pick<ThirdPartyVehicleValues, "licensePhoto">;
type withoutLicensePhoto = Omit<ThirdPartyVehicleValues, "licensePhoto">;
type onlyLicensePhotoTouched = Omit<
  TouchedThirdPartyVehicleValues,
  "licensePhoto"
>;
type withoutGender = Omit<ThirdPartyInjuredValues, "gender">;
type withoutGenderTouched = Omit<TouchedThirdPartyInjuredValues, "gender">;
type onlyGender = Pick<ThirdPartyInjuredValues, "gender">;

//----------------

const ClientInspectedCreateReportContext =
  createContext<IClientInspectedCreateReportContext>(
    emptyClientInspectedCreateReportContext
  );

export const ClientInspectedCreateReportProvider = ({
  children,
}: ChildrenType) => {
  const [inputValues, setInputValues] =
    useState<ClientInspectedCreateReportValues>(
      emptyClientInspectedCreateReportValues
    );

  const [inputTouched, setInputsTouched] =
    useState<TouchedClientInspectedCreateReportValues>(
      touchedClientInspectedCreateReportValues
    );

  const [errorsInputValues, setErrorsInputValues] = useState<
    Partial<ErrorsClientInspectedCreateReportValues> | undefined
  >(undefined);

  const [elementReportActive, setElementReportActive] =
    useState<ElementReportActive>({
      vehicleReport: true,
      electronic: false,
    });

  const [reportActive, setReportActive] = useState<ReportActive>({
    theft: true,
    fire: false,
    crash: false,
  });

  const [formNotFound, setFormNotFound] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);

  const [amountInjured, setAmountInjured] = useState<number>(0);
  const [amountVehicles, setAmountVehicles] = useState<number>(0);

  useEffect(() => {
    setAmountInjured(0);
    setAmountVehicles(0);
    inputValues.thirdPartyInjured.injuredInfo = [];
    inputValues.fire.amount = 0;
    inputValues.crash.amount = 0;
    inputValues.crash.amountVehicles = 0;
  }, [reportActive]);

  const creatingThirdParty = (
    label: string,
    pageNumber: number,
    reportType: string,
    people: JSX.Element[]
  ): JSX.Element => {
    return (
      <FormOpenClose
        formName={label}
        isActive={
          elementReportActive.vehicleReport &&
          reportActive[reportType as keyof ReportActive] &&
          page === pageNumber
        }
        form={people}
      />
    );
  };

  const creatingThirdPartyInjuredContainer = (): JSX.Element | null => {
    let people: JSX.Element[] = [];

    if (100 > amountInjured && amountInjured > 0) {
      for (let i = 0; i < amountInjured; i++) {
        people.push(
          <FormThirdPartyInjured
            key={i}
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeSelectValues={changeSelectValues}
            amountInjured={amountInjured}
            index={i}
          />
        );
      }

      const reportType = reportActive.fire ? "fire" : "crash";

      return creatingThirdParty("Terceros heridos", 2, reportType, people);
    } else {
      return null;
    }
  };

  const creatingThirdPartyVehicleContainer = (): JSX.Element | null => {
    let people: JSX.Element[] = [];

    if (100 > amountVehicles && amountVehicles > 0) {
      for (let i = 0; i < amountVehicles; i++) {
        people.push(
          <FormThirdPartyVehicle
            key={i}
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeSelectValues={changeSelectValues}
            amountInjured={amountInjured}
            changeInputForImages={changeInputForImages}
            changeInputForCheckbox={changeInputForCheckbox}
            index={i}
          />
        );
      }

      const correspondingPage = amountInjured > 0 ? 3 : 2;

      return creatingThirdParty(
        "Vehiculo de terceros",
        correspondingPage,
        "crash",
        people
      );
    } else {
      return null;
    }
  };

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

    if (value === "vehicleReport" || value === "electronic") {
      setElementReportActive({
        vehicleReport: value === "vehicleReport",
        electronic: value === "electronic",
      });
    } else if (value === "theft" || value === "fire" || value === "crash") {
      console.log("aquii");
      setReportActive({
        theft: value === "theft",
        fire: value === "fire",
        crash: value === "crash",
      });
    }
  };

  const partialErrors = (): boolean => {
    const withoutTireTheftErrors: boolean =
      (validate(errorsInputValues?.theftVehicle) && page === 1) ||
      // (validate(errorsInputValues?.theftElectronic) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const electronicTheft: boolean =
      (validate(errorsInputValues?.theftElectronic) && page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const withTireTheftErrors: boolean =
      ((validate(errorsInputValues?.theftVehicle) ||
        validate(errorsInputValues?.isTire)) &&
        page === 1) ||
      // ((validate(errorsInputValues?.theftElectronic) ||
      //   validate(errorsInputValues?.isTire)) &&
      //   page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const withoutThirdPartyInjuredFireErrors: boolean =
      (validate(errorsInputValues?.fire) && page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const withThirdPartyInjuredFireErrors: boolean =
      (validate(errorsInputValues?.fire) && page === 1) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 2) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 3);

    const withoutThirdPartyInjuredAndVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 1) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 2);

    const withThirdPartyInjuredCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 1) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 2) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 3);

    const withThirdPartyVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 1) ||
      (errorsInputValues?.thirdPartyVehicle?.thirdPartyVehicleInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 2) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 3);

    const withThirdPartyInjuredAndVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 1) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 2) ||
      (errorsInputValues?.thirdPartyVehicle?.thirdPartyVehicleInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    let errors: boolean = false;

    if (elementReportActive.vehicleReport) {
      //theft vehicle
      if (reportActive.theft && !inputValues.theftVehicle.isTire) {
        errors = withoutTireTheftErrors;
      } else if (reportActive.theft && !inputValues.theftVehicle.isTire) {
        errors = withoutTireTheftErrors;
      } else if (!reportActive.theft && inputValues.theftVehicle.isTire) {
        errors = withTireTheftErrors;
      } else if (reportActive.theft && inputValues.theftVehicle.isTire) {
        errors = withTireTheftErrors;
      }

      //fire vehicle
      if (!reportActive.fire && !amountInjured) {
        errors = withoutThirdPartyInjuredFireErrors;
      } else if (reportActive.fire && !amountInjured) {
        errors = withoutThirdPartyInjuredFireErrors;
      } else if (!reportActive.fire && amountInjured) {
        errors = withThirdPartyInjuredFireErrors;
      } else if (reportActive.fire && amountInjured) {
        errors = withThirdPartyInjuredFireErrors;
      }

      //crahs vehicle
      if (!reportActive.crash && !amountInjured && !amountVehicles) {
        errors = withoutThirdPartyInjuredAndVehicleCrashErrors;
      } else if (!reportActive.crash && amountInjured && !amountVehicles) {
        errors = withThirdPartyInjuredCrashErrors;
      } else if (!reportActive.crash && !amountInjured && amountVehicles) {
        errors = withThirdPartyVehicleCrashErrors;
      } else if (!reportActive.crash && amountInjured && amountVehicles) {
        errors = withThirdPartyInjuredAndVehicleCrashErrors;
        //abajo
      } else if (reportActive.crash && amountInjured && !amountVehicles) {
        errors = withThirdPartyInjuredCrashErrors;
      } else if (reportActive.crash && !amountInjured && amountVehicles) {
        errors = withThirdPartyVehicleCrashErrors;
      } else if (reportActive.crash && amountInjured && amountVehicles) {
        errors = withThirdPartyInjuredAndVehicleCrashErrors;
      } else if (reportActive.crash && !amountInjured && !amountVehicles) {
        errors = withoutThirdPartyInjuredAndVehicleCrashErrors;
      }
    } else if (elementReportActive.electronic) {
      if (reportActive.theft && !inputValues.theftElectronic.isTire) {
        errors = electronicTheft;
      } else if (reportActive.theft && !inputValues.theftElectronic.isTire) {
        errors = electronicTheft;
      }
    }

    return errors;
  };

  const typeOfToucheds = (): TouchedForms => {
    let toucheds: TouchedForms;
    toucheds =
      (elementReportActive.vehicleReport && page === 1 && "vehicleReport") ||
      (elementReportActive.electronic && page === 1 && "electronic") ||
      (reportActive.theft && page === 1 && "theftVehicle") ||
      (reportActive.theft && page === 1 && "theftElectronic") ||
      (reportActive.fire && page === 1 && "fire") ||
      (reportActive.fire &&
        page === 2 &&
        amountInjured > 0 &&
        "thirdPartyInjured") ||
      (reportActive.crash && page === 1 && "crash") ||
      (reportActive.crash &&
        page === 2 &&
        amountInjured > 0 &&
        "thirdPartyInjured") ||
      (reportActive.crash &&
        page === 2 &&
        amountInjured < 1 &&
        amountVehicles > 0 &&
        "thirdPartyVehicle") ||
      (reportActive.crash &&
        page === 3 &&
        amountInjured > 0 &&
        amountVehicles > 0 &&
        "thirdPartyVehicle") ||
      "";

    return toucheds;
  };

  const trueValues = (typeOfToucheds: string) => {
    let values;

    if (typeOfToucheds === "vehicle") {
      values = touchedVehicleValuesTrue;
    } else if (typeOfToucheds === "electronic") {
      values = touchedElectronicValuesTrue;
    } else if (typeOfToucheds === "vehicleReport") {
      values = touchedVehicleReportValuesTrue;
    } else if (typeOfToucheds === "theftVehicle") {
      values = touchedTheftVehiclesValuesTrue;
    } else if (typeOfToucheds === "theftElectronic") {
      values = touchedTheftElectronicValuesTrue;
    } else if (typeOfToucheds === "fire") {
      values = touchedFireVehiclesValuesTrue;
    } else if (typeOfToucheds === "crash") {
      values = touchedCrashVehicleValuesTrue;
    } else if (typeOfToucheds === "thirdPartyInjured") {
      values = touchedAllThirdPartyInjuredValuesTrue;
    } else if (typeOfToucheds === "thirdPartyVehicle") {
      values = touchedAllCrashVehiclesValuesTrue;
    }

    return values;
  };

  const markedTouches = () => {
    if (typeOfToucheds() === "thirdPartyInjured") {
      setInputsTouched({
        ...touchedClientInspectedCreateReportValues,
        thirdPartyInjured: {
          injuredInfo: inputTouched.thirdPartyInjured.injuredInfo.map(
            () => touchedThirdPartyInjuredTrue
          ),
        },
      });
    } else if (typeOfToucheds() === "thirdPartyVehicle") {
      setInputsTouched({
        ...touchedClientInspectedCreateReportValues,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo:
            inputTouched.thirdPartyVehicle.thirdPartyVehicleInfo.map(
              () => touchedThirdPartyVehicleValuesTrue
            ),
        },
      });
    } else {
      setInputsTouched({
        ...touchedClientInspectedCreateReportValues,
        [typeOfToucheds()]: {
          ...trueValues(typeOfToucheds()),
        },
      });
    }
  };

  const changeInputForCheckbox = (e: ChangeEventType) => {
    const { name, checked } = e.target;
    const [type, key] = name.split(".");

    if (type === "thirdPartyVehicle") {
      changeInputForCheckboxArrayVehicles(type, name, checked, name);
    } else {
      if (!checked) {
        if (key === "thirdInjured") {
          setAmountInjured(0);
          inputValues.fire.amount = 0;
          inputValues.crash.amount = 0;
        }
      }

      setInputValues({
        ...inputValues,
        [type]: {
          ...inputValues[type as keyof ClientInspectedCreateReportValues],
          [key]: checked,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientInspectedCreateReportValues],
          [key]: checked,
        },
      });

      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientInspectedCreateReportValues],
              [key]: checked,
            },
          },
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const changeInputForCheckboxArrayVehicles = (
    _type: string,
    name: string,
    checked: boolean,
    _key: string
  ) => {
    const [_a, _b, c, d] = name.split(".");

    setInputValues((values) => {
      let newVehicle = [...values.thirdPartyVehicle.thirdPartyVehicleInfo];
      let vehicle = newVehicle[Number(c)];
      vehicle[d as keyof onlyOwner] = checked;
      newVehicle[Number(c)] = vehicle;

      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...inputValues,
            thirdPartyVehicle: {
              thirdPartyVehicleInfo: [
                ...inputValues.thirdPartyVehicle.thirdPartyVehicleInfo,
              ],
            },
          },
          elementReportActive,
          reportActive,
        })
      );
      return {
        ...values,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo: newVehicle,
        },
      };
    });
  };

  const changeInputForImages = (e: ChangeEventType, images: string[]) => {
    const { name } = e.target;
    const [type, key] = name.split(".");

    if (type === "thirdPartyVehicle") {
      changeInputForImagesArrayVehicles(type, name, images, name);
    } else {
      setInputValues({
        ...inputValues,
        [type]: {
          ...inputValues[type as keyof ClientInspectedCreateReportValues],
          [key]: [...images],
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientInspectedCreateReportValues],
          [key]: [...images],
        },
      });

      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientInspectedCreateReportValues],
              [key]: [...images],
            },
          },
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const changeInputForImagesArrayVehicles = (
    _type: string,
    name: string,
    images: string[],
    _key: string
  ) => {
    const [_a, _b, c, d] = name.split(".");

    setInputValues((values) => {
      let newVehicle = [...values.thirdPartyVehicle.thirdPartyVehicleInfo];
      let vehicle = newVehicle[Number(c)];
      vehicle[d as keyof onlyLicensePhoto] = [...images];
      newVehicle[Number(c)] = vehicle;
      return {
        ...values,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo: newVehicle,
        },
      };
    });

    setInputsTouched((values) => {
      let trueVehicle = [...values.thirdPartyVehicle.thirdPartyVehicleInfo];
      let vehicle = trueVehicle[Number(c)];

      vehicle[d as keyof onlyLicensePhotoTouched] = true;
      // trueVehicle[Number(c)] = injured;
      return {
        ...inputTouched,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo: trueVehicle,
        },
      };
    });

    setErrorsInputValues(
      validateClientInspectedCreateReport({
        inputValues: {
          ...inputValues,
          thirdPartyVehicle: {
            thirdPartyVehicleInfo: [
              ...inputValues.thirdPartyVehicle.thirdPartyVehicleInfo,
            ],
          },
        },
        elementReportActive,
        reportActive,
      })
    );
  };

  const changeInputForSchedule = (name: string, schedule: string) => {
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof ClientInspectedCreateReportValues],
        [key]: schedule,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientInspectedCreateReportValues],
        [key]: schedule,
      },
    });

    setErrorsInputValues(
      validateClientInspectedCreateReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientInspectedCreateReportValues],
            [key]: schedule,
          },
        },
        elementReportActive,
        reportActive,
      })
    );
  };

  const changeInputForTextArea = (e: ChangeEventTextAreaType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof ClientInspectedCreateReportValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientInspectedCreateReportValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientInspectedCreateReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientInspectedCreateReportValues],
            [key]: value,
          },
        },
        elementReportActive,
        reportActive,
      })
    );
  };

  const changeInputValuesArrayInjured = (
    _type: string,
    name: string,
    value: string,
    _key: string
  ) => {
    const [_a, _b, c, d] = name.split(".");

    setInputValues((values) => {
      let newInjured = [...values.thirdPartyInjured.injuredInfo];
      let injured = newInjured[Number(c)];
      injured[d as keyof withoutGender] = value;
      newInjured[Number(c)] = injured;
      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...values,
            thirdPartyInjured: {
              injuredInfo: [...values.thirdPartyInjured.injuredInfo],
            },
          },
          elementReportActive,
          reportActive,
        })
      );
      return {
        ...values,
        thirdPartyInjured: {
          injuredInfo: newInjured,
        },
      };
    });

    setInputsTouched((values) => {
      let trueInjured = [...values.thirdPartyInjured.injuredInfo];
      let injured = trueInjured[Number(c)];

      injured[d as keyof withoutGenderTouched] = true;
      // trueInjured[Number(c)] = injured;
      return {
        ...inputTouched,
        thirdPartyInjured: {
          injuredInfo: trueInjured,
        },
      };
    });
  };

  const changeInputValuesArrayVehicles = (
    _type: string,
    name: string,
    value: string | number,
    _key: string
  ) => {
    const [_a, _b, c, d] = name.split(".");

    setInputValues((values) => {
      let newVehicle = [...values.thirdPartyVehicle.thirdPartyVehicleInfo];
      let vehicle = newVehicle[Number(c)];
      vehicle[d as keyof withoutLicensePhoto] = value as never;
      newVehicle[Number(c)] = vehicle;

      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...inputValues,
            thirdPartyVehicle: {
              thirdPartyVehicleInfo: [
                ...inputValues.thirdPartyVehicle.thirdPartyVehicleInfo,
              ],
            },
          },
          elementReportActive,
          reportActive,
        })
      );
      return {
        ...values,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo: newVehicle,
        },
      };
    });

    setInputsTouched((values) => {
      let trueVehicle = [...values.thirdPartyVehicle.thirdPartyVehicleInfo];
      let vehicle = trueVehicle[Number(c)];

      vehicle[d as keyof TouchedThirdPartyVehicleValues] = true;
      // trueVehicle[Number(c)] = injured;
      return {
        ...inputTouched,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo: trueVehicle,
        },
      };
    });
  };

  const createArraysToInjured = (value: number) => {
    setAmountInjured(value);

    inputValues.thirdPartyInjured.injuredInfo = [];

    let cleanInjuredInfo: ThirdPartyInjuredValues[] = [];
    const trueInjuredInfo: TouchedThirdPartyInjuredValues[] = [];

    for (let i = 0; i < value; i++) {
      inputValues.thirdPartyInjured.injuredInfo.push({
        name: "",
        lastName: "",
        location: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        gender: "default",
        dni: "",
        injuries: "",
      });
    }

    for (let i = 0; i < value; i++) {
      inputTouched.thirdPartyInjured.injuredInfo.push({
        name: false,
        lastName: false,
        location: false,
        birthDate: false,
        phoneNumber: false,
        email: false,
        gender: false,
        dni: false,
        injuries: false,
      });
    }

    setInputValues({
      ...inputValues,
      thirdPartyInjured: {
        injuredInfo: cleanInjuredInfo,
      },
    });

    setInputsTouched({
      ...inputTouched,
      thirdPartyInjured: {
        injuredInfo: trueInjuredInfo,
      },
    });
  };

  const createArraysToVehicles = (value: number) => {
    setAmountVehicles(value);

    inputValues.thirdPartyVehicle.thirdPartyVehicleInfo = [];

    // let cleanVehicleInfo: ThirdPartyVehicleValues[] = [];
    // const trueVehicleInfo: TouchedThirdPartyVehicleValues[] = [];
    setInputValues({
      ...inputValues,
      thirdPartyVehicle: {
        thirdPartyVehicleInfo: [],
      },
    });

    setInputsTouched({
      ...inputTouched,
      thirdPartyVehicle: {
        thirdPartyVehicleInfo: [],
      },
    });

    for (let i = 0; i < value; i++) {
      inputValues.thirdPartyVehicle.thirdPartyVehicleInfo.push({
        year: 0,
        brand: "",
        model: "",
        plate: "",
        insuranceCompany: "",
        insurancePolicy: "",
        ownerName: "",
        ownerLastName: "",
        ownerDni: "",
        address: "",
        phoneNumber: "",
        licensePhoto: [],
        email: "",
        owner: false,
        name: "",
        lastName: "",
        dni: "",
      });
    }

    for (let i = 0; i < value; i++) {
      inputTouched.thirdPartyVehicle.thirdPartyVehicleInfo.push({
        year: false,
        brand: false,
        model: false,
        plate: false,
        insuranceCompany: false,
        insurancePolicy: false,
        ownerName: false,
        ownerLastName: false,
        ownerDni: false,
        address: false,
        phoneNumber: false,
        licensePhoto: false,
        email: false,
        name: false,
        lastName: false,
        dni: false,
      });
    }
  };

  const changeInputValues = (e: ChangeEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    // if ((reportActive.crash || reportActive.fire) && key === "amount") {
    //   createArraysToInjured(value);
    // }

    // if (reportActive.crash && key === "amountVehicles") {
    //   createArraysToVehicles(value);
    // }

    if (type === "thirdPartyVehicle") {
      changeInputValuesArrayVehicles(type, name, value, key);
    } else if (type === "thirdPartyInjured") {
      changeInputValuesArrayInjured(type, name, value, key);
    } else {
      setInputValues({
        ...inputValues,
        [type]: {
          ...inputValues[type as keyof ClientInspectedCreateReportValues],
          [key]: value,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientInspectedCreateReportValues],
          [key]: true,
        },
      });

      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientInspectedCreateReportValues],
              [key]: value,
            },
          },
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const changeInputValuesNumber = (e: ChangeEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    const numberValue = Number(value);

    if ((reportActive.crash || reportActive.fire) && key === "amount") {
      createArraysToInjured(numberValue);
    }

    if (reportActive.crash && key === "amountVehicles") {
      createArraysToVehicles(numberValue);
    }

    setInputValues({
      ...inputValues,
      [type]: {
        ...inputValues[type as keyof ClientInspectedCreateReportValues],
        [key]: numberValue,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientInspectedCreateReportValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientInspectedCreateReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientInspectedCreateReportValues],
            [key]: numberValue,
          },
        },
        elementReportActive,
        reportActive,
      })
    );
  };

  const changeSelectValuesArrayInjured = (
    type: string,
    name: string,
    value: string,
    _key: string
  ) => {
    const [_a, _b, c, d] = name.split(".");

    if (type === "thirdPartyInjured") {
      setInputValues((values) => {
        let newInjured = [...values.thirdPartyInjured.injuredInfo];
        let injured = newInjured[Number(c)];

        injured[d as keyof onlyGender] = value as
          | "default"
          | "HOMBRE"
          | "MUJER"
          | "OTRO";
        newInjured[Number(c)] = injured;
        return {
          ...values,
          thirdPartyInjured: {
            injuredInfo: newInjured,
          },
        };
      });
    }
  };

  const changeSelectValues = (e: SelectEventType) => {
    const { value, name } = e.target;
    const [type, key] = name.split(".");

    if (type === "thirdPartyInjured") {
      changeSelectValuesArrayInjured(type, name, value, key);
    } else {
      setInputValues({
        ...inputValues,
        [type]: {
          ...inputValues[type as keyof ClientInspectedCreateReportValues],
          [key]: value,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientInspectedCreateReportValues],
          [key]: true,
        },
      });

      setErrorsInputValues(
        validateClientInspectedCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientInspectedCreateReportValues],
              [key]: value,
            },
          },
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const user = useSelector((store: AppStore) => store.user);
  const { insuredId } = useParams();

  const { error: errorReportTheft, trigger: triggerReportTheft } =
    useSWRMutation(
      reportInInspectionTheftUrl(insuredId),
      addReportTheft
    );

  const { error: errorReportFire, trigger: triggerReportFire } =
    useSWRMutation(
      reportInInspectionFireUrl(insuredId),
      addReportFire
    );

  const { error: errorReportCrash, trigger: triggerReportCrash } =
    useSWRMutation(
      reportInInspectionCrashUrl(insuredId),
      addReportCrash
    );

  const triggers = {
    triggerReportTheft,
    triggerReportFire,
    triggerReportCrash,
  };

  const fetchErrors = [errorReportTheft, errorReportFire, errorReportCrash];

  useEffect(() => {
    for (const err in fetchErrors) {
      if (fetchErrors[err]) {
        setFormNotFound(true);
      }
    }
  }, [...fetchErrors]);

  useEffect(() => {
    setErrorsInputValues(
      validateClientInspectedCreateReport({
        inputValues,
        elementReportActive,
        reportActive,
      })
    );
  }, [page]);

  const submitValues = (e: SubmitEventType) => {
    e.preventDefault();
    setErrorsInputValues(
      validateClientInspectedCreateReport({
        inputValues,
        elementReportActive,
        reportActive,
      })
    );

    validationFormDataInspectedReport({
      inputValues,
      errorsInputValues,
      triggers,
      amountInjured,
      user
    });
  };

  const values = {
    submitValues,
    changeInputValues,
    changeSelectValues,
    inputValues,
    inputTouched,
    errorsInputValues,
    setInputValues,
    setElementReportActive,
    elementReportActive,
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
    reportActive,
    changeInputForSchedule,
    changeInputForTextArea,
    creatingThirdPartyInjuredContainer,
    creatingThirdPartyVehicleContainer,
    amountInjured,
    amountVehicles,
    changeInputValuesNumber,
  };

  return (
    <ClientInspectedCreateReportContext.Provider value={values}>
      {children}
    </ClientInspectedCreateReportContext.Provider>
  );
};

export const useClientInspectedCreateReportContext = () => {
  const context = useContext(ClientInspectedCreateReportContext);

  if (!context) {
    throw new Error(
      "useClientInspectedCreateReportContext can only be used inside useClientInspectedCreateReportProvider"
    );
  }

  return context;
};
