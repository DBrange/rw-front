import { PageButtonReport, FormVehicleReportData, FormCrashData, FormThirdPartyVehicleData, FormThieftData, FormFireData, FormInjuredInfoData } from "..";
import { useReportContext } from "../..";
import { FormEffectOpenClose, PageButton } from "../../../../components";
import FormVehicleReportBtn from "../FormVehicleReportBtn/FormReportBtn";

function FormVehicleReportContainer() {
  const {
    activeForm,
    errors,
    changePage,
    page,
    typeComplaintForm,
    thirdInjuredForm,
    amountValue
  } = useReportContext();


    return (
      <>
        <FormEffectOpenClose
          formName={"Vehiculo"}
          isActive={activeForm === "vehicle" && page === 2}
          form={
            <>
              <FormVehicleReportData />
              <div className="w-full">
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicle}
                  max={6}
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
              <FormVehicleReportBtn />

              <div className="w-full">
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicle}
                  max={6}
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
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicleCrashReport}
                  max={6}
                />
              </div>
            </>
          }
        />

        {thirdInjuredForm()}

        <FormEffectOpenClose
          formName={"Vehiculo del tercero"}
          isActive={
            typeComplaintForm.crash && page === 6
          }
          form={
            <>
              <FormThirdPartyVehicleData />
              <div className="w-full">
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaThirdPartyVehicleReport}
                  max={6}
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
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicleTheftReport}
                  max={4}
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
                <PageButton
                  changePage={changePage}
                  page={page}
                  errors={errors.schemaVehicleFireReport}
                  max={amountValue ? 5 : 4}
                />
              </div>
            </>
          }
        />
      </>
    );
}
export default FormVehicleReportContainer