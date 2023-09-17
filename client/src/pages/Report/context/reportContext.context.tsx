import {
  FormOpenClose,
  FormThirdPartyInjured,
  FormThirdPartyVehicle,
} from "@/components";
import {
  ElementReportActive,
  ReportActive,
  ThirdPartyInjuredValues,
  ThirdPartyVehicleValues,
  TouchedForms,
  TouchedThirdPartyInjuredValues,
  TouchedThirdPartyVehicleValues,
  UserActive,
} from "@/models";
import {
  ChangeEventTextAreaType,
  ChangeEventType,
  ClickEventType,
  SelectEventType,
  SubmitEventType,
} from "@/pages";
import {
  touchedAllCrashVehiclesValuesTrue,
  touchedAllThirdPartyInjuredValuesTrue,
  touchedCrashVehicleValuesTrue,
  touchedElectronicValuesTrue,
  touchedFireVehiclesValuesTrue,
  touchedLegalPersonalValuesTrue,
  touchedPersonalValuesTrue,
  touchedTheftElectronicValuesTrue,
  touchedTheftVehiclesValuesTrue,
  touchedThirdPartyInjuredTrue,
  touchedThirdPartyVehicleValuesTrue,
  touchedVehicleReportValuesTrue,
  touchedVehicleValuesTrue,
  validate,
} from "@/utilities";
import { createContext, useContext, useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import { IReportContext } from ".";
import {
  AllReportValues,
  ErrorsAllReportValues,
  LegalPersonalElectronicTheftUrl,
  LegalPersonalVehicleCrashUrl,
  LegalPersonalVehicleFireUrl,
  LegalPersonalVehicleTheftUrl,
  PersonalElectronicTheftUrl,
  PersonalVehicleCrashUrl,
  PersonalVehicleFireUrl,
  PersonalVehicleTheftUrl,
  TouchedAllReportValues,
  addReportLegalElectronicTheft,
  addReportLegalPersonalVehicleFire,
  addReportLegalPersonalVehicleTheft,
  addReportLegalVehicleCrash,
  addReportPersonalElectronicTheft,
  addReportPersonalVehicleCrash,
  addReportPersonalVehicleFire,
  addReportPersonalVehicleTheft,
  emptyAllReportValues,
  touchedAllReportValues,
  validateAllReport,
  validationFormDataReport,
} from "..";
import { emptyReportContext } from "./empty-report.context";

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

export const ReportContext = createContext<IReportContext>(emptyReportContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ReportProvider = ({ children }: ChildrenType) => {
  const [inputValues, setInputValues] =
    useState<AllReportValues>(emptyAllReportValues);

  const [inputTouched, setInputsTouched] = useState<TouchedAllReportValues>(
    touchedAllReportValues
  );

  const [errorsInputValues, setErrorsInputValues] = useState<
    Partial<ErrorsAllReportValues> | undefined
  >(undefined);

  const [userActive, setUserActive] = useState<UserActive>({
    personal: true,
    legalPersonal: false,
  });

  const [elementReportActive, setElementReportActive] =
    useState<ElementReportActive>({
      vehicleReport: true,
      electronic: false,
    });

  const [reportActive, setReportActive] = useState<ReportActive>({
    theft: false,
    fire: true,
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

      return creatingThirdParty("Terceros heridos", 6, reportType, people);
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

      const correspondingPage = amountInjured > 0 ? 7 : 6;

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

    if (value === "personal" || value === "legalPersonal") {
      setUserActive({
        personal: value === "personal",
        legalPersonal: value === "legalPersonal",
      });
    } else if (value === "vehicleReport" || value === "electronic") {
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
    const userErrors =
      (validate(errorsInputValues?.personal) && page === 2) ||
      (validate(errorsInputValues?.legalPersonal) && page === 2);

    const withoutGncPhoneErrors: boolean =
      (validate(errorsInputValues?.vehicleReport) && page === 3) ||
      (validate(errorsInputValues?.electronic) && page === 3);

    const withGncErrors: boolean =
      (validate(errorsInputValues?.gnc) ||
        validate(errorsInputValues?.vehicleReport)) &&
      page === 3;

    const withPhoneErrors: boolean =
      (validate(errorsInputValues?.phone) ||
        validate(errorsInputValues?.electronic)) &&
      page === 3;

    const withoutTireTheftErrors: boolean =
      (validate(errorsInputValues?.theftVehicle) && page === 5) ||
      // (validate(errorsInputValues?.theftElectronic) && page === 5) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 6);

    const electronicTheft: boolean =
      (validate(errorsInputValues?.theftElectronic) && page === 5) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 6);

    const withTireTheftErrors: boolean =
      ((validate(errorsInputValues?.theftVehicle) ||
        validate(errorsInputValues?.isTire)) &&
        page === 5) ||
      // ((validate(errorsInputValues?.theftElectronic) ||
      //   validate(errorsInputValues?.isTire)) &&
      //   page === 5) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 6);

    const withoutThirdPartyInjuredFireErrors: boolean =
      (validate(errorsInputValues?.fire) && page === 5) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 6);

    const withThirdPartyInjuredFireErrors: boolean =
      (validate(errorsInputValues?.fire) && page === 5) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 6) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 7);

    const withoutThirdPartyInjuredAndVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 5) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 6);

    const withThirdPartyInjuredCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 5) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 6) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 7);

    const withThirdPartyVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 5) ||
      (errorsInputValues?.thirdPartyVehicle?.thirdPartyVehiclesInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 6) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 7);

    const withThirdPartyInjuredAndVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 5) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 6) ||
      (errorsInputValues?.thirdPartyVehicle?.thirdPartyVehiclesInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 7) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 8);

    let errors: boolean = false;

    if (elementReportActive.vehicleReport) {
      //theft vehicle
      if (
        !inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        !inputValues.theftVehicle.isTire
      ) {
        errors = userErrors || withoutGncPhoneErrors || withoutTireTheftErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        !inputValues.theftVehicle.isTire
      ) {
        errors = userErrors || withGncErrors || withoutTireTheftErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        inputValues.theftVehicle.isTire
      ) {
        errors = userErrors || withoutGncPhoneErrors || withTireTheftErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        inputValues.theftVehicle.isTire
      ) {
        errors = userErrors || withGncErrors || withTireTheftErrors;
      }

      //fire vehicle
      if (
        !inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        !amountInjured
      ) {
        errors =
          userErrors ||
          withoutGncPhoneErrors ||
          withoutThirdPartyInjuredFireErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        !amountInjured
      ) {
        errors =
          userErrors || withGncErrors || withoutThirdPartyInjuredFireErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        amountInjured
      ) {
        errors =
          userErrors ||
          withoutGncPhoneErrors ||
          withThirdPartyInjuredFireErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        amountInjured
      ) {
        errors = userErrors || withGncErrors || withThirdPartyInjuredFireErrors;
      }

      //crahs vehicle
      if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        !amountVehicles
      ) {
        errors =
          userErrors ||
          withoutGncPhoneErrors ||
          withoutThirdPartyInjuredAndVehicleCrashErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        !amountVehicles
      ) {
        errors =
          userErrors ||
          withoutGncPhoneErrors ||
          withThirdPartyInjuredCrashErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        amountVehicles
      ) {
        errors =
          userErrors ||
          withoutGncPhoneErrors ||
          withThirdPartyVehicleCrashErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        amountVehicles
      ) {
        errors =
          userErrors ||
          withoutGncPhoneErrors ||
          withThirdPartyInjuredAndVehicleCrashErrors;
        //abajo
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        !amountVehicles
      ) {
        errors =
          userErrors || withGncErrors || withThirdPartyInjuredCrashErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        amountVehicles
      ) {
        errors =
          userErrors || withGncErrors || withThirdPartyVehicleCrashErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        amountVehicles
      ) {
        errors =
          userErrors ||
          withGncErrors ||
          withThirdPartyInjuredAndVehicleCrashErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        !amountVehicles
      ) {
        errors =
          userErrors ||
          withGncErrors ||
          withoutThirdPartyInjuredAndVehicleCrashErrors;
      }
    } else if (elementReportActive.electronic) {
      if (
        !(inputValues.electronic.type === "CELULAR") &&
        reportActive.theft &&
        !inputValues.theftVehicle.isTire
      ) {
        errors = userErrors || withoutGncPhoneErrors || electronicTheft;
      } else if (
        inputValues.electronic.type === "CELULAR" &&
        reportActive.theft &&
        !inputValues.theftVehicle.isTire
      ) {
        errors = userErrors || withPhoneErrors || electronicTheft;
      }
    }

    return errors;
  };

  const typeOfToucheds = (): TouchedForms => {
    let toucheds: TouchedForms;
    toucheds =
      (userActive.personal && page === 2 && "personal") ||
      (userActive.legalPersonal && page === 2 && "legalPersonal") ||
      (elementReportActive.vehicleReport && page === 3 && "vehicleReport") ||
      (elementReportActive.electronic && page === 3 && "electronic") ||
      (reportActive.theft && page === 5 && "theftVehicle") ||
      (reportActive.theft && page === 5 && "theftElectronic") ||
      (reportActive.fire && page === 5 && "fire") ||
      (reportActive.fire &&
        page === 6 &&
        amountInjured > 0 &&
        "thirdPartyInjured") ||
      (reportActive.crash && page === 5 && "crash") ||
      (reportActive.crash &&
        page === 6 &&
        amountInjured > 0 &&
        "thirdPartyInjured") ||
      (reportActive.crash &&
        page === 6 &&
        amountInjured < 1 &&
        amountVehicles > 0 &&
        "thirdPartyVehicle") ||
      (reportActive.crash &&
        page === 7 &&
        amountInjured > 0 &&
        amountVehicles > 0 &&
        "thirdPartyVehicle") ||
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
        ...touchedAllReportValues,
        thirdPartyInjured: {
          injuredInfo: inputTouched.thirdPartyInjured.injuredInfo.map(
            () => touchedThirdPartyInjuredTrue
          ),
        },
      });
    } else if (typeOfToucheds() === "thirdPartyVehicle") {
      setInputsTouched({
        ...touchedAllReportValues,
        thirdPartyVehicle: {
          thirdPartyVehiclesInfo:
            inputTouched.thirdPartyVehicle.thirdPartyVehiclesInfo.map(
              () => touchedThirdPartyVehicleValuesTrue
            ),
        },
      });
    } else {
      setInputsTouched({
        ...touchedAllReportValues,
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
          ...inputValues[type as keyof AllReportValues],
          [key]: checked,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof AllReportValues],
          [key]: checked,
        },
      });

      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof AllReportValues],
              [key]: checked,
            },
          },
          userActive,
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const changeInputForCheckboxArrayVehicles = (
    type: string,
    name: string,
    checked: boolean,
    key: string
  ) => {
    const [a, b, c, d] = name.split(".");

    setInputValues((values) => {
      let newVehicle = [...values.thirdPartyVehicle.thirdPartyVehiclesInfo];
      let vehicle = newVehicle[Number(c)];
      vehicle[d as keyof onlyOwner] = checked;
      newVehicle[Number(c)] = vehicle;

      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...inputValues,
            thirdPartyVehicle: {
              thirdPartyVehiclesInfo: [
                ...inputValues.thirdPartyVehicle.thirdPartyVehiclesInfo,
              ],
            },
          },
          userActive,
          elementReportActive,
          reportActive,
        })
      );
      return {
        ...values,
        thirdPartyVehicle: {
          thirdPartyVehiclesInfo: newVehicle,
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
          ...inputValues[type as keyof AllReportValues],
          [key]: [...images],
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof AllReportValues],
          [key]: [...images],
        },
      });

      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof AllReportValues],
              [key]: [...images],
            },
          },
          userActive,
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const changeInputForImagesArrayVehicles = (
    type: string,
    name: string,
    images: string[],
    key: string
  ) => {
    const [a, b, c, d] = name.split(".");

    setInputValues((values) => {
      let newVehicle = [...values.thirdPartyVehicle.thirdPartyVehiclesInfo];
      let vehicle = newVehicle[Number(c)];
      vehicle[d as keyof onlyLicensePhoto] = [...images];
      newVehicle[Number(c)] = vehicle;
      return {
        ...values,
        thirdPartyVehicle: {
          thirdPartyVehiclesInfo: newVehicle,
        },
      };
    });

    setInputsTouched((values) => {
      let trueVehicle = [...values.thirdPartyVehicle.thirdPartyVehiclesInfo];
      let vehicle = trueVehicle[Number(c)];

      vehicle[d as keyof onlyLicensePhotoTouched] = true;
      // trueVehicle[Number(c)] = injured;
      return {
        ...inputTouched,
        thirdPartyVehicle: {
          thirdPartyVehiclesInfo: trueVehicle,
        },
      };
    });

    setErrorsInputValues(
      validateAllReport({
        inputValues: {
          ...inputValues,
          thirdPartyVehicle: {
            thirdPartyVehiclesInfo: [
              ...inputValues.thirdPartyVehicle.thirdPartyVehiclesInfo,
            ],
          },
        },
        userActive,
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
        ...inputValues[type as keyof AllReportValues],
        [key]: schedule,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllReportValues],
        [key]: schedule,
      },
    });

    setErrorsInputValues(
      validateAllReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllReportValues],
            [key]: schedule,
          },
        },
        userActive,
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
        ...inputValues[type as keyof AllReportValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllReportValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateAllReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllReportValues],
            [key]: value,
          },
        },
        userActive,
        elementReportActive,
        reportActive,
      })
    );
  };

  const changeInputValuesArrayInjured = (
    type: string,
    name: string,
    value: string,
    key: string
  ) => {
    const [a, b, c, d] = name.split(".");

    setInputValues((values) => {
      let newInjured = [...values.thirdPartyInjured.injuredInfo];
      let injured = newInjured[Number(c)];
      injured[d as keyof withoutGender] = value;
      newInjured[Number(c)] = injured;
      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...values,
            thirdPartyInjured: {
              injuredInfo: [...values.thirdPartyInjured.injuredInfo],
            },
          },
          userActive,
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
    // setErrorsInputValues(
    //   validateAllReport({
    //     inputValues: {
    //       ...inputValues,
    //       thirdPartyInjured: {
    //         injuredInfo: [...inputValues.thirdPartyInjured.injuredInfo],
    //       },
    //     },
    //     userActive,
    //     elementReportActive,
    //     reportActive,
    //   })
    // );
  };

  const changeInputValuesArrayVehicles = (
    type: string,
    name: string,
    value: string | number,
    key: string
  ) => {
    const [a, b, c, d] = name.split(".");

    setInputValues((values) => {
      let newVehicle = [...values.thirdPartyVehicle.thirdPartyVehiclesInfo];
      let vehicle = newVehicle[Number(c)];
      vehicle[d as keyof withoutLicensePhoto] = value as never;
      newVehicle[Number(c)] = vehicle;

      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...inputValues,
            thirdPartyVehicle: {
              thirdPartyVehiclesInfo: [
                ...inputValues.thirdPartyVehicle.thirdPartyVehiclesInfo,
              ],
            },
          },
          userActive,
          elementReportActive,
          reportActive,
        })
      );
      return {
        ...values,
        thirdPartyVehicle: {
          thirdPartyVehiclesInfo: newVehicle,
        },
      };
    });

    setInputsTouched((values) => {
      let trueVehicle = [...values.thirdPartyVehicle.thirdPartyVehiclesInfo];
      let vehicle = trueVehicle[Number(c)];

      vehicle[d as keyof TouchedThirdPartyVehicleValues] = true;
      // trueVehicle[Number(c)] = injured;
      return {
        ...inputTouched,
        thirdPartyVehicle: {
          thirdPartyVehiclesInfo: trueVehicle,
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

    inputValues.thirdPartyVehicle.thirdPartyVehiclesInfo = [];

    // let cleanVehicleInfo: ThirdPartyVehicleValues[] = [];
    // const trueVehicleInfo: TouchedThirdPartyVehicleValues[] = [];
    setInputValues({
      ...inputValues,
      thirdPartyVehicle: {
        thirdPartyVehiclesInfo: [],
      },
    });

    setInputsTouched({
      ...inputTouched,
      thirdPartyVehicle: {
        thirdPartyVehiclesInfo: [],
      },
    });

    for (let i = 0; i < value; i++) {
      inputValues.thirdPartyVehicle.thirdPartyVehiclesInfo.push({
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
      inputTouched.thirdPartyVehicle.thirdPartyVehiclesInfo.push({
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
          ...inputValues[type as keyof AllReportValues],
          [key]: value,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof AllReportValues],
          [key]: true,
        },
      });

      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof AllReportValues],
              [key]: value,
            },
          },
          userActive,
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
        ...inputValues[type as keyof AllReportValues],
        [key]: numberValue,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof AllReportValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateAllReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof AllReportValues],
            [key]: numberValue,
          },
        },
        userActive,
        elementReportActive,
        reportActive,
      })
    );
  };

  const changeSelectValuesArrayInjured = (
    type: string,
    name: string,
    value: string,
    key: string
  ) => {
    const [a, b, c, d] = name.split(".");

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
          ...inputValues[type as keyof AllReportValues],
          [key]: value,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof AllReportValues],
          [key]: true,
        },
      });

      setErrorsInputValues(
        validateAllReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof AllReportValues],
              [key]: value,
            },
          },
          userActive,
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const {
    error: errorReportPersonalVehicleCrash,
    trigger: triggerReportPersonalVehicleCrash,
  } = useSWRMutation(PersonalVehicleCrashUrl, addReportPersonalVehicleCrash);

  const {
    error: errorReportPersonalVehicleTheft,
    trigger: triggerReportPersonalVehicleTheft,
  } = useSWRMutation(PersonalVehicleTheftUrl, addReportPersonalVehicleTheft);

  const {
    error: errorReportPersonalVehicleFire,
    trigger: triggerReportPersonalVehicleFire,
  } = useSWRMutation(PersonalVehicleFireUrl, addReportPersonalVehicleFire);

  const {
    error: errorReportLegalVehicleCrash,
    trigger: triggerReportLegalVehicleCrash,
  } = useSWRMutation(LegalPersonalVehicleCrashUrl, addReportLegalVehicleCrash);

  const {
    error: errorReportLegalVehicleTheft,
    trigger: triggerReportLegalVehicleTheft,
  } = useSWRMutation(
    LegalPersonalVehicleTheftUrl,
    addReportLegalPersonalVehicleTheft
  );

  const {
    error: errorReportLegalVehicleFire,
    trigger: triggerReportLegalVehicleFire,
  } = useSWRMutation(
    LegalPersonalVehicleFireUrl,
    addReportLegalPersonalVehicleFire
  );

  const {
    error: errorReportPersonalElectronicTheft,
    trigger: triggerReportPersonalElectronicTheft,
  } = useSWRMutation(
    PersonalElectronicTheftUrl,
    addReportPersonalElectronicTheft
  );

  const {
    error: errorReportLegalElectronicTheft,
    trigger: triggerReportLegalElectronicTheft,
  } = useSWRMutation(
    LegalPersonalElectronicTheftUrl,
    addReportLegalElectronicTheft
  );

  const triggers = {
    triggerReportPersonalVehicleCrash,
    triggerReportPersonalVehicleTheft,
    triggerReportPersonalVehicleFire,
    triggerReportLegalVehicleCrash,
    triggerReportLegalVehicleTheft,
    triggerReportLegalVehicleFire,
    triggerReportPersonalElectronicTheft,
    triggerReportLegalElectronicTheft,
  };

  const fetchErrors = [
    errorReportPersonalVehicleCrash,
    errorReportPersonalVehicleTheft,
    errorReportPersonalVehicleFire,
    errorReportLegalVehicleCrash,
    errorReportLegalVehicleTheft,
    errorReportLegalVehicleFire,
    errorReportPersonalElectronicTheft,
    errorReportLegalElectronicTheft,
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
      validateAllReport({
        inputValues,
        userActive,
        elementReportActive,
        reportActive,
      })
    );

    validationFormDataReport({
      inputValues,
      errorsInputValues,
      triggers,
      amountInjured,
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
    setUserActive,
    userActive,
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
    <ReportContext.Provider value={values}>{children}</ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReportContext can only be used inside ReportProvider");
  }

  return context;
};
