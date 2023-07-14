import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ElectronicData,
  LegalPersonalData,
  PersonalData,
  VehicleData,
} from "../../../interfaces";

import { useState, createContext, useContext } from "react";

export interface IInspectContext {
  userActiveForm: string;
  activeForm: string;
  errors: any;
  submitData: (data: VehicleData | ElectronicData) => void;
  selectFormUserSchema: (name: string) => void;
  selectFormSchema: <T extends ZodTypeAny>(data: T, name: string) => void;
  handleSubmit: any;
  register: any;
  schemaElectronic: ZodType<ElectronicData>;
  schemaVehicle: ZodType<VehicleData>;
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
    cuit: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: z.string().email().max(30),
    address: z.string().min(1).max(50),
  };

  const selectFormUserSchema = (name: string) => {
    setUserActiveForm(name);
  };

  // const schemaUser =
  //   userActiveForm === "personal" ? schemaPersonal : schemaLegalPersonal;

  const schemaVehicle: ZodType<VehicleData> = z.object({
    ...schemaPersonal,
    year: z.number().lte(currentYear),
    color: z.string().min(1).max(20),
    tireBrand: z.string(),
    tireZise: z.string(),
    tireWear: z.string(),
    damage: z.boolean(),
    damageLocation: z.string().min(1).max(50),
    images: z.string(),
    plate: z.string(),
    gnc: z.boolean(),
    brand: z.string(),
    engine: z.string(),
    model: z.string(),
    fuel: z.enum(["diesel", "gasoline"]),
    vehicleType: z.enum(["camion", "automovil", "motocicleta"]),
  });

  const schemaElectronic: ZodType<ElectronicData> = z.object({
    ...schemaPersonal,
    electronicType: z.enum(["celular", "tablet", "notebook"]),
    phoneNumberCel: z.number(),
    phoneService: z.string().min(1).max(20),
    brand: z.string(),
    model: z.string(),
    IMEI: z.string(),
  });

  const [schema, setSchema] =
    useState<ZodType<VehicleData | ElectronicData>>(schemaVehicle);

  const selectFormSchema = <T extends ZodTypeAny>(data: T, name: string) => {
    setSchema(data);
    setActiveForm(name);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<VehicleData>({
    resolver: zodResolver(schema),
  });

  console.log(errors);
  const submitData = (data: VehicleData | ElectronicData) => {
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
    schemaElectronic,
    schemaVehicle,
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
