import { FormElectronicReportData, FormThieftData } from "..";
import { useReportContext } from "../..";
import {
  FormEffectOpenClose,
  FormElectronicData,
  PageButton,
} from "../../../../components";

function FormElectronicReportContainer() {
  const {
    activeForm,
    errors,
    register,
    touchedFields,
    page,
    changePage,
    typeComplaintForm,
    setIsPhone,
    isPhone,trigger
  } = useReportContext();
  return (
    <>
      
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
            <PageButton changePage={changePage} page={page} max={4} />
          </>
        }
      />
      <FormEffectOpenClose
        formName={"Tipo de denuncia"}
        isActive={activeForm === "electronic" && page === 3}
        form={
          <>
            <FormElectronicReportData />

            <PageButton changePage={changePage} page={page} max={4} />
          </>
        }
      />
      <FormEffectOpenClose
        formName={"Robo"}
        isActive={
          activeForm === "electronic" && typeComplaintForm.theft && page === 4
        }
        form={
          <>
            <FormThieftData objectType={"schemaElectronicTheftReport"} />
            <PageButton changePage={changePage} page={page} max={4} />
          </>
        }
      />
    </>
  );
}
export default FormElectronicReportContainer;
