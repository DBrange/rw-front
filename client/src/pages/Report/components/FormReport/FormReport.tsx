import { useReportContext } from "../../context";
import {
  ButtonChoice,
  ErrorBtn,
  FormEffectOpenClose,
  FormLegalPersonalData,
  FormPersonalData,
  PageButton,
} from "../../../../components";
import { FormElectronicReportContainer, FormVehicleReportContainer } from "..";

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
    isError,
  } = useReportContext();

  return (
    <>
      <form
        className="w-[100%] gap-5 flex flex-col items-center"
        onSubmit={handleSubmit(submitData)}
      >
        <FormEffectOpenClose
          formName={"Tipo de denuncia"}
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
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={false}
                  max={6}
                />
              </div>
            </>
          }
        />

        <section className="w-full">
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
                  <PageButton
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaPersonal}
                    max={6}
                  />
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
                  <PageButton
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaLegalPersonal}
                    max={6}
                  />
                </>
              }
            />
          </div>
          <div>
            <FormVehicleReportContainer />
            <FormElectronicReportContainer />
          </div>
        </section>
      </form>
      <ErrorBtn isError={isError} />
    </>
  );
}
export default FormReport;
