import {
  FormCheckbox,
  FormCheckboxOpenClose,
  FormGncData,
  FormInput,
  FormOptional,
  FormSelect,
  FormSeparateImages
} from "@/components";
import {
  AllReportValues,
  ChangeEventType,
  ClientCreateReportValues,
  ErrorsAllReportValues,
  ErrorsClientCreateReportValues,
  SelectEventType,
  TouchedAllReportValues,
  TouchedClientCreateReportValues,
} from "@/pages";
import { SectionFormContainer } from "@/styledComponents";
import { objForArrEight } from "@/utilities/separateImages.utility";
import { useState } from "react";

interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: AllReportValues | ClientCreateReportValues;
  inputTouched: TouchedAllReportValues | TouchedClientCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsAllReportValues>
    | Partial<ErrorsClientCreateReportValues>
    | undefined;
  changeSelectValues: (e: SelectEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

function FormVehicleReportData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
  changeSelectValues,
  changeInputForCheckbox,
  changeInputForImages,
  changeInputValuesNumber,
}: Props) {
  const [isDamaged, setIsDamaged] = useState<boolean>(false);
  const [isGnc, setIsGnc] = useState<boolean>(false);
  return (
    <SectionFormContainer>
      <FormInput
        label="Patente*"
        value={inputValues?.vehicleReport?.plate}
        touched={inputTouched?.vehicleReport?.plate}
        error={errorsInputValues?.vehicleReport?.plate}
        handleChange={changeInputValues}
        name="vehicleReport.plate"
        id="vehicleReport.plate"
        type="text"
        placeholder="Ingresar nombre"
      />
      <FormInput
        label="Año*"
        value={inputValues?.vehicleReport?.year}
        touched={inputTouched?.vehicleReport?.year}
        error={errorsInputValues?.vehicleReport?.year}
        handleChange={changeInputValuesNumber}
        name="vehicleReport.year"
        id="vehicleReport.year"
        type="text"
        placeholder="Ingresar año"
      />
      <FormInput
        label="Marca*"
        value={inputValues?.vehicleReport?.brand}
        touched={inputTouched?.vehicleReport?.brand}
        error={errorsInputValues?.vehicleReport?.brand}
        handleChange={changeInputValues}
        name="vehicleReport.brand"
        id="vehicleReport.brand"
        type="text"
        placeholder="Ingresar marca"
      />
      <FormInput
        label="Modelo*"
        value={inputValues?.vehicleReport?.model}
        touched={inputTouched?.vehicleReport?.model}
        error={errorsInputValues?.vehicleReport?.model}
        handleChange={changeInputValues}
        name="vehicleReport.model"
        id="vehicleReport.model"
        type="text"
        placeholder="Ingresar modelo"
      />
      <FormInput
        label="Color*"
        value={inputValues?.vehicleReport?.color}
        touched={inputTouched?.vehicleReport?.color}
        error={errorsInputValues?.vehicleReport?.color}
        handleChange={changeInputValues}
        name="vehicleReport.color"
        id="vehicleReport.color"
        type="text"
        placeholder="Ingresar color"
      />
      <FormCheckboxOpenClose
        label="Esta dañado"
        checked={isDamaged}
        setChecked={setIsDamaged}
        changeInputForCheckbox={changeInputForCheckbox}
        name="vehicleReport.damage"
        id="vehicleReport.damage"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Lugar dañado*"
              value={inputValues?.vehicleReport?.damageLocation}
              touched={false}
              error={""}
              handleChange={changeInputValues}
              name="vehicleReport.damageLocation"
              id="vehicleReport.damageLocation"
              type="text"
              placeholder="Ingresar lugar dañado"
            />{" "}
          </>
        }
        checked={isDamaged}
      />
      <FormSeparateImages
        label="Añadir fotos del vehiculo*"
        error={errorsInputValues?.vehicleReport?.images}
        id="vehicleReport.images"
        name="vehicleReport.images"
        changeInputForImages={changeInputForImages}
        instructionsImages={[
          "Lateral conductor",
          "Lateral acompañante",
          "Frente",
          "Trasera",
          "Techo",
          "Parabrisas desde interior",
          "Odómetro / Tablero en contacto",
          "Rueda auxilio",
        ]}
        quantity={8}
        objForArr={objForArrEight}
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="Es 0km"
        name="vehicleReport.okm"
        id="vehicleReport.okm"
        instructions=""
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="Airbag explotado"
        name="vehicleReport.explodedAirbag"
        id="vehicleReport.explodedAirbag"
        instructions=""
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="No posee rueda de auxilio"
        name="vehicleReport.noSpareTire"
        id="vehicleReport.noSpareTire"
        instructions=""
      />
      <FormCheckboxOpenClose
        label="Posee GNC"
        checked={isGnc}
        setChecked={setIsGnc}
        changeInputForCheckbox={changeInputForCheckbox}
        name="vehicleReport.gnc"
        id="vehicleReport.gnc"
        instructions=""
      />
      <FormOptional
        children={
          <FormGncData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
          />
        }
        checked={isGnc}
      />
      <FormSelect
        label="Combustible"
        value={inputValues?.vehicleReport?.fuel}
        touched={inputTouched?.vehicleReport?.fuel}
        error={errorsInputValues?.vehicleReport?.fuel}
        handleChange={changeSelectValues}
        name="vehicleReport.fuel"
        id="vehicleReport.fuel"
        options={["DIESEL", "GASOLINA"]}
      />
      <FormSelect
        label="Tipo de vehiculo"
        value={inputValues?.vehicleReport?.type}
        touched={inputTouched?.vehicleReport?.type}
        error={errorsInputValues?.vehicleReport?.type}
        handleChange={changeSelectValues}
        name="vehicleReport.type"
        id="vehicleReport.type"
        options={["CAMIONETA", "AUTOMOVIL", "MOTOCICLETA"]}
      />
    </SectionFormContainer>
  );
}
export default FormVehicleReportData;
