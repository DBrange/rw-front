import {
  FormElectronicData,
  FormLegalPersonalData,
  FormOpenClose,
  FormPersonalData,
  FormSwornDeclaration,
  FormVehicleData,
} from "@/components";
import BtnChoice from "@/components/BtnChoice/BtnChoice";
import { FormAllDetailsInspect, useInspectContext } from "../..";

function AllInspectPages() {
  const {
    userActive,
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
  } = useInspectContext();
  return (
    <>
      <FormOpenClose
        formName="Tipo de inspeccion"
        isActive={page === 0}
        form={
          <BtnChoice
            buttons={[
              {
                value: "personal",
                label: "Persona particular",
                active: userActive.personal,
              },
              {
                value: "legalPersonal",
                label: "Persona juridica",
                active: userActive.legalPersonal,
              },
            ]}
            changeForm={changeForm}
          />
        }
      />
      <FormOpenClose
        formName="Tipo de inspeccion"
        isActive={page === 1}
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
        formName="Persona particular"
        isActive={userActive.personal && page === 2}
        form={
          <FormPersonalData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeSelectValues={changeSelectValues}
          />
        }
      />
      <FormOpenClose
        formName="Persona juridica"
        isActive={userActive.legalPersonal && page === 2}
        form={
          <FormLegalPersonalData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
          />
        }
      />
      <FormOpenClose
        formName="Vehiculo"
        isActive={elementActive.vehicle && page === 3}
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
        isActive={elementActive.electronic && page === 3}
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
        isActive={page === 4}
        form={
          <>
            <FormAllDetailsInspect
              user={userActive}
              element={elementActive}
              inputValues={inputValues}
            />

            <FormSwornDeclaration
              changeInputForCheckbox={changeInputForCheckbox}
              label="Declaracion jurada"
              name="swornDeclaration.swornDeclaration"
              id="swornDeclaration.swornDeclaration"
              instructions="ni idea bruh"
            />
          </>
        }
      />
    </>
  );
}
export default AllInspectPages;
