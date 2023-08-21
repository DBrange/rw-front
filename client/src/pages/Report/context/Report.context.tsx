import useSWRMutation from "swr/mutation";
import {
  Control,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive, VehicleApi } from "../../../models/interfaces";
import { useState, createContext, useContext, useEffect } from "react";
import { TypeComplaintForm } from "../interfaces";
import { FormInjuredInfoData, FormThirdPartyVehiclesData } from "../..";
import { FormEffectOpenClose, PageButton } from "../../../components";
import { AllReportSchemas } from "../../../models";
import {
  schemaVehicleCrashReport,
  schemaPersonal,
  schemaVehicleTheftReport,
  schemaVehicleFireReport,
  schemaElectronic,
  schemaLegalPersonal,
  schemaVehicleReport,
  schemaThirdInjured,
  schemaVehicleCrashReportData,
  schemaGnc,
  schemaPhone,
  schemaIsTire,
  schemaElectronicTheftReport,
} from "../../../utilities";
import { validationFormDataReport } from "../utilities";
import {
  LegalElectronicTheftUrl,
  LegalPersonalVehicleFireUrl,
  LegalPersonalVehicleTheftUrl,
  LegalVehicleCrashUrl,
  PersonalElectronicTheftUrl,
  PersonalVehicleCrashUrl,
  PersonalVehicleFireUrl,
  PersonalVehicleTheftUrl,
  addReportLegalElectronicTheft,
  addReportLegalPersonalVehicleFire,
  addReportLegalPersonalVehicleTheft,
  addReportLegalVehicleCrash,
  addReportPersonalElectronicTheft,
  addReportPersonalVehicleCrash,
  addReportPersonalVehicleFire,
  addReportPersonalVehicleTheft,
} from "../services";

export interface IReportContext {
  userActiveForm: string;
  activeForm: string;
  errors: any;
  submitData: (data: AllReportSchemas) => void;
  selectFormUserSchema: (name: string) => void;
  selectFormSchema: (name: string) => void;
  handleSubmit: UseFormHandleSubmit<AllReportSchemas, undefined>;
  register: UseFormRegister<any>;
  selectingSchema: () => void;
  touchedFields: FieldValues["touched"];
  typeComplaintForm: TypeComplaintForm;
  typeComplaint: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
  userBtnActive: UserBtnActive;
  thirdInjuredForm: () => JSX.Element | null;
  setValue: UseFormSetValue<AllReportSchemas>;
  setAmountValue: (value: React.SetStateAction<number>) => void;
  amountValue: number;
  modalActive: boolean;
  isError: boolean;
  control: Control<AllReportSchemas>;
  setAmountVehicles: React.Dispatch<React.SetStateAction<number>>;
  amountVehicles: number;
  thirdPartyVehiclesForm: () => JSX.Element | undefined;
  setIsCheckedDamage: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedDamage: boolean;
  setIsCheckedGnc: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedGnc: boolean;
  setIsPhone: React.Dispatch<React.SetStateAction<boolean>>;
  isPhone: boolean;
  setIsCheckedOwner: React.Dispatch<
    React.SetStateAction<Record<string, boolean> | undefined>
  >;
  isCheckedOwner: Record<string, boolean> | undefined;
  setIsTire: React.Dispatch<React.SetStateAction<boolean>>;
  isTire: boolean;
  setIsCheckedThirdInjuried: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedThirdInjuried: boolean;
  setVehicleApi: React.Dispatch<React.SetStateAction<VehicleApi>>;
  vehicleApi: VehicleApi;
  trigger: any;
  setFormNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  formNotFound: boolean;
}

export const ReportContext = createContext<IReportContext | undefined>(
  undefined
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ReportProvider = ({ children }: ChildrenType) => {
  const [isCheckedThirdInjuried, setIsCheckedThirdInjuried] =
    useState<boolean>(false);
  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  const [isCheckedGnc, setIsCheckedGnc] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isCheckedOwner, setIsCheckedOwner] =
    useState<Record<string, boolean>>();
  const [isTire, setIsTire] = useState<boolean>(false);
  const [formNotFound, setFormNotFound] = useState(false);
  const [vehicleApi, setVehicleApi] = useState<VehicleApi>({
    brand: "",
    model: "",
    year: "",
  });

  const [activeForm, setActiveForm] = useState<string>("vehicle");
  const [userActiveForm, setUserActiveForm] = useState<string>("person");
  const [schema, setSchema] =
    useState<ZodType<AllReportSchemas>>(schemaPersonal);
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
    crash: false,
    theft: true,
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
          schemaComplaintType = schemaElectronicTheftReport;
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

  const thirdInjuredForm = (): JSX.Element | null => {
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
      return null;
    }
  };

  const thirdPartyVehiclesForm = () => {
    let vehicles: JSX.Element[] = [];

    if (amountVehicles > 0) {
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
    } else if (amountVehicles === 0) {
      for (let i = 0; i < 1; i++) {
        vehicles.push(
          <FormThirdPartyVehiclesData key={i + 1} vehicles={i + 1} />
        );
      }

      return (
        <FormEffectOpenClose
          formName={"Vehiculos de terceros"}
          isActive={
            typeComplaintForm.crash && page === 6 && amountVehicles === 0
          }
          form={
            <>
              {vehicles}
              <PageButton changePage={changePage} page={page} max={6} />
            </>
          }
        />
      );
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

  const estructuringSchema = (
    schemaUser: any, //ZodType<SchemaUsers>
    schemaElement: any, //ZodType<SchemaElements>
    schemaComplaintType: any //ZodType<SchemaComplaint>
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
      setIsCheckedThirdInjuried(false);
    } else if (page === 4) {
      if (isTire && typeComplaintForm.theft) {
        if (isCheckedGnc) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaGnc)
            .merge(schemaIsTire);
        } else {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaIsTire);
        }
      } else {
        if (isPhone) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaPhone);
        } else if (isCheckedGnc) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaGnc);
        } else {
          schema = schemaUser.merge(schemaElement).merge(schemaComplaintType);
        }
      }
    } else if (page === 5 && amountValue) {
      if (isCheckedGnc) {
        schema = schemaUser
          .merge(schemaElement)
          .merge(schemaComplaintType)
          .merge(schemaGnc)
          .merge(schemaThirdInjured);
      } else {
        schema = schemaUser
          .merge(schemaElement)
          .merge(schemaComplaintType)
          .merge(schemaThirdInjured);
      }
    } else if (page === 6) {
      if (isCheckedGnc) {
        if (!amountValue && amountVehicles > 0) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaGnc)
            .merge(schemaVehicleCrashReportData);
        } else if (amountValue && amountVehicles > 1) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaGnc)
            .merge(schemaThirdInjured)
            .merge(schemaVehicleCrashReportData);
        } else if (!amountValue && !amountVehicles) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaGnc)
            .merge(schemaVehicleCrashReportData);
        } else if (amountValue && !amountVehicles) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaGnc)
            .merge(schemaThirdInjured)
            .merge(schemaVehicleCrashReportData);
        }
      } else {
        if (!amountValue && amountVehicles > 0) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaVehicleCrashReportData);
        } else if (amountValue && amountVehicles > 1) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdInjured)
            .merge(schemaVehicleCrashReportData);
        } else if (!amountValue && !amountVehicles) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaVehicleCrashReportData);
        } else if (amountValue && !amountVehicles) {
          schema = schemaUser
            .merge(schemaElement)
            .merge(schemaComplaintType)
            .merge(schemaThirdInjured)
            .merge(schemaVehicleCrashReportData);
        }
      }
    }
    setSchema(schema);
  };

  const {
    error: erroReportPersonalVehicleCrash,
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
  } = useSWRMutation(LegalVehicleCrashUrl, addReportLegalVehicleCrash);

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
  } = useSWRMutation(LegalElectronicTheftUrl, addReportLegalElectronicTheft);

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
    erroReportPersonalVehicleCrash,
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

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    setValue,
    trigger,
    control,
  } = useForm<AllReportSchemas>({
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

  const submitData = (data: AllReportSchemas) => {
    console.log("todo", data);

    validationFormDataReport({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      amountValue,
      triggers,
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
    isTire,
    setIsTire,
    setIsCheckedThirdInjuried,
    isCheckedThirdInjuried,
    setVehicleApi,
    vehicleApi,
    trigger,
    setFormNotFound,
    formNotFound,
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
