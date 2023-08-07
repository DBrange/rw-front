import useSWRMutation from "swr/mutation";
import {
  addInspectionPersonalVehicle,
  baseUrlPersonalVehicle,
} from "..";
import { useState, createContext, useContext, useEffect } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  useForm,
} from "react-hook-form";
import { ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive } from "../../../interfaces";
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
  register: UseFormRegister<AllInspectSchemas>;
  selectingSchema: () => void;
  touchedFields: FieldValues["touched"]; //Partial<Record<keyof AllInspectSchemas, true>>; //Partial<Readonly<AllInspectSchemas>>;
  userBtnActive: UserBtnActive;
  page: number;
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setValue: UseFormSetValue<AllInspectSchemas>;
  trigger: UseFormTrigger<AllInspectSchemas>;
  modalActive: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  control: Control<AllInspectSchemas>;
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
    schemaUser: ZodType<SchemaUsers>,
    schemaElement: ZodType<SchemaElements>
  ) => {
    let schema: any = schemaUser;
    if (page === 1) {
      schema = schema;
    } else if (page === 2) {
      schema = schema.merge(schemaElement);
      setIsError(true);
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
    // if (modalActive) {
    //   setIsError(true);
    // } else {
    //   setIsError(true);
  }, [errors]);

  console.log(errors);

  const {
    error: errorInspectionPersonalVehicle,
    trigger: triggerInspectionPersonalVehicle,
  } = useSWRMutation(baseUrlPersonalVehicle, addInspectionPersonalVehicle);
console.log(errorInspectionPersonalVehicle, '.-.-.-.-.')
  const submitData: SubmitHandler<AllInspectSchemas> = (data) => {
    console.log("todo", data);
    validationFormDataInspect({
      userActiveForm,
      activeForm,
      setModalActive,
      data,
      triggerInspectionPersonalVehicle,
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
