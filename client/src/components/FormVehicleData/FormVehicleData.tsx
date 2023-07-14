import { FormInput, FormSelect } from "..";

interface Props {
  register: any;
  errors: any;
}


function FormVehicleData({ register, errors }: Props) {
  return (
    <>
      <FormInput
        register={register("year", { valueAsNumber: true })}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ingrese el Año"
      />
      <FormInput
        register={register("color")}
        error={errors.color?.message}
        type="text"
        id="color"
        label="Color"
        placeholder="Ingrese el color"
      />
      <FormInput
        register={register("tireBrand")}
        error={errors.tireBrand?.message}
        type="text"
        id="tireBrand"
        label="Marca de las ruedas"
        placeholder="Ingrese la marca"
      />
      <FormInput
        register={register("tireZise")}
        error={errors.tireZise?.message}
        type="text"
        id="tireZise"
        label="Tamaño de la rueda"
        placeholder="Ingrese el tamaño"
      />
      <FormInput
        register={register("tireWear")}
        error={errors.tireWear?.message}
        type="text"
        id="tireWear"
        label="Desgaste de la rueda"
        placeholder="Ingrese el desgaste"
      />

      <label htmlFor="">Daño</label>
      <input type="checkbox" {...register("damage")} />

      <FormInput
        register={register("damageLocation")}
        error={errors.damageLocation?.message}
        type="text"
        id="damageLocation"
        label="Lugar dañado"
        placeholder="Ingrese el lugar"
      />

      {/* <input type="file" /> */}

      <FormInput
        register={register("plate")}
        error={errors.plate?.message}
        type="text"
        id="plate"
        label="Patente"
        placeholder="Ingrese la patente"
      />

      <label htmlFor="">GNC</label>
      <input type="checkbox" {...register("gnc")} />

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
      />
      <FormSelect
        register={register("vehicleType")}
        error={errors.vehicleType?.message}
        id="vehicleType"
        label="Tipo de combustible"
        options={["normal", "premium"]}
      />
    </>
  );
}
export default FormVehicleData