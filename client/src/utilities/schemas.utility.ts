import { z } from "zod";

const altEmailValidate = z
  .string()
  .refine(
    (value) =>
      value === "" ||
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value),
    {
      message: "Debe tener un formato email o el campo puede estar vacío",
    }
  );

export const schemaPersonal = z.object({
  schemaPersonal: z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: altEmailValidate,
    gender: z.enum(["hombre", "mujer", "otro"]),
    birthDate: z.coerce.date(),
    dni: z
      .string()
      .refine((value) => value.length === 8, {
        message: "El campo debe tener exactamente 8 dígitos.",
      })
      .refine((value) => /^\d+$/.test(value), {
        message: "El campo debe contener solo números.",
      }),
    address: z.string().min(1).max(50),
  }),
});

export const schemaLegalPersonal = z.object({
  schemaLegalPersonal: z.object({
    companyName: z.string().min(1).max(20),
    cuit: z
      .string()
      .refine((value) => /^\d+$/.test(value), {
        message: "El campo debe contener solo números.",
      })
      .refine((value) => value.length === 11, {
        message: "El campo debe tener exactamente 11 dígitos.",
      }),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: altEmailValidate,
    address: z.string().min(1).max(50),
  }),
});

const currentYear = new Date().getFullYear();

export const schemaVehicle = z.object({
  schemaVehicle: z.object({
    year: z.number().refine((value) => value <= currentYear, {
      message: "El año exede al actual",
    }),
    color: z.string().min(1).max(20),
    tireBrand: z.string().min(1).max(20),
    tireSize: z.string().min(1).max(20),
    tireWear: z.number().min(0).max(100),
    damage: z.boolean(),
    damageLocation: z.string(),
    images: z.array(z.string().url()),
    plate: z.string().min(6).max(7),
    okm: z.boolean(),
    gnc: z.boolean(),
    brand: z.string().min(1).max(20),
    model: z.string().min(1).max(20),
    fuel: z.enum(["DIESEL", "GASOLINE"]),
    type: z.enum(["CAMION", "AUTOMOVIL", "MOTOCICLETA"]),
  }),
});

export const schemaGnc = z.object({
  schemaGnc: z.object({
    obleaNumber: z.string().min(8),
    gncExpiration: z.coerce.date(),
  }),
});

const numberOrEmpty = z
  .string()
  .refine((value) => /^\d*$/.test(value), {
    message: "Debe ingresar un numero valido",
  })
  .refine((value) => value.length, {
    message: "Debe ingresar un numero valido",
  })

export const schemaPhone = z.object({
  schemaPhone: z.object({
    phoneNumberCel: numberOrEmpty,
    phoneService: z.string().min(1).max(20),
    imei: z.string(),
  }),
});

export const schemaElectronic = z.object({
  schemaElectronic: z.object({
    type: z.enum(["celular", "tablet", "notebook"]),
    brand: z.string().min(1).max(20),
    model: z.string().min(1).max(20),
    
  }),
});

// Report

export const schemaVehicleReport = z.object({
  schemaVehicleReport: z.object({
    year: z.number().refine((value) => value <= currentYear, {
      message: "El año exede al actual",
    }),
    color: z.string().min(1).max(20),
    damage: z.boolean(),
    damageLocation: z.string(),
    images: z.array(z.string().url()),
    plate: z.string().min(6).max(7),
    okm: z.boolean(),
    gnc: z.boolean(),
    brand: z.string().min(1).max(20),
    model: z.string().min(1).max(20),
    fuel: z.enum(["DIESEL", "GASOLINE"]),
    type: z.enum(["CAMION", "AUTOMOVIL", "MOTOCICLETA"]),
  }),
});

export const schemaIsTire = z.object({
  schemaIsTire: z.object({
    tireAmount: z.number(),
    tireWear: z.number().min(0).max(100),
  }),
});

export const schemaVehicleTheftReport = z.object({
  schemaVehicleTheftReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
    reportPhoto: z.array(z.string().url()),
    isTire: z.boolean(),
  }),
});

export const schemaVehicleFireReport = z.object({
  schemaVehicleFireReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
    details: z.string().min(1),
    injured: z.boolean(),
    injuries: z.string(),
    ambulance: z.boolean(),
    ambulanceTo: z.string(),
    thirdInjured: z.boolean(),
  }),
});

export const schemaElectronicTheftReport = z.object({
  schemaElectronicTheftReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
    reportPhoto: z.array(z.string().url()),
  }),
});
const schemaThirdInjuredData = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  phoneNumber: z.number(),
  email: z.string().min(1).max(30),
  gender: z.enum(["hombre", "mujer", "otro"]),
  dni: z.number(),
  injuries: z.string(),
});

export const schemaThirdInjured = z.object({
  schemaThirdInjured: z.object({
    amount: z.number(),
    injuredInfo: z.array(schemaThirdInjuredData),
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
    ownerDni: z.number(),
    address: z.string().min(1).max(20),
    phoneNumber: z.number(),
    licencePhoto: z.array(z.string().url()),
    email: z.string().email(),
    isOwner: z.boolean(),
    name: z.string().min(1).max(20),
    dni: z.number(),
  }),
});

export const schemaVehicleCrashReportData = z.object({
  schemaVehicleCrashReportData: z.object({
    amount: z.number(),
    thirdPartyVehicleInfo: z.array(schemaThirdPartyVehicleReport),
  })
});

export const schemaVehicleCrashReport = z.object({
  schemaVehicleCrashReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
    details: z.string().min(1),
    injured: z.boolean(),
    injuries: z.string(),
    ambulance: z.boolean(),
    ambulanceTo: z.string(),
    thirdInjured: z.boolean(),
    friendlyStatement: z.boolean(),
  }),
});
