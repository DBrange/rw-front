import { useState } from "react";
import { FormCheckbox, FormInput, FormInputOptional, FormSelect } from "..";
import { useInspectContext } from "../../pages";

function FormVehicleData() {
  const { register, errors, touchedFields } = useInspectContext();

  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  return (
    <>
      <FormInput
        register={register("year", { valueAsNumber: true })}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ingrese el Año"
        touched={touchedFields.year}
      />
      <FormInput
        register={register("color")}
        error={errors.color?.message}
        type="text"
        id="color"
        label="Color"
        placeholder="Ingrese el color"
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

      {/* <input type="file" /> */}

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

      {/* <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
      />
      <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
      />
      <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
      /> */}
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
