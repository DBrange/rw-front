import {
  BtnChoice,
  FormCrashVehicle,
  FormFireVehicle,
  FormOpenClose,
  FormTheftElectronic,
  FormTheftVehicle,
} from "@/components";
import { useClientInspectedCreateReportContext } from "../..";

function AllClientInspectedCreateReportPages() {
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
  } = useClientInspectedCreateReportContext();

  const correspondingPage =
    amountInjured > 0 && amountVehicles > 0 && reportActive.crash
      ? 4
      : amountInjured > 0 && reportActive.fire
      ? 3
      : amountInjured < 1 && amountVehicles > 0 && reportActive.crash
      ? 3
      : amountInjured > 0 && amountVehicles < 1 && reportActive.crash
      ? 3
      : 2;

  return (
    <>
      <FormOpenClose
        formName="Tipo de denuncia"
        isActive={elementReportActive.vehicleReport && page === 0}
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
        isActive={elementReportActive.electronic && page === 0}
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
        formName="Robo"
        isActive={
          elementReportActive.vehicleReport && reportActive.theft && page === 1
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
          elementReportActive.electronic && reportActive.theft && page === 1
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
          elementReportActive.vehicleReport && reportActive.fire && page === 1
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
          elementReportActive.vehicleReport && reportActive.crash && page === 1
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

      {/* <FormOpenClose
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
      /> */}
    </>
  );
}
export default AllClientInspectedCreateReportPages;
