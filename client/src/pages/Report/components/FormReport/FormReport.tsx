import { useReportContext } from "../../context";
import {
  ButtonChoice,
  FormEffectOpenClose,
  FormLegalPersonalData,
  FormPersonalData,
} from "../../../../components";
import {
  FormElectronicReportContainer,
  FormVehicleReportContainer,
  PageButtonReport,
} from "..";

function FormReport() {
  const {
    userActiveForm,
    handleSubmit,
    selectFormUserSchema,
    selectFormSchema,
    submitData,
    errors,
    register,
    touchedFields,
    userBtnActive,
    page,
    changePage,
  } = useReportContext();


  return (
    <form
      className="w-[100%] mx-auto gap-5 flex flex-col items-center"
      onSubmit={handleSubmit(submitData)}
    >
      <FormEffectOpenClose
        formName={"Tipo de inspeccion"}
        isActive={page === 0}
        form={
          <>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <ButtonChoice
                btnOne={"Persona particular"}
                btnTwo={"Persona juridica"}
                isActiveOne={userBtnActive.person}
                isActiveTwo={userBtnActive.legal}
                selectedSchemaOne={() => selectFormUserSchema("person")}
                selectedSchemaTwo={() => selectFormUserSchema("legal")}
              />

              <ButtonChoice
                btnOne={"Vehiculo"}
                btnTwo={"Electrodomestico"}
                isActiveOne={userBtnActive.vehicle}
                isActiveTwo={userBtnActive.electronic}
                selectedSchemaOne={() => selectFormSchema("vehicle")}
                selectedSchemaTwo={() => selectFormSchema("electronic")}
              />
              <div className="w-full">
                <PageButtonReport
                  changePage={changePage}
                  page={page}
                  errors={false}
                />
              </div>
            </div>
          </>
        }
      />

      <section className="">
        <div className="">
          <FormEffectOpenClose
            formName={"Persona particular"}
            isActive={userActiveForm === "person" && page === 1}
            form={
              <>
                <FormPersonalData
                  errors={errors}
                  register={register}
                  touchedFields={touchedFields}
                />
                <div className="w-full">
                  <PageButtonReport
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaPersonal}
                  />
                </div>
              </>
            }
          />
          <FormEffectOpenClose
            formName={"Persona juridica"}
            isActive={userActiveForm === "legal" && page === 1}
            form={
              <>
                <FormLegalPersonalData
                  errors={errors}
                  register={register}
                  touchedFields={touchedFields}
                />
                <div className="w-full">
                  <PageButtonReport
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaLegalPersonal}
                  />
                </div>
              </>
            }
          />
        </div>
        <div>
          <FormVehicleReportContainer />
          <FormElectronicReportContainer />
        </div>
      </section>
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormReport;
