import {
  BtnChoice,
  FormCrashVehicle,
  FormElectronicData,
  FormFireVehicle,
  FormLegalPersonalData,
  FormOpenClose,
  FormPersonalData,
  FormSwornDeclaration,
  FormTheftElectronic,
  FormTheftVehicle,
  FormVehicleReportData,
} from "@/components";
import { useReportContext } from "../..";
import { FormAllDetailsReport } from "..";

function AllReportPages() {
  const {
    userActive,
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
  } = useReportContext();

  const correspondingPage =
    amountInjured > 0 && amountVehicles > 0 && reportActive.crash
      ? 8
      : amountInjured > 0 && reportActive.fire
      ? 7
      : amountInjured < 1 && amountVehicles > 0 && reportActive.crash
      ? 7
      : amountInjured > 0 && amountVehicles < 1 && reportActive.crash
      ? 7
      : 6;

  return (
    <>
      <FormOpenClose
        formName="Tipo de denuncia"
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
        formName="Tipo de denuncia"
        isActive={page === 1}
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
        isActive={elementReportActive.vehicleReport && page === 4}
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
            ]}
            changeForm={changeForm}
          />
        }
      />
      <FormOpenClose
        formName="Tipo de denuncia"
        isActive={elementReportActive.electronic && page === 4}
        form={
          <BtnChoice
            buttons={[
              {
                value: "theft",
                label: "Robo",
                active: reportActive.theft,
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
        isActive={elementReportActive.vehicleReport && page === 3}
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
      {/* <FormOpenClose
        formName="Electrodomestico"
        isActive={elementReportActive.electronic && page === 3}
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
          elementReportActive.vehicleReport && reportActive.theft && page === 5
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
          elementReportActive.electronic && reportActive.theft && page === 5
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
        formName="Incendio"
        isActive={
          elementReportActive.vehicleReport && reportActive.fire && page === 5
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
          elementReportActive.vehicleReport && reportActive.crash && page === 5
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
            <FormAllDetailsReport
              user={userActive}
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
export default AllReportPages;
