import { useEffect, useState } from "react";
import { useInspectContext } from "../..";
import {
  ButtonChoice,
  FormEffectOpenClose,
  FormElectronicData,
  FormLegalPersonalData,
  FormPersonalData,
  FormVehicleData,
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
    algo
  } = useInspectContext();

  useEffect(() => {
    algo()
},[])
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
                <PageButton
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
                  <PageButton
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
                  <PageButton
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
          <FormEffectOpenClose
            formName={"Vehiculo"}
            isActive={activeForm === "vehicle" && page === 2}
            form={
              <>
                <FormVehicleData
                  errors={errors}
                  register={register}
                  touchedFields={touchedFields}
                />
                <div className="w-full">
                  <PageButton
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaVehicle}
                  />
                </div>
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
                />
                <div className="w-full">
                  <PageButton
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaElectronic}
                  />
                </div>
              </>
            }
          />
        </div>
      </section>
      <button
        className="w-full h-10 rounded-md text-white active:translate-y-1 bg-violet-500"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
export default FormInspect;
