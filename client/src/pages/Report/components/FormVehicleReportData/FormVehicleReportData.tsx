import { useState } from "react";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormSelect,
} from "../../../../components";
import { FormUploadImageReport, useReportContext } from "../../..";

function FormVehicleDataReport() {
  
  const {
    errors,
    register,
    touchedFields,
    setValue
  } = useReportContext();
  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  const [slider, setSlider] = useState<number>(50);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.ceil(parseInt(e.target.value) / 10) * 10;
    setValue("schemaVehicle.tireWear", value);
    setSlider(value);
  };
  return (
    <>
      <FormInput
        register={register("schemaVehicle.year", { valueAsNumber: true })}
        error={errors.schemaVehicle?.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Ano del vehiculo"
        touched={touchedFields.year}
      />
      <FormInput
        register={register("schemaVehicle.color")}
        error={errors.schemaVehicle?.color?.message}
        type="text"
        id="color"
        label="Color"
        placeholder="Color del vehiculo"
        touched={touchedFields.schemaVehicle?.color}
      />
      <FormInput
        register={register("schemaVehicle.tireBrand")}
        error={errors.schemaVehicle?.tireBrand?.message}
        type="text"
        id="tireBrand"
        label="Marca de las ruedas"
        placeholder="Ingrese la marca"
        touched={touchedFields.schemaVehicle?.tireBrand}
      />
      <FormInput
        register={register("schemaVehicle.tireZise")}
        error={errors.schemaVehicle?.tireZise?.message}
        type="text"
        id="tireZise"
        label="Tamaño de la rueda"
        placeholder="Ingrese el tamaño"
        touched={touchedFields.schemaVehicle?.tireZise}
      />
      {/* <FormInput
        register={register("schemaVehicle.tireWear")}
        error={errors.schemaVehicle?.tireWear?.message}
        type="text"
        id="tireWear"
        label="Desgaste de la rueda"
        placeholder="Ingrese el desgaste"
        touched={touchedFields.schemaVehicle?.tireWear}
      /> */}
      <div className="flex flex-col">
        <label htmlFor="tireWear">Desgaste de la rueda</label>
        <div className="flex gap-2">
          <input
            className="flex-1"
            type="range"
            id="tireWear"
            {...register("schemaVehicle.tireWear", { valueAsNumber: true })}
            onChange={handleSliderChange}
            min="0"
            max="100"
          />
          <p className=" flex-none">{`${slider}%`}</p>
        </div>
      </div>

      <FormCheckbox
        register={register("schemaVehicle.damage")}
        setChecked={setIsCheckedDamage}
        id={"damage"}
        label={"Daño"}
      />

      <FormInputOptional
        register={register("schemaVehicle.damageLocation")}
        error={errors.schemaVehicle?.damageLocation?.message}
        checked={isCheckedDamage}
        type="text"
        id="damageLocation"
        label="Lugar dañado"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaVehicle?.damageLocation}
      />

      <FormUploadImageReport schemaName={"schemaVehicle.images"} />
      {/* <label htmlFor="acaaaaa">acaaaa</label>
      <input
        type="file"
        {...register("schemaVehicle.images")}
        onChange={handleFileChange}
      /> */}

      <FormInput
        register={register("schemaVehicle.plate")}
        error={errors.schemaVehicle?.plate?.message}
        type="text"
        id="plate"
        label="Patente"
        placeholder="Ingrese la patente"
        touched={touchedFields.schemaVehicle?.plate}
      />

      <div className="mb-7 mt-4 flex gap-4">
        <label htmlFor="gnc">GNC</label>
        <input id="gnc" type="checkbox" {...register("schemaVehicle.gnc")} />
      </div>

      <FormInput
        register={register("schemaVehicle.brand")}
        error={errors.schemaVehicle?.brand?.message}
        type="text"
        id="brand"
        label="Marca"
        placeholder="Ingresar marca"
        touched={touchedFields.schemaVehicle?.brand}
      />
      <FormInput
        register={register("schemaVehicle.model")}
        error={errors.schemaVehicle?.model?.message}
        type="text"
        id="model"
        label="Modelo"
        placeholder="Ingresar modelo"
        touched={touchedFields.schemaVehicle?.model}
      />
      <FormInput
        register={register("schemaVehicle.engine")}
        error={errors.schemaVehicle?.engine?.message}
        type="text"
        id="engine"
        label="Motor"
        placeholder="Ingresar motor"
        touched={touchedFields.schemaVehicle?.ingine}
      />
      <FormSelect
        register={register("schemaVehicle.fuel")}
        error={errors.schemaVehicle?.fuel?.message}
        id="fuel"
        label="Combustible"
        options={["diesel", "gasoline"]}
        touched={touchedFields.schemaVehicle?.fuel}
      />
      <FormSelect
        register={register("schemaVehicle.vehicleType")}
        error={errors.schemaVehicle?.vehicleType?.message}
        id="vehicleType"
        label="Tipo de vehiculo"
        options={["camion", "automovil", "motocicleta"]}
        touched={touchedFields.schemaVehicle?.vehicleType}
      />
    </>
  );
}
export default FormVehicleDataReport;
