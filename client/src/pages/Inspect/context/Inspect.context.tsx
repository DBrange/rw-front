import useSWRMutation from "swr/mutation";
import {
  LegalElectronicUrl,
  LegalVehicleUrl,
  PersonalElectronicUrl,
  PersonalVehicleUrl,
  addInspectionLegalElectronic,
  addInspectionLegalVehicle,
  addInspectionPersonalElectronic,
  addInspectionPersonalVehicle,
} from "..";
import { useState, createContext, useContext, useEffect } from "react";
import {
  Control,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  useForm,
} from "react-hook-form";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive, VehicleApi } from "../../../models/interfaces";
import {
  AllInspectSchemas,
  SchemaElements,
  SchemaUsers,
} from "../../../models";
import {
  schemaPersonal,
  schemaVehicle,
  schemaElectronic,
  schemaLegalPersonal,
  schemaGnc,
  schemaPhone,
} from "../../../utilities";
import { validationFormDataInspect } from "../utilities";

export interface IInspectContext {
  userActiveForm: string;
  activeForm: string;
  errors: any; //FieldErrors<AllInspectSchemas>;
  selectFormUserSchema: (name: string) => void;
  submitData: (data: AllInspectSchemas) => void;
  selectFormSchema: (name: string) => void;
  handleSubmit: UseFormHandleSubmit<AllInspectSchemas, undefined>;
  register: UseFormRegister<any>;
  selectingSchema: () => void;
  touchedFields: FieldValues["touched"];
  userBtnActive: UserBtnActive;
  page: number;
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setValue: UseFormSetValue<AllInspectSchemas>;
  trigger: UseFormTrigger<AllInspectSchemas>;
  modalActive: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  control: Control<AllInspectSchemas>;
  setIsCheckedDamage: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedDamage: boolean;
  setIsCheckedGnc: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedGnc: boolean;
  setIsCheckedOkm: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedOkm: boolean;
  setIsPhone: React.Dispatch<React.SetStateAction<boolean>>;
  isPhone: boolean;
  setVehicleApi: React.Dispatch<React.SetStateAction<VehicleApi>>;
  vehicleApi: VehicleApi;
  setFormNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  formNotFound: boolean;
}

export const InspectContext = createContext<IInspectContext | undefined>(
  undefined
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const InspectProvider = ({ children }: ChildrenType) => {
  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  const [isCheckedGnc, setIsCheckedGnc] = useState<boolean>(false);
  const [isCheckedOkm, setIsCheckedOkm] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [formNotFound, setFormNotFound] = useState<boolean>(false);
  const [vehicleApi, setVehicleApi] = useState<VehicleApi>({
    brand: "",
    model: "",
    year: "",
  });

  const [activeForm, setActiveForm] = useState<string>("vehicle");
  const [page, setPage] = useState<number>(0);
  const [schema, setSchema] =
    useState<ZodType<AllInspectSchemas>>(schemaPersonal);
  const [userActiveForm, setUserActiveForm] = useState<string>("person");
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [userBtnActive, setuserBtnActive] = useState<UserBtnActive>({
    person: true,
    legal: false,
    vehicle: true,
    electronic: false,
  });

  const selectFormUserSchema = (name: string) => {
    setUserActiveForm(name);

    if (name === "person") {
      setuserBtnActive({
        ...userBtnActive,
        person: true,
        legal: false,
      });
    } else if (name === "legal") {
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
    let schemaUser: ZodType<SchemaUsers>;
    let schemaElement: ZodType<SchemaElements>;
    if (userActiveForm === "person") {
      schemaUser = schemaPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicle;
        estructuringSchema(schemaUser, schemaElement);
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        estructuringSchema(schemaUser, schemaElement);
      }
    } else if (userActiveForm === "legal") {
      schemaUser = schemaLegalPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicle;
        estructuringSchema(schemaUser, schemaElement);
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        estructuringSchema(schemaUser, schemaElement);
      }
    }
  };

  const changePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    if (value === "next") {
      setPage(page + 1);
    } else if (value === "back") {
      setPage(page - 1);
    }
  };

  const estructuringSchema = (
    schemaUser: any, //ZodType<SchemaUsers>
    schemaElement: any //ZodType<SchemaElements>
  ) => {
    let schema: any = schemaUser;
    if (page === 1) {
      schema = schema;
    } else if (page === 2) {
      if (activeForm === "vehicle") {
        if (isCheckedGnc) {
          schema = schemaUser.merge(schemaElement).merge(schemaGnc);
        } else {
          schema = schemaUser.merge(schemaElement);
        }
      } else if (activeForm === "electronic") {
        if (isPhone) {
          schema = schemaUser.merge(schemaElement).merge(schemaPhone);
        } else {
          schema = schemaUser.merge(schemaElement);
        }
      }
    }
    setSchema(schema);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    trigger,
    setValue,
    control,
  } = useForm<AllInspectSchemas>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    selectingSchema();

  }, [errors]);

  console.log(errors);

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

  const submitData: SubmitHandler<AllInspectSchemas> = (data) => {
    console.log("todo", data);
    validationFormDataInspect({
      userActiveForm,
      activeForm,
      setModalActive,
      data,
      triggers,
    });
  };

  const values: IInspectContext = {
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
    userBtnActive,
    page,
    changePage,
    setValue,
    trigger,
    modalActive,
    setIsError,
    isError,
    control,
    setIsCheckedDamage,
    isCheckedDamage,
    setIsCheckedGnc,
    isCheckedGnc,
    setIsCheckedOkm,
    isCheckedOkm,
    setIsPhone,
    isPhone,
    setVehicleApi,
    vehicleApi,
    setFormNotFound,
    formNotFound,
  };

  return (
    <InspectContext.Provider value={values}>{children}</InspectContext.Provider>
  );
};

export const useInspectContext = () => {
  const context = useContext(InspectContext);
  if (!context)
    throw new Error(
      "useInspectContext can only be used inside InspectProvider"
    );

  return context;
};
