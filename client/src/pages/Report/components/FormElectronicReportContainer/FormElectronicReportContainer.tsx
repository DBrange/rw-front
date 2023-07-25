import { FormElectronicReportData, FormThieftData } from "..";
import { useReportContext } from "../..";
import {
  FormEffectOpenClose,
  FormElectronicData,
  PageButton,
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
            <PageButton
              changePage={changePage}
              page={page}
              errors={errors.schemaElectronic}
              max={4}
            />
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
              <PageButton
                changePage={changePage}
                page={page}
                errors={errors.schemaElectronic}
                max={4}
              />
            </div>
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
    </>
  );
}
export default FormElectronicReportContainer;
