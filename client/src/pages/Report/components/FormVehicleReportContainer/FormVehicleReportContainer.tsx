import { FormVehicleReportData, FormCrashData, FormThieftData, FormFireData } from "..";
import { useReportContext } from "../..";
import { FormEffectOpenClose, PageButton } from "../../../../components";
import FormVehicleReportBtn from "../FormVehicleReportBtn/FormReportBtn";

function FormVehicleReportContainer() {
  const {
    activeForm,
    changePage,
    page,
    typeComplaintForm,
    thirdInjuredForm,
    amountValue,
    amountVehicles,
    thirdPartyVehiclesForm,
  } = useReportContext();


    return (
      <>
        <FormEffectOpenClose
          formName={"Vehiculo"}
          isActive={activeForm === "vehicle" && page === 2}
          form={
            <>
              <FormVehicleReportData />
              <PageButton
                changePage={changePage}
                page={page}
                max={6}
              />
            </>
          }
        />
        <FormEffectOpenClose
          formName={"Tipo de denuncia"}
          isActive={activeForm === "vehicle" && page === 3}
          form={
            <>
              <FormVehicleReportBtn />

              <PageButton
                changePage={changePage}
                page={page}
                max={6}
              />
            </>
          }
        />
        <FormEffectOpenClose
          formName={"Choque"}
          isActive={typeComplaintForm.crash && page === 4}
          form={
            <>
              <FormCrashData />
              <PageButton
                changePage={changePage}
                page={page}
                max={6}
              />
            </>
          }
        />

        {thirdInjuredForm()}
        {thirdPartyVehiclesForm()}

       
        <FormEffectOpenClose
          formName={"Robo"}
          isActive={
            activeForm === "vehicle" && typeComplaintForm.theft && page === 4
          }
          form={
            <>
              <FormThieftData objectType={"schemaVehicleTheftReport"} />
              <PageButton
                changePage={changePage}
                page={page}
                max={4}
              />
            </>
          }
        />

        <FormEffectOpenClose
          formName={"Incendio"}
          isActive={typeComplaintForm.fire && page === 4}
          form={
            <>
              <FormFireData />
              <PageButton
                changePage={changePage}
                page={page}
                max={amountValue ? 5 : 4}
              />
            </>
          }
        />
      </>
    );
}
export default FormVehicleReportContainer