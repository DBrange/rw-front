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
    tireWear: z.number().min(1).max(100),
    damage: z.boolean(),
    damageLocation: z.string(),
    // images: z.string(),
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
  schemaInjuredInfo: z.object({
    name: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string(),
    gender: z.enum(["hombre", "mujer", "otro"]),
    dni: z.number(),
    injuries: z.string(),
  }),
});

export const schemaVehicleCrashReport = z.object({
  schemaVehicleCrashReport: z.object({
    time: z.string().min(1).max(20),
    date: z.string(),
    location: z.string(),
    injured: z.boolean(),
    injuries: z.string(),
    ambulance: z.boolean(),
    ambulanceTo: z.string(),
    thirdInjured: z.boolean(),
    // thirdParty: z.object({
    //   amount: z.number(),
    //   injuredInfo: z.array(schemaInjuredInfo),
    // }),
  }),
});

export const schemaVehicleTheftReport = z.object({
  schemaVehicleTheftReport: z.object({
    time: z.string().min(1).max(20),
    date: z.date(),
    location: z.string(),
    // reportPhoto: z.string()
  }),
});

export const schemaVehicleFireReport = z.object({
  schemaVehicleFireReport: z.object({
    time: z.string().min(1).max(20),
    date: z.date(),
    location: z.string(),
    details: z.string(),
  }),
});

export const schemaElectronicTheftReport = z.object({
  schemaElectronicTheftReport: z.object({
    time: z.string().min(1).max(20),
    date: z.date(),
    location: z.string(),
    reportPhoto: z.string(),
  }),
});

export const schemaThirdPartyVehicleReport = z.object({
  schemaThirdPartyVehicleReport: z.object({
    year: z.number(),
    brand: z.string().min(1).max(20),
    model: z.string().min(1).max(20),
    plate: z.string().min(1).max(20),
    insauranceCompany: z.string().min(1).max(20),
    insaurancePolicy: z.string().min(1).max(20),
    ownerName: z.string().min(1).max(20),
    ownerDni: z.string().min(1).max(20),
    name: z.string().min(1).max(20),
    dni: z.number(),
    address: z.string().min(1).max(20),
    phoneNumber: z.string().min(1).max(20),
    // licencePhoto: z.string(),
    email: z.string().email()
  })
})
