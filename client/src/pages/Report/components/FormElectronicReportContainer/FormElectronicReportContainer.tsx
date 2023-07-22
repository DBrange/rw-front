import { FormElectronicReportData, FormThieftData, PageButtonReport } from "..";
import { useReportContext } from "../..";
import {
  FormEffectOpenClose,
  FormElectronicData,
} from "../../../../components";

function FormElectronicReportContainer() {
  const { activeForm, errors, register, touchedFields, page, changePage, typeComplaintForm } =
    useReportContext();
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
      <FormEffectOpenClose
        formName={"Tipo de denuncia"}
        isActive={activeForm === "electronic" && page === 3}
        form={
          <>
            <FormElectronicReportData />

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
      <FormEffectOpenClose
        formName={"Robo"}
        isActive={activeForm === "electronic" && typeComplaintForm.theft && page === 4}
        form={
          <>
            <FormThieftData />
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
    </>
  );
}
export default FormElectronicReportContainer;
