import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserBtnActive } from "../../../interfaces";
import { useState, createContext, useContext, useEffect } from "react";
import { TypeComplaintForm } from "../interfaces";
import { FormInjuredInfoData, PageButtonReport } from "../..";
import { FormEffectOpenClose, PageButton } from "../../../components";
import {
  SchemaPersonalType,
  SchemaLegalPersonalType,
  SchemaVehicle,
  SchemaElectronic,
} from "../../../models";
import {
  schemaVehicleCrashReport,
  schemaPersonal,
  schemaVehicle,
  schemaVehicleTheftReport,
  schemaVehicleFireReport,
  schemaElectronic,
  schemaLegalPersonal,
  schemaThirdPartyVehicleReport,
} from "../../../utilities";
import { validationFormDataReport } from "../utilities";

type AllTypes =
  | SchemaPersonalType
  | SchemaLegalPersonalType
  | SchemaVehicle
  | SchemaElectronic;

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
}

export const ReportContext = createContext<IReportContext | undefined>(
  undefined
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ReportProvider = ({ children }: ChildrenType) => {
  const [activeForm, setActiveForm] = useState<string>("vehicle");
  const [userActiveForm, setUserActiveForm] = useState<string>("person");
  const [schema, setSchema] = useState<any>(schemaPersonal);
  const [amountValue, setAmountValue] = useState<number>(0);
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

  // useEffect(() => {
  //     trigger();
  // }, [page]);

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
        schemaElement = schemaVehicle;
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
        schemaElement = schemaVehicle;
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
    let people: any = [];

    if (amountValue > 0) {
      for (let i = 0; i < amountValue; i++) {
        people.push(<FormInjuredInfoData key={i + 1} person={i + 1} />);
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
                  errors={errors.schemaVehicle}
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

  // const [people, setPeople] = useState<any>([]);

  // const addingPeople = () => {
  //   if (amountValue) {
  //     const thirdInjured = [];
  //     for (let i = 0; i < amountValue; i++) {
  //       thirdInjured.push(schemaThirdInjuredData);
  //     }
  //     setPeople(thirdInjured);
  //   }

  //   return;
  // };
  const schemaThirdInjuredData = z.object({
    // schemaThirdInjuredData: z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string().min(1).max(30),
    gender: z.enum(["hombre", "mujer", "otro"]),
    dni: z.number(),
    injuries: z.string(),
    // }),
  });

  const schemaThirdInjured = z.object({
    schemaThirdInjured: z.object({
      amount: z.number(),
      injuredInfo: z.array(schemaThirdInjuredData),
    })
  });

  const estructuringSchema = <T extends ZodTypeAny>(
    schemaUser: any,
    schemaElement: any,
    schemaComplaintType: any
  ) => {
    let schema: any = schemaUser;
    if (page === 1) {
      schema = schemaUser;
    } else if (page === 2) {
      schema = schemaUser.merge(schemaElement);
    } else if (page === 3) {
      schema = schemaUser.merge(schemaElement).merge(schemaComplaintType);
    } else if (page === 4) {
      schema = schemaUser.merge(schemaElement).merge(schemaComplaintType);
    } else if (page === 5 && amountValue) {
      schema = schemaUser
        .merge(schemaElement)
        .merge(schemaComplaintType)
        .merge(schemaThirdInjured);
    } else if (page === 6) {
      if (amountValue) {
        schema = schemaUser
          .merge(schemaElement)
          .merge(schemaComplaintType)
          .merge(schemaThirdInjured)
          .merge(schemaThirdPartyVehicleReport);
      } else {
        schema = schemaUser
          .merge(schemaElement)
          .merge(schemaComplaintType)
          .merge(schemaThirdPartyVehicleReport);
      }
    }
    setSchema(schema);
  };

  // const validateImages = (value: string) => {
  //   console.log("chi", value);

  //   schemaVehicle.shape.schemaVehicle.safeParse({ images: value });
  // };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    setValue,
    trigger,
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
    control
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
