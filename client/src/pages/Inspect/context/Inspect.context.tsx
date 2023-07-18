import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AllDataInspect,
  ElectronicData,
  LegalElectronicData,
  LegalPersonalData,
  LegalVehicleData,
  PersonalData,
  UserBtnActive,
  VehicleData,
} from "../../../interfaces";

import { useState, createContext, useContext, useEffect } from "react";

type nose =
  | VehicleData
  | ElectronicData
  | LegalVehicleData
  | LegalElectronicData;

export interface IInspectContext {
  userActiveForm: string;
  activeForm: string;
  errors: any;
  submitData: (data: nose) => void;
  selectFormUserSchema: (name: string) => void;
  selectFormSchema: (name: string) => void;
  handleSubmit: any;
  register: any;
  algo: () => void;
  touchedFields: any;
  userBtnActive: UserBtnActive;
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
    person: false,
    legal: false,
    vehicle: false,
    electronic: false,
  });

  const currentYear = new Date().getFullYear();

  const schemaPersonal = {
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: z.string().email().max(30),
    gender: z.enum(["hombre", "mujer", "otro"]),
    dni: z.number(),
    address: z.string().min(1).max(50),
  };

  const schemaLegalPersonal = {
    companyName: z.string().min(1).max(20),
    cuit: z.number(),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: z.string().email().max(30),
    address: z.string().min(1).max(50),
  };

  const selectFormUserSchema = (name: string) => {
    setUserActiveForm(name);
    console.log(name)
    if (name === userActiveForm) {
      setuserBtnActive({
        ...userBtnActive,
        person: true,
        legal: false,
      });
    } else{
      setuserBtnActive({
        ...userBtnActive,
        person: false,
        legal: true,
      });
    }
  };

  // const schemaUser =
  //   userActiveForm === "personal" ? schemaPersonal : schemaLegalPersonal;

  const schemaVehicle = {
    year: z.number().lte(currentYear),
    color: z.string().min(1).max(20),
    tireBrand: z.string(),
    tireZise: z.string(),
    tireWear: z.string(),
    damage: z.boolean(),
    damageLocation: z.string().max(50),
    // images: z.string(),
    plate: z.string(),
    gnc: z.boolean(),
    brand: z.string(),
    engine: z.string(),
    model: z.string(),
    fuel: z.enum(["diesel", "gasoline"]),
    vehicleType: z.enum(["camion", "automovil", "motocicleta"]),
  };

const numberOrEmpty = z
  .string()
  .refine((value) => value === "" || /^\d*$/.test(value), {
    message: "Solo se permiten números o el campo puede estar vacío",
  });

  const schemaElectronic = {
    electronicType: z.enum(["celular", "tablet", "notebook"]),
    phoneNumberCel: numberOrEmpty,
    phoneService: z.string().max(20),
    brand: z.string(),
    model: z.string(),
    imei: z.string(),
  };

  const algo = () => {
    let schemaUser;
    let schemaElement;
    if (userActiveForm === "person") {
      schemaUser = schemaPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicle;
        algomas<VehicleData>(schemaUser, schemaElement);
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        algomas<ElectronicData>(schemaUser, schemaElement);
      }
    } else if (userActiveForm === "legal") {
      schemaUser = schemaLegalPersonal;
      if (activeForm === "vehicle") {
        schemaElement = schemaVehicle;
        algomas<LegalVehicleData>(schemaUser, schemaElement);
      } else if (activeForm === "electronic") {
        schemaElement = schemaElectronic;
        algomas<LegalElectronicData>(schemaUser, schemaElement);
      }
    }
  };

  const [algomasquemas, setAlgomasquemas] = useState<any>();

  const algomas = <T,>(schemaUser: any, schemaElement: any) => {
    const schema: any = z.object({ ...schemaUser, ...schemaElement });
    // setAlgomasquemas(schema);
  };

  // const [schema, setSchema] = useState<ZodType<nose>>(algomasquemas);

  const selectFormSchema = (name: string) => {
    setActiveForm(name);
      if (name === activeForm) {
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

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    reset,
  } = useForm<AllDataInspect>({
    resolver: zodResolver(algomasquemas),
  });

  useEffect(() => {
    algo();
  }, [errors]);
  console.log(errors);

  const submitData = (data: nose) => {
    console.log(data);
    reset({
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      email: "",
      altEmail: "",
      gender: "hombre",
      dni: 0,
      address: "",
      companyName: "",
      cuit: 0,
      year: 0,
      color: "",
      tireBrand: "",
      tireZise: "",
      tireWear: "",
      damage: false,
      damageLocation: "",
      images: "",
      plate: "",
      gnc: false,
      brand: "",
      engine: "",
      model: "",
      fuel: "diesel",
      vehicleType: "automovil",
      electronicType: "celular",
      phoneNumberCel: 0,
      phoneService: "",
      imei: 0,
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
    algo,
    touchedFields,
    userBtnActive,
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
