
import { z } from "zod";
import { schemaPersonal, schemaLegalPersonal, schemaVehicle, schemaElectronic } from "../..";

export type SchemaPersonalType = z.infer<typeof schemaPersonal>;
export type SchemaLegalPersonalType = z.infer<typeof schemaLegalPersonal>;
export type SchemaVehicle = z.infer<typeof schemaVehicle>;
export type SchemaElectronic = z.infer<typeof schemaElectronic>;