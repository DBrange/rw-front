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
      )

export const schemaPersonal = z.object({
  schemaPersonal: z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number(),
    email: z.string().email().max(30),
    altEmail: altEmailValidate,
    gender: z.enum(["hombre", "mujer", "otro"]),
    dni: z
      .string()
      .refine((value) => value.length === 8, {
        message: "El campo debe tener exactamente 11 dígitos.",
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
console.log(currentYear)

export const schemaVehicle = z.object({
  schemaVehicle: z.object({
    year: z.number().refine((value) => value <= currentYear, {message: 'El año exede al actual'}),
    color: z.string().min(1).max(20),
    tireBrand: z.string().min(1).max(20),
    tireZise: z.string().min(1).max(20),
    tireWear: z.number().min(1).max(100),
    damage: z.boolean(),
    damageLocation: z.string(),
    images: z.string().url(),
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

// export const schemaThirdInjuredData = z.object({
//   schemaThirdInjuredData: z.object({
//     name: z.string().min(1).max(20),
//     lastName: z.string().min(1).max(20),
//     phoneNumber: z.number(),
//     email: z.string().min(1).max(30),
//     gender: z.enum(["hombre", "mujer", "otro"]),
//     dni: z.number(),
//     injuries: z.string(),
//   }),
// });

// export const schemaThirdInjured = z.object({
//   schemaThirdInjured: z.object({
//     amount: z.number(),
//     injuredInfo: z.array(schemaThirdInjuredData),
//   })
// })

export const schemaVehicleCrashReport = z.object({
  schemaVehicleCrashReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1).max(20),
    details: z.string().min(1),
    injured: z.boolean(),
    injuries: z.string(),
    ambulance: z.boolean(),
    ambulanceTo: z.string(),
    thirdInjured: z.boolean(),
  }),
});

export const schemaVehicleTheftReport = z.object({
  schemaVehicleTheftReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
    injured: z.boolean(),
    injuries: z.string(),
    ambulance: z.boolean(),
    ambulanceTo: z.string(),
    thirdInjured: z.boolean(),
    reportPhoto: z.string()
  }),
});

export const schemaVehicleFireReport = z.object({
  schemaVehicleFireReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
    details: z.string().min(1),
  }),
});

export const schemaElectronicTheftReport = z.object({
  schemaElectronicTheftReport: z.object({
    time: z.string().min(1).max(20),
    date: z.coerce.date(),
    location: z.string().min(1),
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
    ownerDni: z.number(),
    name: z.string().min(1).max(20),
    dni: z.number(),
    address: z.string().min(1).max(20),
    phoneNumber: z.number(),
    licencePhoto: z.string(),
    email: z.string().email(),
  }),
});
