import { useReportContext } from "../../context";
import {
  FormEffectOpenClose,
  FormElectronicData,
  FormLegalPersonalData,
  FormPersonalData,
  FormVehicleData,
} from "../../../../components";
import { FormElectronicReportData, FormVehicleReportData } from "..";

function FormReport() {
  const {
    userActiveForm,
    handleSubmit,
    selectFormUserSchema,
    selectFormSchema,
    submitData,
    activeForm,
    errors,
    register,
    touchedFields,
  } = useReportContext();
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
      {/* <FormEffectOpenClose
        formName={"Persona particular"}
        isActive={userActiveForm === "person" }
        form={
          <>
            <FormPersonalData
              errors={errors}
              register={register}
              touchedFields={touchedFields}
            />

          </>
        }
      /> */}

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
        <>
          <FormVehicleData
            errors={errors}
            register={register}
            touchedFields={touchedFields}
          />

          <FormVehicleReportData />
        </>
      ) : (
        <>
          <FormElectronicData
            errors={errors}
            register={register}
            touchedFields={touchedFields}
          />

          <FormElectronicReportData />
        </>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormReport;
