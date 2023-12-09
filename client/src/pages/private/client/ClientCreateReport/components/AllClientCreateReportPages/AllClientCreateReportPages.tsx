import {
  BtnChoice,
  FormCrashVehicle,
  FormDamageElectronic,
  FormDamageVehicle,
  FormElectronicData,
  FormFireVehicle,
  FormOpenClose,
  FormSwornDeclaration,
  FormTheftElectronic,
  FormTheftVehicle,
  FormVehicleReportData
} from "@/components";
import { FormAllDetailsClientCreateReport, useClientCreateReportContext } from "../..";


function AllClientCreateReportPages() {
  const {
    elementReportActive,
    reportActive,
    page,
    changeForm,
    inputValues,
    changeInputValues,
    inputTouched,
    errorsInputValues,
    changeSelectValues,
    changeInputForCheckbox,
    changeInputForImages,
    changeInputForSchedule,
    changeInputForTextArea,
    creatingThirdPartyInjuredContainer,
    creatingThirdPartyVehicleContainer,
    amountInjured,
    amountVehicles,
    changeInputValuesNumber,
  } = useClientCreateReportContext();

  const correspondingPage =
    amountInjured > 0 && amountVehicles > 0 && reportActive.crash
      ? 6
      : amountInjured > 0 && reportActive.fire
      ? 5
      : amountInjured < 1 && amountVehicles > 0 && reportActive.crash
      ? 5
      : amountInjured > 0 && amountVehicles < 1 && reportActive.crash
      ? 5
      : 4;

  return (
    <>
      <FormOpenClose
        formName="Tipo de denuncia"
        isActive={page === 0}
        form={
          <BtnChoice
            buttons={[
              {
                value: "vehicleReport",
                label: "Vehiculo",
                active: elementReportActive.vehicleReport,
              },
              {
                value: "electronic",
                label: "Electrodomestico",
                active: elementReportActive.electronic,
              },
            ]}
            changeForm={changeForm}
          />
        }
      />
      <FormOpenClose
        formName="Tipo de denuncia"
        isActive={elementReportActive.vehicleReport && page === 2}
        form={
          <BtnChoice
            buttons={[
              {
                value: "theft",
                label: "Robo",
                active: reportActive.theft,
              },
              {
                value: "fire",
                label: "Incendio",
                active: reportActive.fire,
              },
              {
                value: "crash",
                label: "Choque",
                active: reportActive.crash,
              },
              {
                value: "damage",
                label: "Daño",
                active: reportActive.damage,
              },
            ]}
            changeForm={changeForm}
          />
        }
      />
      <FormOpenClose
        formName="Tipo de denuncia"
        isActive={elementReportActive.electronic && page === 2}
        form={
          <BtnChoice
            buttons={[
              {
                value: "theft",
                label: "Robo",
                active: reportActive.theft,
              },
              {
                value: "damage",
                label: "Daño",
                active: reportActive.damage,
              },
            ]}
            changeForm={changeForm}
          />
        }
      />

      <FormOpenClose
        formName="Vehiculo"
        isActive={elementReportActive.vehicleReport && page === 1}
        form={
          <FormVehicleReportData
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
        isActive={
          elementReportActive.electronic && reportActive.theft && page === 1
        }
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
      {/* <FormOpenClose
        formName="Electrodomestico"
        isActive={elementReportActive.electronic && reportActive.damage && page === 1}
        form={
          <FormElectronicData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeSelectValues={changeSelectValues}
          />
        }
      /> */}
      <FormOpenClose
        formName="Robo"
        isActive={
          elementReportActive.vehicleReport && reportActive.theft && page === 3
        }
        form={
          <FormTheftVehicle
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeInputForCheckbox={changeInputForCheckbox}
            changeInputForImages={changeInputForImages}
            changeInputForSchedule={changeInputForSchedule}
            changeInputValuesNumber={changeInputValuesNumber}
          />
        }
      />
      <FormOpenClose
        formName="Robo"
        isActive={
          elementReportActive.electronic && reportActive.theft && page === 3
        }
        form={
          <FormTheftElectronic
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeInputForCheckbox={changeInputForCheckbox}
            changeInputForImages={changeInputForImages}
            changeInputForSchedule={changeInputForSchedule}
          />
        }
      />
      <FormOpenClose
        formName="Daño"
        isActive={
          elementReportActive.vehicleReport && reportActive.damage && page === 3
        }
        form={
          <FormDamageVehicle
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeInputForImages={changeInputForImages}
            changeInputForSchedule={changeInputForSchedule}
          />
        }
      />
      <FormOpenClose
        formName="Daño"
        isActive={
          elementReportActive.electronic && reportActive.damage && page === 3
        }
        form={
          <FormDamageElectronic
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeInputForCheckbox={changeInputForCheckbox}
            changeInputForImages={changeInputForImages}
            changeInputForSchedule={changeInputForSchedule}
          />
        }
      />
      <FormOpenClose
        formName="Incendio"
        isActive={
          elementReportActive.vehicleReport && reportActive.fire && page === 3
        }
        form={
          <FormFireVehicle
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeInputForCheckbox={changeInputForCheckbox}
            changeInputForImages={changeInputForImages}
            changeInputForSchedule={changeInputForSchedule}
            changeInputForTextArea={changeInputForTextArea}
            changeInputValuesNumber={changeInputValuesNumber}
          />
        }
      />
      <FormOpenClose
        formName="Crash"
        isActive={
          elementReportActive.vehicleReport && reportActive.crash && page === 3
        }
        form={
          <FormCrashVehicle
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
            changeInputForCheckbox={changeInputForCheckbox}
            changeInputForImages={changeInputForImages}
            changeInputForSchedule={changeInputForSchedule}
            changeInputForTextArea={changeInputForTextArea}
            changeInputValuesNumber={changeInputValuesNumber}
          />
        }
      />

      {creatingThirdPartyInjuredContainer()}

      {creatingThirdPartyVehicleContainer()}

      <FormOpenClose
        formName="Detalle"
        isActive={page === correspondingPage}
        form={
          <>
            <FormAllDetailsClientCreateReport
              element={elementReportActive}
              report={reportActive}
              inputValues={inputValues}
            />

            <FormSwornDeclaration
              changeInputForCheckbox={changeInputForCheckbox}
              label="Declaracion jurada"
              name="swornDeclaration.swornDeclaration"
              id="swornDeclaration.swornDeclaration"
              instructions=""
            />
          </>
        }
      />
    </>
  );
}
export default AllClientCreateReportPages;

