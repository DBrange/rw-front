import { useReportContext } from "../../context";
import {
  ButtonChoice,
  FormEffectOpenClose,
  FormElectronicData,
  FormLegalPersonalData,
  FormPersonalData,
  FormVehicleData,
} from "../../../../components";
import { FormCrashData, FormElectronicReportData, FormInjuredInfoData, FormThirdPartyVehicleData, FormVehicleReportData, PageButtonReport } from "..";

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
    userBtnActive,
    page,
    changePage,
    typeComplaintForm,
  } = useReportContext();

      const thirdInjuredForm = () => {
        let a = [];
        for (let i = 0; i < 3; i++) {
          a.push(<FormInjuredInfoData person={i + 1} />);
        }
        console.log(a);
        if (a.length) {
          return (
            <FormEffectOpenClose
              formName={"Terceros lesionados"}
              isActive={typeComplaintForm.crash && page === 5}
              form={
                <>
                  {a}
                  <div className="w-full">
                    <PageButtonReport
                      changePage={changePage}
                      page={page}
                      errors={errors.schemaVehicle}
                    />
                  </div>
                </>
              }
            />
          );
        } else {
          return;
        }
  };
  
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
                  <PageButtonReport
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaVehicle}
                  />
                </div>
              </>
            }
          />
          <FormEffectOpenClose
            formName={"Tipo de denuncia"}
            isActive={activeForm === "vehicle" && page === 3}
            form={
              <>
                <FormVehicleReportData />

                <div className="w-full">
                  <PageButtonReport
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaVehicle}
                  />
                </div>
              </>
            }
          />
          <FormEffectOpenClose
            formName={"Choque"}
            isActive={typeComplaintForm.crash && page === 4}
            form={
              <>
                <FormCrashData />
                <div className="w-full">
                  <PageButtonReport
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaVehicle}
                  />
                </div>
              </>
            }
          />
          <FormEffectOpenClose
            formName={"Vehiculo del tercero"}
            isActive={typeComplaintForm.crash && page === 6}
            form={
              <>
                <FormThirdPartyVehicleData />
                <div className="w-full">
                  <PageButtonReport
                    changePage={changePage}
                    page={page}
                    errors={errors.schemaVehicle}
                  />
                </div>
              </>
            }
          />
          {thirdInjuredForm()}
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
                  <PageButtonReport
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

      {/* {userActiveForm === "person" ? (
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
      )} */}
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormReport;
