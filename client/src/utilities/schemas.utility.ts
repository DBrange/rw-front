import { z } from "zod";
import i18next from "i18next";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/es/zod.json";

i18next.init({
  lng: "es",
  resources: {
    es: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

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
    name: z.string().min(1).max(20).trim(),
    lastName: z.string().min(1).max(20).trim(),
    phoneNumber: z
      .string()
      .min(1, { message: "Debe ingresar un número" })
      .regex(/^\d+$/, { message: "Debe contener solo números" }),
    email: z.string().email().max(30),
    altEmail: altEmailValidate,
    gender: z.enum(["HOMBRE", "MUJER", "OTRO"]),
    birthDate: z
      .string()
      .refine((value) => {
        const regex =
          /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

        return (
          regex.test(value),
          {
            message: "Debe ingresar una fecha valida",
          }
        );
      })
      .refine((value) => value !== "", { message: "El campo esta vacio" }),
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
    companyName: z.string().min(1).max(20).trim(),
    cuit: z
      .string()
      .refine((value) => /^\d+$/.test(value), {
        message: "El campo debe contener solo números.",
      })
      .refine((value) => value.length === 11, {
        message: "El campo debe tener exactamente 11 dígitos.",
      }),
    phoneNumber: z
      .string()
      .min(1, { message: "Debe ingresar un número" })
      .regex(/^\d+$/, { message: "Debe contener solo números" }),
    email: z.string().email().max(30),
    altEmail: altEmailValidate,
    address: z.string().min(1).max(50).trim(),
  }),
});

const currentYear = new Date().getFullYear();

export const schemaVehicle = z.object({
  schemaVehicle: z.object({
    year: z.number().refine((value) => value <= currentYear, {
      message: "El año exede al actual",
    }),
    color: z.string().min(1).max(20).trim(),
    tireBrand: z.string().min(1).max(20).trim(),
    tireSize: z.string().min(1).max(20).trim(),
    tireWear: z.number().min(0).max(100),
    damage: z.boolean(),
    damageLocation: z.string(),
    images: z.array(z.string().url()),
    plate: z.string().min(4).trim(),
    okm: z.boolean(),
    gnc: z.boolean(),
    brand: z.string().min(1).max(20).trim(),
    model: z.string().min(1).max(50).trim(),
    fuel: z.enum(["DIESEL", "GASOLINA"]),
    type: z.enum(["CAMIONETA", "AUTOMOVIL", "MOTOCICLETA"]),
  }),
});

export const schemaGnc = z.object({
  schemaGnc: z.object({
    oblea: z.string().min(8).trim(),
    plate: z.string().min(1),
    expireDate: z
      .string()
      .refine((value) => {
        const regex =
          /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

        return (
          regex.test(value),
          {
            message: "Debe ingresar una fecha valida",
          }
        );
      })
      .refine((value) => value !== "", { message: "El campo esta vacio" }),
  }),
});

const numberOrEmpty = z
  .string()
  .refine((value) => /^\d*$/.test(value), {
    message: "Debe ingresar un numero valido",
  })
  .refine((value) => value.length, {
    message: "Debe ingresar un numero valido",
  });

export const schemaPhone = z.object({
  schemaPhone: z.object({
    phoneNumber: z
      .string()
      .min(1, { message: "Debe ingresar un número" })
      .regex(/^\d+$/, { message: "Debe contener solo números" }),
    phoneService: z.string().min(1).max(20).trim(),
    imei: z.string().min(1),
  }),
});

export const schemaElectronic = z.object({
  schemaElectronic: z.object({
    type: z.enum(["CELULAR", "TABLET", "NOTEBOOK"]),
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
    color: z.string().min(1).max(20).trim(),
    damage: z.boolean(),
    damageLocation: z.string().trim(),
    images: z.array(z.string().url()),
    plate: z.string().min(6).max(7).trim(),
    okm: z.boolean(),
    gnc: z.boolean(),
    brand: z.string().min(1).max(20).trim(),
    model: z.string().min(1).max(20).trim(),
    fuel: z.enum(["DIESEL", "GASOLINA"]),
    type: z.enum(["CAMIONETA", "AUTOMOVIL", "MOTOCICLETA"]),
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
    time: z.string().min(1).max(20).trim(),
    date: z
      .string()
      .refine((value) => {
        const regex =
          /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

        return (
          regex.test(value),
          {
            message: "Debe ingresar una fecha valida",
          }
        );
      })
      .refine((value) => value !== "", { message: "El campo esta vacio" }),
    location: z.string().min(1).trim(),
    reportPhoto: z.array(z.string().url()),
    isTire: z.boolean(),
  }),
});

export const schemaVehicleFireReport = z.object({
  schemaVehicleFireReport: z.object({
    time: z.string().min(1).max(20).trim(),
    date: z
      .string()
      .refine((value) => {
        const regex =
          /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

        return (
          regex.test(value),
          {
            message: "Debe ingresar una fecha valida",
          }
        );
      })
      .refine((value) => value !== "", { message: "El campo esta vacio" }),
    location: z.string().min(1).trim(),
    details: z.string().min(1).trim(),
    injured: z.boolean(),
    injuries: z.string().trim(),
    ambulance: z.boolean(),
    ambulanceTo: z.string().trim(),
    thirdInjured: z.boolean(),
  }),
});

export const schemaElectronicTheftReport = z.object({
  schemaElectronicTheftReport: z.object({
    time: z.string().min(1).max(20).trim(),
    date: z
      .string()
      .refine((value) => {
        const regex =
          /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

        return (
          regex.test(value),
          {
            message: "Debe ingresar una fecha valida",
          }
        );
      })
      .refine((value) => value !== "", { message: "El campo esta vacio" }),
    location: z.string().min(1).trim(),
    reportPhoto: z.array(z.string().url()),
  }),
});

export const schemaThirdInjuredData = z.object({
  name: z.string().min(1).max(20).trim(),
  lastName: z.string().min(1).max(20).trim(),
  birthDate: z
    .string()
    .refine((value) => {
      const regex =
        /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

      return (
        regex.test(value),
        {
          message: "Debe ingresar una fecha valida",
        }
      );
    })
    .refine((value) => value !== "", { message: "El campo esta vacio" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Debe ingresar un número" })
    .regex(/^\d+$/, { message: "Debe contener solo números" }),
  email: z.string().min(1).max(30),
  gender: z.enum(["HOMBRE", "MUJER", "OTRO"]),
  dni: z
    .string()
    .refine((value) => value.length === 8, {
      message: "El campo debe tener exactamente 8 dígitos.",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "El campo debe contener solo números.",
    }),
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
    brand: z.string().min(1).max(20).trim(),
    model: z.string().min(1).max(20).trim(),
    plate: z.string().min(1).max(20).trim(),
    insauranceCompany: z.string().min(1).max(20).trim(),
    insaurancePolicy: z.string().min(1).max(20).trim(),
    ownerName: z.string().min(1).max(20).trim(),
    ownerLastName: z.string().min(1).max(20).trim(),
    ownerDni: z
      .string()
      .refine((value) => value.length === 8, {
        message: "El campo debe tener exactamente 8 dígitos.",
      })
      .refine((value) => /^\d+$/.test(value), {
        message: "El campo debe contener solo números.",
      }),
    address: z.string().min(1).max(20).trim(),
    phoneNumber: z
      .string()
      .min(1, { message: "Debe ingresar un número" })
      .regex(/^\d+$/, { message: "Debe contener solo números" }),
    licencePhoto: z.array(z.string().url()),
    email: z.string().email(),
    isOwner: z.boolean(),
    name: z.string().min(1).max(20).trim(),
    dni: z
      .string()
      .refine((value) => value.length === 8, {
        message: "El campo debe tener exactamente 8 dígitos.",
      })
      .refine((value) => /^\d+$/.test(value), {
        message: "El campo debe contener solo números.",
      }),
  }),
});

export const schemaVehicleCrashReportData = z.object({
  schemaVehicleCrashReportData: z.object({
    amount: z.number(),
    thirdPartyVehicleInfo: z.array(schemaThirdPartyVehicleReport),
  }),
});

export const schemaVehicleCrashReport = z.object({
  schemaVehicleCrashReport: z.object({
    time: z.string().min(1).max(20).trim(),
    date: z
      .string()
      .refine((value) => {
        const regex =
          /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/;

        return (
          regex.test(value),
          {
            message: "Debe ingresar una fecha valida",
          }
        );
      })
      .refine((value) => value !== "", { message: "El campo esta vacio" }),
    location: z.string().min(1).trim(),
    details: z.string().min(1).trim(),
    injured: z.boolean(),
    injuries: z.string().trim(),
    ambulance: z.boolean(),
    ambulanceTo: z.string().trim(),
    thirdInjured: z.boolean(),
    friendlyStatement: z.boolean(),
  }),
});
