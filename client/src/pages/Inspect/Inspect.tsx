import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ElectronicData,
  LegalPersonalData,
  PersonalData,
  VehicleData,
} from "../../interfaces";
import {
  FormElectronicData,
  FormPersonalData,
  FormVehicleData,
} from "../../components";
import { useState } from "react";

function Inspect() {
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
  const [userActiveForm, setUserActiveForm] = useState<string>();

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

  const [activeForm, setActiveForm] = useState<string>();

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

  return (
    <form
      className="w-full bg-slate-600 mx-auto gap-5 flex flex-col items-center"
      onSubmit={handleSubmit(submitData)}
    >
      <div>
        <button onClick={() => selectFormUserSchema("person")}>
          Persona particular
        </button>
        <button onClick={() => selectFormUserSchema("legal")}>
          Persona juridica
        </button>
      </div>
      <div>
        <button onClick={() => selectFormSchema(schemaVehicle, "vehicle")}>
          Vehiculo
        </button>
        <button
          onClick={() => selectFormSchema(schemaElectronic, "electronic")}
        >
          Electrodomestico
        </button>
      </div>
      <FormPersonalData register={register} errors={errors} />
      {activeForm === "vehicle" ? (
        <FormVehicleData register={register} errors={errors} />
      ) : (
        <FormElectronicData register={register} errors={errors} />
      )}
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Inspect;
