import { useState } from "react";
import { FormInput, FormInputOptional } from "..";
import { FormSelectElecType } from "../../pages";

interface Props {
  register: any;
  errors: any;
  touchedFields: any;
}

function FormElectronicData({ register, errors, touchedFields }: Props) {
  const [isPhone, setIsPhone] = useState<boolean>(false);

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
        register={register("schemaElectronic.electronicType")}
        error={errors.schemaElectronic?.electrodomesticType?.message}
        touched={touchedFields.electronicType}
        electronicType={electronicType}
      />
      <FormInputOptional
        register={register("schemaElectronic.phoneNumberCel")}
        error={errors.schemaElectronic?.phoneNumberCel?.message}
        checked={isPhone}
        type="text"
        id="phoneNumberCel"
        label="Numero del movil*"
        placeholder="Numero del movil"
        touched={touchedFields.schemaElectronic?.phoneNumberCel}
      />
      <FormInputOptional
        register={register("schemaElectronic.phoneService")}
        error={errors.schemaElectronic?.phoneService?.message}
        checked={isPhone}
        type="text"
        id="phoneService"
        label="Servicio del movil*"
        placeholder="Servicio del movil"
        touched={touchedFields.schemaElectronic?.phoneService}
      />
      <FormInputOptional
        register={register("schemaElectronic.imei")}
        error={errors.schemaElectronic?.imei?.message}
        checked={isPhone}
        type="number"
        id="imei"
        label="IMEI*"
        placeholder="Ingrese el Año"
        touched={touchedFields.schemaElectronic?.imei}
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
