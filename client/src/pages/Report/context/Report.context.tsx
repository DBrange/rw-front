import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive } from "../../../interfaces";
import { useState, createContext, useContext, useEffect } from "react";
import { TypeComplaintForm } from "../interfaces";
import { FormInjuredInfoData, FormThirdPartyVehiclesData } from "../..";
import { FormEffectOpenClose, PageButton } from "../../../components";
import {
  SchemaPersonalType,
  SchemaLegalPersonalType,
  schemaVehicleReportType,
  SchemaElectronicType,
  SchemaVehicleCrashReportData,
  SchemaVehicleCrashReportDataNotOwner,
} from "../../../models";
import {
  schemaVehicleCrashReport,
  schemaPersonal,
  schemaVehicleTheftReport,
  schemaVehicleFireReport,
  schemaElectronic,
  schemaLegalPersonal,
  schemaThirdPartyVehicleReport,
  schemaVehicleReport,
  schemaThirdInjured,
  schemaVehicleCrashReportData,
  schemaGnc,
  schemaPhone,
  schemaNotOwner,
  schemaVehicleCrashReportDataNotOwner,
} from "../../../utilities";
import { validationFormDataReport } from "../utilities";

type AllTypes =
  | SchemaPersonalType
  | SchemaLegalPersonalType
  | schemaVehicleReportType
  | SchemaElectronicType;

export interface IReportContext {
  userActiveForm: string;
  activeForm: string;
  errors: any;
  submitData: (data: AllTypes) => void;
  selectFormUserSchema: (name: string) => void;
  selectFormSchema: (name: string) => void;
  handleSubmit: any;
  register: any;
  selectingSchema: () => void;
  touchedFields: any;
  typeComplaintForm: TypeComplaintForm;
  typeComplaint: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
  userBtnActive: UserBtnActive;
  thirdInjuredForm: () => any;
  setValue: any;
  setAmountValue: (value: React.SetStateAction<number>) => void;
  amountValue: number;
  modalActive: boolean;
  isError: boolean;
  control: any;
  trigger: any;
  setAmountVehicles: any;
  amountVehicles: number;
  thirdPartyVehiclesForm: () => any;
  setIsCheckedDamage: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedDamage: boolean;
  setIsCheckedGnc: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedGnc: boolean;
  setIsPhone: React.Dispatch<React.SetStateAction<boolean>>;
  isPhone: boolean;
  setIsCheckedOwner: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedOwner: boolean;
  setIsCheckedOwnerObj: React.Dispatch<
    React.SetStateAction<Record<string, boolean> | undefined>
  >;
  isCheckedOwnerObj: Record<string, boolean> | undefined;
}

export const ReportContext = createContext<IReportContext | undefined>(
  undefined
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ReportProvider = ({ children }: ChildrenType) => {
  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  const [isCheckedGnc, setIsCheckedGnc] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isCheckedOwner, setIsCheckedOwner] = useState<boolean>(false);
  const [isCheckedOwnerObj, setIsCheckedOwnerObj] =
    useState<Record<string, boolean>>();
  console.log(isCheckedOwnerObj);

  const [activeForm, setActiveForm] = useState<string>("vehicle");
  const [userActiveForm, setUserActiveForm] = useState<string>("person");
  const [schema, setSchema] = useState<any>(schemaPersonal);
  const [amountValue, setAmountValue] = useState<number>(0);
  const [amountVehicles, setAmountVehicles] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [userBtnActive, setuserBtnActive] = useState<UserBtnActive>({
    person: true,
    legal: false,
    vehicle: true,
    electronic: false,
  });
  const [typeComplaintForm, setTypeComplaitForm] = useState<TypeComplaintForm>({
    crash: true,
    theft: false,
    fire: false,
  });

  const typeComplaint = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { value } = e.currentTarget;
    setTypeComplaitForm({
      crash: false,
      theft: false,
      fire: false,
      [value]: true,
    });
  };

  const selectFormUserSchema = (name: string) => {
    setUserActiveForm(name);
    if (name === "person") {
      setuserBtnActive({
        ...userBtnActive,
        person: true,
        legal: false,
      });
    } else {
      setuserBtnActive({
        ...userBtnActive,
        person: false,
        legal: true,
      });
    }
  };

  const selectFormSchema = (name: string) => {
    setActiveForm(name);

    if (name === "vehicle") {
      setuserBtnActive({
        ...userBtnActive,
        vehicle: true,
        electronic: false,
      });
    } else {
      setuserBtnActive({
        ...userBtnActive,
        vehicle: false,
        electronic: true,
      });
    }
  };

  const selectingSchema = () => {
    let schemaUser: ZodType;
    let schemaElement: ZodType;
    let schemaComplaintType: ZodType;
    if (userActiveForm === "person") {
      schemaUser = schemaPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicleReport;
        estructuringSchema(schemaUser, schemaElement, schemaVehicleCrashReport);
        if (typeComplaintForm.crash) {
          schemaComplaintType = schemaVehicleCrashReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        } else if (typeComplaintForm.theft) {
          schemaComplaintType = schemaVehicleTheftReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        } else if (typeComplaintForm.fire) {
          schemaComplaintType = schemaVehicleFireReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        }
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        estructuringSchema(schemaUser, schemaElement, schemaVehicleCrashReport);
        if (typeComplaintForm.theft) {
          schemaComplaintType = schemaVehicleTheftReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        }
      }
    } else if (userActiveForm === "legal") {
      schemaUser = schemaLegalPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicleReport;
        estructuringSchema(schemaUser, schemaElement, schemaVehicleCrashReport);
        if (typeComplaintForm.crash) {
          schemaComplaintType = schemaVehicleCrashReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        } else if (typeComplaintForm.theft) {
          schemaComplaintType = schemaVehicleTheftReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        } else if (typeComplaintForm.fire) {
          schemaComplaintType = schemaVehicleFireReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        }
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        estructuringSchema(schemaUser, schemaElement, schemaVehicleCrashReport);
        if (typeComplaintForm.theft) {
          schemaComplaintType = schemaVehicleTheftReport;
          estructuringSchema(schemaUser, schemaElement, schemaComplaintType);
        }
      }
    }
  };

  const thirdInjuredForm = () => {
    let people: JSX.Element[] = [];

    if (amountValue > 0) {
      for (let i = 0; i < amountValue; i++) {
        people.push(<FormInjuredInfoData key={i + 1} people={i + 1} />);
      }

      return (
        <FormEffectOpenClose
          formName={"Terceros lesionados"}
          isActive={
            (typeComplaintForm.crash || typeComplaintForm.fire) && page === 5
          }
          form={
            <>
              {people}
              <PageButton
                changePage={changePage}
                page={page}
                max={typeComplaintForm.crash ? 6 : 5}
              />
            </>
          }
        />
      );
    } else {
      return;
    }
  };

const tupleForArr = () => {
  type ValidationsType = ZodType<
    SchemaVehicleCrashReportData | SchemaVehicleCrashReportDataNotOwner
  >[];

  let validations: ValidationsType = [];

  for (const bol in isCheckedOwnerObj) {
    console.log(isCheckedOwnerObj[bol], "bol");
    const positionInArr = Number(bol.split("")[0]);

    if (isCheckedOwnerObj[bol]) {
      validations[positionInArr] = schemaVehicleCrashReportDataNotOwner;
    } else {
      validations[positionInArr] = schemaVehicleCrashReportData;
    }
  }

  const tuple = z.union(
    validations as unknown as readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]
  );

   return tuple
};


  const thirdPartyVehiclesForm = () => {
    let vehicles: JSX.Element[] = [];

    if (amountVehicles > 1) {
      for (let i = 0; i < amountVehicles; i++) {
        vehicles.push(
          <FormThirdPartyVehiclesData key={i + 1} vehicles={i + 1} />
        );
      }

      return (
        <FormEffectOpenClose
          formName={"Vehiculos de terceros"}
          isActive={typeComplaintForm.crash && page === 6 && amountVehicles > 0}
          form={
            <>
              {vehicles}
              <PageButton changePage={changePage} page={page} max={6} />
            </>
          }
        />
      );
    } else {
      return null;
    }
  };

  const changePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    if (value === "next") {
      if (page === 4 && !amountValue) {
        setPage(page + 2);
      } else {
        setPage(page + 1);
      }
    } else if (value === "back") {
      if (page === 6 && !amountValue) {
        setPage(page - 2);
      } else {
        setPage(page - 1);
      }
    }
  };

  const estructuringSchema = <T extends ZodTypeAny>(
    schemaUser: any,
    schemaElement: any,
    schemaComplaintType: any
  ) => {
    let schema: any = schemaUser;
    if (page === 1) {
      schema = schemaUser;
    } else if (page === 2) {
      if (activeForm === "vehicle") {
        if (isCheckedGnc) {
          schema = schema.merge(schemaElement).merge(schemaGnc);
        } else {
          schema = schema.merge(schemaElement);
        }
      } else if (activeForm === "electronic") {
        if (isPhone) {
          schema = schema.merge(schemaElement).merge(schemaPhone);
        } else {
          schema = schema.merge(schemaElement);
        }
      }
    } else if (page === 3) {
      schema = schemaUser.merge(schemaElement).merge(schemaComplaintType);
      setAmountVehicles(0);
      setAmountValue(0);
    } else if (page === 4) {
      schema = schemaUser.merge(schemaElement).merge(schemaComplaintType);
    } else if (page === 5 && amountValue) {
      schema = schemaUser
        .merge(schemaElement)
        .merge(schemaComplaintType)
        .merge(schemaThirdInjured);
    } else if (page === 6) {
      if (isCheckedOwner && amountVehicles < 2) {
        if (amountValue) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdInjured)
            .merge(schemaThirdPartyVehicleReport)
            .merge(schemaNotOwner);
        } else if (!amountValue && !amountVehicles) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdPartyVehicleReport)
            .merge(schemaNotOwner);
        }
      } else if (!isCheckedOwner && amountVehicles < 2) {
        if (amountValue) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdInjured)
            .merge(schemaThirdPartyVehicleReport);
        } else if (!amountValue) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdPartyVehicleReport);
        }
      } else if (amountVehicles > 1) {
        if (amountValue) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdInjured)
            .merge(schemaVehicleCrashReportData); // como hago para darme cuenta si es reportdata o reportdatanotowner
          // .merge(schemaNotOwner);
        } else if (!amountValue && !amountVehicles) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaVehicleCrashReportData);
          // .merge(schemaNotOwner);
        }
      }

      // ----
      // if (isCheckedOwner) {
      //   if (amountValue && amountVehicles < 2) {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaThirdInjured)
      //       .merge(schemaThirdPartyVehicleReport)
      //       .merge(schemaNotOwner);
      //   } else if (!amountValue && amountVehicles > 1) {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaVehicleCrashReportDataNotOwner);
      //   } else if (amountValue && amountVehicles > 1) {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaThirdInjured)
      //       .merge(schemaVehicleCrashReportDataNotOwner);
      //   } else {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaThirdPartyVehicleReport)
      //       .merge(schemaNotOwner);
      //   }
      // } else {
      //   if (amountValue && amountVehicles < 2) {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaThirdInjured)
      //       .merge(schemaThirdPartyVehicleReport);
      //   } else if (!amountValue && amountVehicles > 1) {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaVehicleCrashReportData);
      //   } else if (amountValue && amountVehicles > 1) {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaThirdInjured)
      //       .merge(schemaVehicleCrashReportData);
      //   } else {
      //     schema = schemaUser
      //       .merge(schemaElement)
      //       .merge(schemaComplaintType)
      //       .merge(schemaThirdPartyVehicleReport);
      //   }
      // }
    }
    setSchema(schema);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    setValue,
    trigger,
    control,
  } = useForm<any>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    selectingSchema();
    if (modalActive) {
      setIsError(true);
    } else {
      setIsError(true);
    }
  }, [errors]);
  console.log(errors);

  const submitData = (data: AllTypes) => {
    console.log("todo", data);

    validationFormDataReport({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      amountValue,
    });
  };

  const values = {
    userActiveForm,
    activeForm,
    errors,
    submitData,
    selectFormUserSchema,
    selectFormSchema,
    handleSubmit,
    register,
    selectingSchema,
    touchedFields,
    typeComplaintForm,
    typeComplaint,
    changePage,
    page,
    userBtnActive,
    thirdInjuredForm,
    setValue,
    setAmountValue,
    amountValue,
    modalActive,
    isError,
    control,
    trigger,
    setAmountVehicles,
    amountVehicles,
    thirdPartyVehiclesForm,
    setIsCheckedDamage,
    isCheckedDamage,
    setIsCheckedGnc,
    isCheckedGnc,
    setIsPhone,
    isPhone,
    setIsCheckedOwner,
    isCheckedOwner,
    setIsCheckedOwnerObj,
    isCheckedOwnerObj,
  };

  return (
    <ReportContext.Provider value={values}>{children}</ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context)
    throw new Error("useReportContext can only be used inside ReportProvider");

  return context;
};
