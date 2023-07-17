import { useState } from "react";
import { FormCheckbox, FormInput, FormInputOptional, FormSelect } from "..";
import { FormUploadImage } from "../../pages";

interface Props {
  register: any;
  errors: any;
  touchedFields: any;
}

function FormVehicleData({ register, errors, touchedFields }: Props) {
  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  return (
    <>
      <FormInput
        register={register("year", { valueAsNumber: true })}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ano del vehiculo"
        touched={touchedFields.year}
      />
      <FormInput
        register={register("color")}
        error={errors.color?.message}
        type="text"
        id="color"
        label="Color"
        placeholder="Color del vehiculo"
        touched={touchedFields.color}
      />
      <FormInput
        register={register("tireBrand")}
        error={errors.tireBrand?.message}
        type="text"
        id="tireBrand"
        label="Marca de las ruedas"
        placeholder="Ingrese la marca"
        touched={touchedFields.tireBrand}
      />
      <FormInput
        register={register("tireZise")}
        error={errors.tireZise?.message}
        type="text"
        id="tireZise"
        label="Tamaño de la rueda"
        placeholder="Ingrese el tamaño"
        touched={touchedFields.tireZise}
      />
      <FormInput
        register={register("tireWear")}
        error={errors.tireWear?.message}
        type="text"
        id="tireWear"
        label="Desgaste de la rueda"
        placeholder="Ingrese el desgaste"
        touched={touchedFields.tireWear}
      />

      <FormCheckbox
        register={register("damage")}
        setChecked={setIsCheckedDamage}
        id={"damage"}
        label={"daño"}
      />

      <FormInputOptional
        register={register("damageLocation")}
        error={errors.damageLocation?.message}
        checked={isCheckedDamage}
        type="text"
        id="damageLocation"
        label="Lugar dañado"
        placeholder="Ingrese el lugar"
        touched={touchedFields.damageLocation}
      />

      <FormUploadImage register={register("images")} />

      <FormInput
        register={register("plate")}
        error={errors.plate?.message}
        type="text"
        id="plate"
        label="Patente"
        placeholder="Ingrese la patente"
        touched={touchedFields.plate}
      />

      <div>
        <label htmlFor="">GNC</label>
        <input type="checkbox" {...register("gnc")} />
      </div>

      <FormInput
        register={register("brand")}
        error={errors.brand?.message}
        type="text"
        id="brand"
        label="Marca"
        placeholder="Ingresar marca"
        touched={touchedFields.brand}
      />
      <FormInput
        register={register("model")}
        error={errors.model?.message}
        type="text"
        id="model"
        label="Modelo"
        placeholder="Ingresar modelo"
        touched={touchedFields.model}
      />
      <FormInput
        register={register("engine")}
        error={errors.engine?.message}
        type="text"
        id="engine"
        label="Motor"
        placeholder="Ingresar motor"
        touched={touchedFields.ingine}
      />
      <FormSelect
        register={register("fuel")}
        error={errors.fuel?.message}
        id="fuel"
        label="Combustible"
        options={["diesel", "gasoline"]}
        touched={touchedFields.fuel}
      />
      <FormSelect
        register={register("vehicleType")}
        error={errors.vehicleType?.message}
        id="vehicleType"
        label="Tipo de vehiculo"
        options={["camion", "automovil", "motocicleta"]}
        touched={touchedFields.vehicleType}
      />
    </>
  );
}
export default FormVehicleData;
