import {
  FormElectronicData,
  FormOpenClose,
  FormSwornDeclaration,
  FormVehicleData,
} from "@/components";
import BtnChoice from "@/components/BtnChoice/BtnChoice";
import {
  FormAllDetailsClientCreateInspection,
  useClientCreateInspectionContext,
} from "../..";

function AllClientCreateInspectionPages() {
  const {
    elementActive,
    page,
    changeForm,
    inputValues,
    changeInputValues,
    inputTouched,
    errorsInputValues,
    changeSelectValues,
    changeInputForImages,
    changeInputForCheckbox,
    changeInputValuesNumber,
  } = useClientCreateInspectionContext();
  return (
    <>
      <FormOpenClose
        formName="Tipo de inspeccion"
        isActive={page === 0}
        form={
          <BtnChoice
            buttons={[
              {
                value: "vehicle",
                label: "Vehiculo",
                active: elementActive.vehicle,
              },
              {
                value: "electronic",
                label: "Electrodomestico",
                active: elementActive.electronic,
              },
            ]}
            changeForm={changeForm}
          />
        }
      />
      <FormOpenClose
        formName="Vehiculo"
        isActive={elementActive.vehicle && page === 1}
        form={
          <FormVehicleData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeSelectValues={changeSelectValues}
            changeInputForCheckbox={changeInputForCheckbox}
            changeInputForImages={changeInputForImages}
            changeInputValuesNumber={changeInputValuesNumber}
          />
        }
      />
      <FormOpenClose
        formName="Electrodomestico"
        isActive={elementActive.electronic && page === 1}
        form={
          <FormElectronicData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeSelectValues={changeSelectValues}
          />
        }
      />
      <FormOpenClose
        formName="Detalle"
        isActive={page === 2}
        form={
          <>
            <FormAllDetailsClientCreateInspection
              element={elementActive}
              inputValues={inputValues}
            />

            <FormSwornDeclaration
              changeInputForCheckbox={changeInputForCheckbox}
              label="Declaracion jurada"
              name="swornDeclaration.swornDeclaration"
              id="swornDeclaration.swornDeclaration"
              instructions="llenar con contenido"
            />
          </>
        }
      />
    </>
  );
}
export default AllClientCreateInspectionPages;
