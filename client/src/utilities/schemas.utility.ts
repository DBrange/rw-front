import { z } from "zod";

export const schemaPersonal = z.object({
  schemaPersonal: z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: z.string().email().max(30),
    gender: z.enum(["hombre", "mujer", "otro"]),
    dni: z.number(),
    address: z.string().min(1).max(50),
  }),
});

export const schemaLegalPersonal = z.object({
  schemaLegalPersonal: z.object({
    companyName: z.string().min(1).max(20),
    cuit: z.number(),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: z.string().email().max(30),
    address: z.string().min(1).max(50),
  }),
});

const currentYear = new Date().getFullYear();

export const schemaVehicle = z.object({
  schemaVehicle: z.object({
    year: z.number().lte(currentYear),
    color: z.string().min(1).max(20),
    tireBrand: z.string().min(1).max(20),
    tireZise: z.string().min(1).max(20),
    tireWear: z.string().min(1).max(20),
    damage: z.boolean(),
    damageLocation: z.string(),
    images: z.string(),
    plate: z.string().min(6).max(7),
    gnc: z.boolean(),
    brand: z.string().min(1).max(20),
    engine: z.string().min(1).max(20),
    model: z.string().min(1).max(20),
    fuel: z.enum(["diesel", "gasoline"]),
    vehicleType: z.enum(["camion", "automovil", "motocicleta"]),
  }),
});

const numberOrEmpty = z
  .string()
  .refine((value) => value === "" || /^\d*$/.test(value), {
    message: "Solo se permiten números o el campo puede estar vacío",
  });

export const schemaElectronic = z.object({
  schemaElectronic: z.object({
    electronicType: z.enum(["celular", "tablet", "notebook"]),
    phoneNumberCel: numberOrEmpty,
    phoneService: z.string().max(20),
    brand: z.string().min(1).max(20),
    model: z.string().min(1).max(20),
    imei: z.string(),
  }),
});

// Report

export const schemaInjuredInfo = z.object({
  name: z.string(),
  lastName: z.string(),
  phoneNumber: z.number(),
  email: z.string(),
  gender: z.enum(["hombre", "mujer", "otro"]),
  dni: z.number(),
  injuries: z.string(),
});

export const schemaVehicleCrashReport = z.object({
    time: z.string(),
    date: z.date(),
    location: z.string(),
    injured: z.boolean(),
    injures: z.string(),
    ambulance: z.boolean(),
    ambulanceTo: z.string(),
    thridInjured: z.boolean(),
    thridParty: z.object({
      amount: z.number(),
      injuredInfo: z.array(schemaInjuredInfo),
    }),
  });
