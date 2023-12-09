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
import {
  ClientCreateReportValues,
  ErrorsClientCreateReportValues,
  TouchedClientCreateReportValues,
  validateClientCreateReport,
} from "@/pages/private";
import { AppStore } from "@/redux";
import {
  touchedAllCrashVehiclesValuesTrue,
  touchedAllThirdPartyInjuredValuesTrue,
  touchedCrashVehicleValuesTrue,
  touchedDamageElectronicValuesTrue,
  touchedDamageVehiclesValuesTrue,
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
import { useParams } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import {
  addReportVehicleCrash,
  addReportVehicleDamage,
  addReportVehicleFire,
  addReportVehicleTheft,
  reportInClientUserCrashUrl,
  reportInClientUserDamageUrl,
  reportInClientUserFireUrl,
  reportInClientUserTheftUrl,
} from "..";
import {
  emptyClientCreateReportValues,
  touchedClientCreateReportValues,
} from "../../../utilities/client-create-report/objects-client-create-report.utility";
import { validationFormDataReportClient } from "../utilities/validation-form-data-report.utility";
import {
  IClientCreateReportContext,
  emptyClientCreateReportContext,
} from "./empty-ClientCreatesReport-context";

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

const ClientCreateReportContext = createContext<IClientCreateReportContext>(
  emptyClientCreateReportContext
);

export const ClientCreateReportProvider = ({ children }: ChildrenType) => {
  const [inputValues, setInputValues] = useState<ClientCreateReportValues>(
    emptyClientCreateReportValues
  );

  const [inputTouched, setInputsTouched] =
    useState<TouchedClientCreateReportValues>(touchedClientCreateReportValues);

  const [errorsInputValues, setErrorsInputValues] = useState<
    Partial<ErrorsClientCreateReportValues> | undefined
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
    damage: false,
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

      return creatingThirdParty("Terceros heridos", 4, reportType, people);
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

      const correspondingPage = amountInjured > 0 ? 5 : 4;

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
    } else if (
      value === "theft" ||
      value === "fire" ||
      value === "crash" ||
      value === "damage"
    ) {
      setReportActive({
        theft: value === "theft",
        fire: value === "fire",
        crash: value === "crash",
        damage: value === "damage",
      });
    }
  };

  const partialErrors = (): boolean => {
    const withoutGncPhoneErrors: boolean =
      (validate(errorsInputValues?.vehicleReport) && page === 1) ||
      (validate(errorsInputValues?.electronic) && page === 1);

    const withGncErrors: boolean =
      (validate(errorsInputValues?.gnc) ||
        validate(errorsInputValues?.vehicleReport)) &&
      page === 1;

    const withPhoneErrors: boolean =
      (validate(errorsInputValues?.phone) ||
        validate(errorsInputValues?.electronic)) &&
      page === 1;

    const withoutTireTheftErrors: boolean =
      (validate(errorsInputValues?.theftVehicle) && page === 3) ||
      // (validate(errorsInputValues?.theftElectronic) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const electronicTheft: boolean =
      (validate(errorsInputValues?.theftElectronic) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const withTireTheftErrors: boolean =
      ((validate(errorsInputValues?.theftVehicle) ||
        validate(errorsInputValues?.isTire)) &&
        page === 3) ||
      // ((validate(errorsInputValues?.theftElectronic) ||
      //   validate(errorsInputValues?.isTire)) &&
      //   page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const vehicleDamageErrors: boolean =
      (validate(errorsInputValues?.damageVehicle) && page === 3) ||
      // (validate(errorsInputValues?.damageElectronic) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const electronicDamageErrors: boolean =
      (validate(errorsInputValues?.damageElectronic) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const withoutThirdPartyInjuredFireErrors: boolean =
      (validate(errorsInputValues?.fire) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const withThirdPartyInjuredFireErrors: boolean =
      (validate(errorsInputValues?.fire) && page === 3) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 4) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 5);

    const withoutThirdPartyInjuredAndVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 3) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 4);

    const withThirdPartyInjuredCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 3) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 4) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 5);

    const withThirdPartyVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 3) ||
      (errorsInputValues?.thirdPartyVehicle?.thirdPartyVehicleInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 4) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 5);

    const withThirdPartyInjuredAndVehicleCrashErrors: boolean =
      (validate(errorsInputValues?.crash) && page === 3) ||
      (errorsInputValues?.thirdPartyInjured?.injuredInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 4) ||
      (errorsInputValues?.thirdPartyVehicle?.thirdPartyVehicleInfo
        ?.map((el) => validate(el))
        .some((el) => el === true) &&
        page === 5) ||
      (validate(errorsInputValues?.swornDeclaration) && page === 6);

    let errors: boolean = false;

    if (elementReportActive.vehicleReport) {
      //theft vehicle
      if (
        !inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        !inputValues.theftVehicle.isTire
      ) {
        errors = withoutGncPhoneErrors || withoutTireTheftErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        !inputValues.theftVehicle.isTire
      ) {
        errors = withGncErrors || withoutTireTheftErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        inputValues.theftVehicle.isTire
      ) {
        errors = withoutGncPhoneErrors || withTireTheftErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.theft &&
        inputValues.theftVehicle.isTire
      ) {
        errors = withGncErrors || withTireTheftErrors;
      }

      //damage vehicle
      if (!inputValues.vehicleReport.gnc && reportActive.damage) {
        errors = withoutGncPhoneErrors || vehicleDamageErrors;
      } else if (inputValues.vehicleReport.gnc && reportActive.damage) {
        errors = withGncErrors || vehicleDamageErrors;
      }

      //fire vehicle
      if (
        !inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        !amountInjured
      ) {
        errors = withoutGncPhoneErrors || withoutThirdPartyInjuredFireErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        !amountInjured
      ) {
        errors = withGncErrors || withoutThirdPartyInjuredFireErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        amountInjured
      ) {
        errors = withoutGncPhoneErrors || withThirdPartyInjuredFireErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.fire &&
        amountInjured
      ) {
        errors = withGncErrors || withThirdPartyInjuredFireErrors;
      }

      //crahs vehicle
      if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        !amountVehicles
      ) {
        errors =
          withoutGncPhoneErrors ||
          withoutThirdPartyInjuredAndVehicleCrashErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        !amountVehicles
      ) {
        errors = withoutGncPhoneErrors || withThirdPartyInjuredCrashErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        amountVehicles
      ) {
        errors = withoutGncPhoneErrors || withThirdPartyVehicleCrashErrors;
      } else if (
        !inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        amountVehicles
      ) {
        errors =
          withoutGncPhoneErrors || withThirdPartyInjuredAndVehicleCrashErrors;
        //abajo
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        !amountVehicles
      ) {
        errors = withGncErrors || withThirdPartyInjuredCrashErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        amountVehicles
      ) {
        errors = withGncErrors || withThirdPartyVehicleCrashErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        amountInjured &&
        amountVehicles
      ) {
        errors = withGncErrors || withThirdPartyInjuredAndVehicleCrashErrors;
      } else if (
        inputValues.vehicleReport.gnc &&
        reportActive.crash &&
        !amountInjured &&
        !amountVehicles
      ) {
        errors = withGncErrors || withoutThirdPartyInjuredAndVehicleCrashErrors;
      }
    } else if (elementReportActive.electronic) {
      // theft electronic
      if (
        !(inputValues.electronic.type === "CELULAR") &&
        reportActive.theft &&
        !inputValues.theftElectronic.isTire
      ) {
        errors = withoutGncPhoneErrors || electronicTheft;
      } else if (
        inputValues.electronic.type === "CELULAR" &&
        reportActive.theft &&
        !inputValues.theftElectronic.isTire
      ) {
        errors = withPhoneErrors || electronicTheft;
      }

      //damage electronic

      if (
        !(inputValues.electronic.type === "CELULAR") &&
        reportActive.damage 
      ) {
        errors = withoutGncPhoneErrors || electronicDamageErrors;
      } else if (
        inputValues.electronic.type === "CELULAR" &&
        reportActive.damage 
      ) {
        errors = withPhoneErrors || electronicDamageErrors;
      }
    }

    return errors;
  };

  const typeOfToucheds = (): TouchedForms => {
    let toucheds: TouchedForms;
    toucheds =
      (elementReportActive.vehicleReport && page === 1 && "vehicleReport") ||
      (elementReportActive.electronic && page === 1 && "electronic") ||
      (reportActive.theft && page === 3 && "theftVehicle") ||
      (reportActive.theft && page === 3 && "theftElectronic") ||
      (reportActive.damage && page === 3 && "damageVehicle") ||
      (reportActive.damage && page === 3 && "damageElectronic") ||
      (reportActive.fire && page === 3 && "fire") ||
      (reportActive.fire &&
        page === 4 &&
        amountInjured > 0 &&
        "thirdPartyInjured") ||
      (reportActive.crash && page === 3 && "crash") ||
      (reportActive.crash &&
        page === 4 &&
        amountInjured > 0 &&
        "thirdPartyInjured") ||
      (reportActive.crash &&
        page === 4 &&
        amountInjured < 1 &&
        amountVehicles > 0 &&
        "thirdPartyVehicle") ||
      (reportActive.crash &&
        page === 5 &&
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
    } else if (typeOfToucheds === "damageVehicle") {
      values = touchedDamageVehiclesValuesTrue;
    } else if (typeOfToucheds === "damageElectronic") {
      values = touchedDamageElectronicValuesTrue;
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
        ...touchedClientCreateReportValues,
        thirdPartyInjured: {
          injuredInfo: inputTouched.thirdPartyInjured.injuredInfo.map(
            () => touchedThirdPartyInjuredTrue
          ),
        },
      });
    } else if (typeOfToucheds() === "thirdPartyVehicle") {
      setInputsTouched({
        ...touchedClientCreateReportValues,
        thirdPartyVehicle: {
          thirdPartyVehicleInfo:
            inputTouched.thirdPartyVehicle.thirdPartyVehicleInfo.map(
              () => touchedThirdPartyVehicleValuesTrue
            ),
        },
      });
    } else {
      setInputsTouched({
        ...touchedClientCreateReportValues,
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
          ...inputValues[type as keyof ClientCreateReportValues],
          [key]: checked,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientCreateReportValues],
          [key]: checked,
        },
      });

      setErrorsInputValues(
        validateClientCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientCreateReportValues],
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
        validateClientCreateReport({
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
          ...inputValues[type as keyof ClientCreateReportValues],
          [key]: [...images],
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientCreateReportValues],
          [key]: [...images],
        },
      });

      setErrorsInputValues(
        validateClientCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientCreateReportValues],
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
      validateClientCreateReport({
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
        ...inputValues[type as keyof ClientCreateReportValues],
        [key]: schedule,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateReportValues],
        [key]: schedule,
      },
    });

    setErrorsInputValues(
      validateClientCreateReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateReportValues],
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
        ...inputValues[type as keyof ClientCreateReportValues],
        [key]: value,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateReportValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientCreateReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateReportValues],
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
        validateClientCreateReport({
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
        validateClientCreateReport({
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
          ...inputValues[type as keyof ClientCreateReportValues],
          [key]: value,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientCreateReportValues],
          [key]: true,
        },
      });

      setErrorsInputValues(
        validateClientCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientCreateReportValues],
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
        ...inputValues[type as keyof ClientCreateReportValues],
        [key]: numberValue,
      },
    });

    setInputsTouched({
      ...inputTouched,
      [type]: {
        ...inputTouched[type as keyof ClientCreateReportValues],
        [key]: true,
      },
    });

    setErrorsInputValues(
      validateClientCreateReport({
        inputValues: {
          ...inputValues,
          [type]: {
            ...inputValues[type as keyof ClientCreateReportValues],
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
          ...inputValues[type as keyof ClientCreateReportValues],
          [key]: value,
        },
      });

      setInputsTouched({
        ...inputTouched,
        [type]: {
          ...inputTouched[type as keyof ClientCreateReportValues],
          [key]: true,
        },
      });

      setErrorsInputValues(
        validateClientCreateReport({
          inputValues: {
            ...inputValues,
            [type]: {
              ...inputValues[type as keyof ClientCreateReportValues],
              [key]: value,
            },
          },
          elementReportActive,
          reportActive,
        })
      );
    }
  };

  const { clientId } = useParams();
  const user = useSelector((store: AppStore) => store.user);

  const selectBrokerUrl = user.user?.userBroker
    ? user.user?.id
    : user.user?.brokerUser?.id;
  const selectClientUrl = user.user?.userBroker ? clientId : user?.user?.id;

  const { error: errorReportVehicleTheft, trigger: triggerReportVehicleTheft } =
    useSWRMutation(
      reportInClientUserTheftUrl(selectBrokerUrl, selectClientUrl),
      addReportVehicleTheft
    );

  const { error: errorReportVehicleDamage, trigger: triggerReportVehicleDamage } =
    useSWRMutation(
      reportInClientUserDamageUrl(selectBrokerUrl, selectClientUrl),
      addReportVehicleDamage
    );

  const { error: errorReportVehicleFire, trigger: triggerReportVehicleFire } =
    useSWRMutation(
      reportInClientUserFireUrl(selectBrokerUrl, selectClientUrl),
      addReportVehicleFire
    );

  const { error: errorReportVehicleCrash, trigger: triggerReportVehicleCrash } =
    useSWRMutation(
      reportInClientUserCrashUrl(selectBrokerUrl, selectClientUrl),
      addReportVehicleCrash
    );

  const triggers = {
    triggerReportVehicleCrash,
    triggerReportVehicleTheft,
    triggerReportVehicleDamage,
    triggerReportVehicleFire,
  };

  const fetchErrors = [
    errorReportVehicleCrash,
    errorReportVehicleTheft,
    errorReportVehicleDamage,
    errorReportVehicleFire,
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
      validateClientCreateReport({
        inputValues,
        elementReportActive,
        reportActive,
      })
    );
  }, [page]);

  console.log(inputValues);
  const submitValues = (e: SubmitEventType) => {
    e.preventDefault();
    setErrorsInputValues(
      validateClientCreateReport({
        inputValues,
        elementReportActive,
        reportActive,
      })
    );

    validationFormDataReportClient({
      inputValues,
      errorsInputValues,
      triggers,
      amountInjured,
      user,
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
    <ClientCreateReportContext.Provider value={values}>
      {children}
    </ClientCreateReportContext.Provider>
  );
};

export const useClientCreateReportContext = () => {
  const context = useContext(ClientCreateReportContext);

  if (!context) {
    throw new Error(
      "useClientCreateReportContext can only be used inside ClientCreateReportProvider"
    );
  }

  return context;
};
