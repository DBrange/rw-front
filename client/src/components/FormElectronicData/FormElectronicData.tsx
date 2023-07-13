import { FormInput, FormSelect } from "..";

interface Props {
  register: any;
  errors: any;
}

function FormElectronicData({ register, errors }: Props) {
  return (
    <>
      <FormSelect
        register={register("electronicType")}
        error={errors.electrodomesticType?.message}
        id="electronicType"
        label="Tipo de electrodomestico"
        options={["normal", "premium"]}
      />
      <FormInput
        register={register("phoneNumberCel", { valueAsNumber: true })}
        error={errors.phoneNumberCel?.message}
        type="number"
        id="phoneNumberCel"
        label="Numero del movil"
        placeholder="Numero del movil"
      />
      <FormInput
        register={register("phoneService")}
        error={errors.phoneService?.message}
        type="number"
        id="phoneService"
        label="Servicio del movil"
        placeholder="Servicio del movil"
      />
      {/* <FormInput
        register={register("phoneService")}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ingrese el Año"
      />
      <FormInput
        register={register("year")}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ingrese el Año"
      />
      <FormInput
        register={register("year")}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ingrese el Año"
      /> */}
    </>
  );
}
export default FormElectronicData;
