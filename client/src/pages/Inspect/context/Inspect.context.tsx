import { useState, createContext, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive } from "../../../interfaces";
import {
  SchemaElectronic,
  SchemaLegalPersonalType,
  SchemaPersonalType,
  SchemaVehicle,
  schemaElectronic,
  schemaLegalPersonal,
  schemaPersonal,
  schemaVehicle,
} from "..";

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
  algo: () => void;
  touchedFields: any;
  userBtnActive: UserBtnActive;
  page: number;
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  validateImages: (value: string) => void;
}

export const InspectContext = createContext<IInspectContext | undefined>(
  undefined
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const InspectProvider = ({ children }: ChildrenType) => {
  const [activeForm, setActiveForm] = useState<string>("vehicle");

  const [userActiveForm, setUserActiveForm] = useState<string>("person");
  const [userBtnActive, setuserBtnActive] = useState<UserBtnActive>({
    person: true,
    legal: false,
    vehicle: true,
    electronic: false,
  });

  const [algomasquemas, setAlgomasquemas] = useState<any>();

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

  const validateImages = (value: string) => {
    console.log("chi", value);

    schemaVehicle.shape.schemaVehicle.safeParse({ images: value });
  };

  const algo = () => {
    let schemaUser: ZodType;
    let schemaElement: ZodType;
    if (userActiveForm === "person") {
      schemaUser = schemaPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicle;
        algomas(schemaUser, schemaElement);
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        algomas(schemaUser, schemaElement);
      }
    } else if (userActiveForm === "legal") {
      schemaUser = schemaLegalPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicle;
        algomas(schemaUser, schemaElement);
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        algomas(schemaUser, schemaElement);
      }
    }
  };

  const [page, setPage] = useState<number>(0);

  const changePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    if (value === "next") {
      if (page === 0) {
        setPage(page + 1);
      } else if (page === 1) {
        setPage(page + 1);
      }
    } else if (value === "back") {
      setPage(page - 1);
    }
  };

  const algomas = <T extends ZodTypeAny>(
    schemaUser: any,
    schemaElement: any
  ) => {
    let schema: any = schemaUser;
    if (page === 1) {
      schema = schemaUser;
    } else if (page === 2) {
      schema = schemaUser.merge(schemaElement);
    }
    setAlgomasquemas(schema);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    reset,
  } = useForm<AllTypes>({
    resolver: zodResolver(algomasquemas),
  });

  useEffect(() => {
    algo();
  }, [errors, algomasquemas]);
  console.log(errors);

  const submitData = (data: any) => {
    console.log("todo", data);
    reset({});
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
    algo,
    touchedFields,
    userBtnActive,
    page,
    changePage,
    validateImages,
  };

  return (
    <InspectContext.Provider value={values}>{children}</InspectContext.Provider>
  );
};

export const useInspectContext = () => {
  const context = useContext(InspectContext);
  if (!context)
    throw new Error("useLoginContext can only be used inside LoginProvider");

  return context;
};
