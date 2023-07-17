import { useInspectContext } from "../..";
import {
  FormElectronicData,
  FormLegalPersonalData,
  FormPersonalData,
  FormVehicleData,
} from "../../../../components";

function FormInspect() {
  const {
    userActiveForm,
    handleSubmit,
    selectFormUserSchema,
    selectFormSchema,
    submitData,
    activeForm,
    errors,
    register,
    touchedFields
  } = useInspectContext();

  return (
    <form
      className="w-full bg-gray-200 mx-auto gap-5 flex flex-col items-center"
      onSubmit={handleSubmit(submitData)}
    >
      <div>
        <button onClick={() => selectFormUserSchema("person")}>
          Persona particular
        </button>
        <button onClick={() => selectFormUserSchema("legal")}>
          Persona juridica
        </button>
      </div>
      <div>
        <button onClick={() => selectFormSchema("vehicle")}>Vehiculo</button>
        <button onClick={() => selectFormSchema("electronic")}>
          Electrodomestico
        </button>
      </div>
      {userActiveForm === "person" ? (
        <FormPersonalData
          errors={errors}
          register={register}
          touchedFields={touchedFields}
        />
      ) : (
        <FormLegalPersonalData
          errors={errors}
          register={register}
          touchedFields={touchedFields}
        />
      )}
      {activeForm === "vehicle" ? (
        <FormVehicleData
          errors={errors}
          register={register}
          touchedFields={touchedFields}
        />
      ) : (
        <FormElectronicData
          errors={errors}
          register={register}
          touchedFields={touchedFields}
        />
      )}
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormInspect;
