import {
  FormVehicleReportData,
  FormCrashData,
  FormThieftVehicleData,
  FormFireData,
} from "..";
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
    thirdPartyVehiclesForm,
    isSwornDeclaration,
  } = useReportContext();


    return (
      <>
        <FormEffectOpenClose
          formName={"Vehiculo"}
          isActive={activeForm === "vehicle" && page === 2}
          form={
            <>
              <FormVehicleReportData />
              <PageButton changePage={changePage} page={page} max={6} />
            </>
          }
        />
        <FormEffectOpenClose
          formName={"Tipo de denuncia"}
          isActive={activeForm === "vehicle" && page === 3}
          form={
            <>
              <FormVehicleReportBtn />

              <PageButton changePage={changePage} page={page} max={6} />
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
                isSwornDeclaration={isSwornDeclaration}
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
              <FormThieftVehicleData />
              <PageButton
                changePage={changePage}
                page={page}
                max={4}
                isSwornDeclaration={isSwornDeclaration}
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
                isSwornDeclaration={isSwornDeclaration}
              />
            </>
          }
        />
      </>
    );
}
export default FormVehicleReportContainer