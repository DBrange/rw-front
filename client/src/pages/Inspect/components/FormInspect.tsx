import { useInspectContext } from "../";
import {
  FormElectronicData,
  FormPersonalData,
  FormVehicleData,
} from "../../../components";

function FormInspect() {
  const {
    handleSubmit,
    selectFormUserSchema,
    selectFormSchema,
    schemaVehicle,
    schemaElectronic,
    submitData,
    activeForm,
  } = useInspectContext();

  return (
      <form
        className="w-full bg-slate-600 mx-auto gap-5 flex flex-col items-center"
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
          <button onClick={() => selectFormSchema(schemaVehicle, "vehicle")}>
            Vehiculo
          </button>
          <button
            onClick={() => selectFormSchema(schemaElectronic, "electronic")}
          >
            Electrodomestico
          </button>
        </div>
        <FormPersonalData />
        {activeForm === "vehicle" ? (
          <FormVehicleData />
        ) : (
          <FormElectronicData />
        )}
        <button type="submit">Enviar</button>
      </form>
    
  );
}
export default FormInspect;
