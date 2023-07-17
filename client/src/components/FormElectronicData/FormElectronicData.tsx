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
        register={register("electronicType")}
        error={errors.electrodomesticType?.message}
        touched={touchedFields.electronicType}
        electronicType={electronicType}
      />
      <FormInputOptional
        register={register("phoneNumberCel")}
        error={errors.phoneNumberCel?.message}
        checked={isPhone}
        type="text"
        id="phoneNumberCel"
        label="Numero del movil"
        placeholder="Numero del movil"
        touched={touchedFields.phoneNumberCel}
      />
      <FormInputOptional
        register={register("phoneService")}
        error={errors.phoneService?.message}
        checked={isPhone}
        type="text"
        id="phoneService"
        label="Servicio del movil"
        placeholder="Servicio del movil"
        touched={touchedFields.phoneService}
      />
      <FormInputOptional
        register={register("imei")}
        error={errors.imei?.message}
        checked={isPhone}
        type="number"
        id="imei"
        label="IMEI"
        placeholder="Ingrese el Año"
        touched={touchedFields.imei}
      />
      <FormInput
        register={register("brand")}
        error={errors.brand?.message}
        type="text"
        id="brand"
        label="Marca"
        placeholder="Ingrese el Año"
        touched={touchedFields.brand}
      />
      <FormInput
        register={register("model")}
        error={errors.model?.message}
        type="text"
        id="model"
        label="Modelo"
        placeholder="Ingrese el Año"
        touched={touchedFields.model}
      />
    </>
  );
}
export default FormElectronicData;
