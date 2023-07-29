import { useState, createContext, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive } from "../../../interfaces";
import {
  SchemaPersonalType,
  SchemaLegalPersonalType,
  SchemaVehicle,
  SchemaElectronic,
} from "../../../models";
import {
  schemaPersonal,
  schemaVehicle,
  schemaElectronic,
  schemaLegalPersonal,
} from "../../../utilities";
import { validationFormDataInspect } from "../utilities";

type AllTypes =
  | SchemaPersonalType
  | SchemaLegalPersonalType
  | SchemaVehicle
  | SchemaElectronic;

export interface IInspectContext {
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
  userBtnActive: UserBtnActive;
  page: number;
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setValue: any;
  trigger: any;
  modalActive: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  control: any
}

export const InspectContext = createContext<IInspectContext | undefined>(
  undefined
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const InspectProvider = ({ children }: ChildrenType) => {
  const [activeForm, setActiveForm] = useState<string>("vehicle");
  const [page, setPage] = useState<number>(0);
  const [schema, setSchema] = useState<any>(schemaPersonal);
  const [userActiveForm, setUserActiveForm] = useState<string>("person");
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [userBtnActive, setuserBtnActive] = useState<UserBtnActive>({
    person: true,
    legal: false,
    vehicle: true,
    electronic: false,
  });

  // useEffect(() => {
  //     trigger();
    
  // }, [page]);

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
    let schemaUser: ZodType;
    let schemaElement: ZodType;
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

  const estructuringSchema = <T extends ZodTypeAny>(
    schemaUser: any,
    schemaElement: any
  ) => {
    let schema: any = schemaUser;
    if (page === 1) {
      schema = schema;
    } else if (page === 2) {
      schema = schema.merge(schemaElement);
    }
    setSchema(schema);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    trigger,
    setValue,
    control
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

  const submitData = (data: any) => {
    console.log("todo", data);
    validationFormDataInspect({ userActiveForm, activeForm, setModalActive, setIsError, data });

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
    userBtnActive,
    page,
    changePage,
    setValue,
    trigger,
    modalActive,
    setIsError,
    isError,
    control
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
