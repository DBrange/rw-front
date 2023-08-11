import { useState } from "react";
import { FormInput, FormInputOptional } from "..";
import { FormSelectElecType } from "../../pages";
import { AllInspectSchemas, SchemaElectronicType, SchemaPhone } from "../../models";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<AllInspectSchemas>;
  errors: FieldErrors<SchemaElectronicType & SchemaPhone>;
  touchedFields: any;
  setIsPhone: React.Dispatch<React.SetStateAction<boolean>>;
  isPhone: boolean;
}

function FormElectronicData({ register, errors, touchedFields, setIsPhone, isPhone }: Props) {
  

  const electronicType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === "celular") {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  return (
    <>
      <FormSelectElecType
        register={register("schemaElectronic.type")}
        error={errors.schemaElectronic?.type?.message}
        touched={touchedFields.schemaElectronic?.type}
        electronicType={electronicType}
      />
      <FormInputOptional
        register={register("schemaPhone.phoneNumberCel")}
        error={errors.schemaPhone?.phoneNumberCel?.message}
        checked={isPhone}
        type="text"
        id="phoneNumberCel"
        label="Numero del movil*"
        placeholder="Numero del movil"
        touched={touchedFields.schemaPhone?.phoneNumberCel}
      />
      <FormInputOptional
        register={register("schemaPhone.phoneService")}
        error={errors.schemaPhone?.phoneService?.message}
        checked={isPhone}
        type="text"
        id="phoneService"
        label="Servicio del movil*"
        placeholder="Servicio del movil"
        touched={touchedFields.schemaPhone?.phoneService}
      />
      <FormInputOptional
        register={register("schemaPhone.imei")}
        error={errors.schemaPhone?.imei?.message}
        checked={isPhone}
        type="number"
        id="imei"
        label="IMEI*"
        placeholder="Ingrese el Año"
        touched={touchedFields.schemaPhone?.imei}
      />
      <FormInput
        register={register("schemaElectronic.brand")}
        error={errors.schemaElectronic?.brand?.message}
        type="text"
        id="brand"
        label="Marca*"
        placeholder="Ingrese el Año"
        touched={touchedFields.schemaElectronic?.brand}
      />
      <FormInput
        register={register("schemaElectronic.model")}
        error={errors.schemaElectronic?.model?.message}
        type="text"
        id="model"
        label="Modelo*"
        placeholder="Ingrese el Año"
        touched={touchedFields.schemaElectronic?.model}
      />
    </>
  );
}
export default FormElectronicData;
