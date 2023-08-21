import { FormVehicleData, useInspectContext } from "../..";
import {
  ButtonChoice,
  FormEffectOpenClose,
  FormElectronicData,
  FormLegalPersonalData,
  FormPersonalData,
  PageButton,
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
    touchedFields,
    userBtnActive,
    page,
    changePage,
    setIsPhone,
    isPhone,trigger
  } = useInspectContext();
  return (
    <>
      <form
        className="w-[100%] gap-5 flex flex-col items-center"
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
                <PageButton
                  changePage={changePage}
                  page={page}
                  max={2}
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
                    max={2}
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
                    max={2}
                  />
                </>
              }
            />
          </div>
          <div>
            <FormEffectOpenClose
              formName={"Vehiculo"}
              isActive={activeForm === "vehicle" && page === 2}
              form={
                <>
                  <FormVehicleData />
                  <PageButton
                    changePage={changePage}
                    page={page}
                    max={2}
                  />
                </>
              }
            />
            <FormEffectOpenClose
              formName={"Electrodomestico"}
              isActive={activeForm === "electronic" && page === 2}
              form={
                <>
                  <FormElectronicData
                    errors={errors}
                    register={register}
                    touchedFields={touchedFields}
                    setIsPhone={setIsPhone}
                    isPhone={isPhone}
                    trigger={trigger}
                  />
                  <PageButton
                    changePage={changePage}
                    page={page}
                    max={2}
                  />
                </>
              }
            />
          </div>
        </section>
      </form>
    </>
  );
}
export default FormInspect;
