import { PageButtonReport, FormVehicleReportData, FormCrashData, FormThirdPartyVehicleData, FormThieftData, FormFireData, FormInjuredInfoData } from "..";
import { useReportContext } from "../..";
import { FormEffectOpenClose, FormVehicleData } from "../../../../components";

function FormVehicleReportContainer() {
  const {
    activeForm,
    errors,
    register,
    touchedFields,
    changePage,
    page,
    typeComplaintForm,
    thirdInjuredForm
  } = useReportContext();


    return (
      <>
        <FormEffectOpenClose
          formName={"Vehiculo"}
          isActive={activeForm === "vehicle" && page === 2}
          form={
            <>
              <FormVehicleReportData

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
                  errors={errors.schemaVehicleCrashReport}
                />
              </div>
            </>
          }
        />

        {thirdInjuredForm()}

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
                  errors={errors.schemaThirdPartyVehicleReport}
                />
              </div>
            </>
          }
        />

        <FormEffectOpenClose
          formName={"Robo"}
          isActive={
            activeForm === "vehicle" && typeComplaintForm.theft && page === 4
          }
          form={
            <>
              <FormThieftData />
              <div className="w-full">
                <PageButtonReport
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicleTheftReport}
                />
              </div>
            </>
          }
        />

        <FormEffectOpenClose
          formName={"Incendio"}
          isActive={typeComplaintForm.fire && page === 4}
          form={
            <>
              <FormFireData />
              <div className="w-full">
                <PageButtonReport
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicleFireReport}
                />
              </div>
            </>
          }
        />
      </>
    );
}
export default FormVehicleReportContainer