import {
  FormCheckbox,
  FormCheckboxOpenClose,
  FormGncData,
  FormImages,
  FormInput,
  FormOptional,
  FormSelect,
  FormTireInVehicle,
} from "@/components";
import {
  AllInspectValues,
  ChangeEventType,
  ClientCreateInspectionValues,
  ErrorsAllInspectValues,
  ErrorsClientCreateInspectionValues,
  SelectEventType,
  TouchedAllInspectValues,
  TouchedClientCreateInspectionValues,
} from "@/pages";
import { SectionFormContainer } from "@/styledComponents";
import { useState } from "react";

interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: AllInspectValues | ClientCreateInspectionValues;
  inputTouched: TouchedAllInspectValues | TouchedClientCreateInspectionValues;
  errorsInputValues:
    | Partial<ErrorsAllInspectValues>
    | Partial<ErrorsClientCreateInspectionValues>
    | undefined;
  changeSelectValues: (e: SelectEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

function FormVehicleData({
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
        value={inputValues?.vehicle?.plate}
        touched={inputTouched?.vehicle?.plate}
        error={errorsInputValues?.vehicle?.plate}
        handleChange={changeInputValues}
        name="vehicle.plate"
        id="vehicle.plate"
        type="text"
        placeholder="Ingresar nombre"
      />
      <FormInput
        label="Año*"
        value={inputValues?.vehicle?.year}
        touched={inputTouched?.vehicle?.year}
        error={errorsInputValues?.vehicle?.year}
        handleChange={changeInputValuesNumber}
        name="vehicle.year"
        id="vehicle.year"
        type="text"
        placeholder="Ingresar año"
      />
      <FormInput
        label="Marca*"
        value={inputValues?.vehicle?.brand}
        touched={inputTouched?.vehicle?.brand}
        error={errorsInputValues?.vehicle?.brand}
        handleChange={changeInputValues}
        name="vehicle.brand"
        id="vehicle.brand"
        type="text"
        placeholder="Ingresar marca"
      />
      <FormInput
        label="Modelo*"
        value={inputValues?.vehicle?.model}
        touched={inputTouched?.vehicle?.model}
        error={errorsInputValues?.vehicle?.model}
        handleChange={changeInputValues}
        name="vehicle.model"
        id="vehicle.model"
        type="text"
        placeholder="Ingresar modelo"
      />
      <FormInput
        label="Color*"
        value={inputValues?.vehicle?.color}
        touched={inputTouched?.vehicle?.color}
        error={errorsInputValues?.vehicle?.color}
        handleChange={changeInputValues}
        name="vehicle.color"
        id="vehicle.color"
        type="text"
        placeholder="Ingresar color"
      />
      <FormCheckboxOpenClose
        label="Esta dañado"
        checked={isDamaged}
        setChecked={setIsDamaged}
        changeInputForCheckbox={changeInputForCheckbox}
        name="vehicle.damage"
        id="vehicle.damage"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Lugar dañado*"
              value={inputValues?.vehicle?.damageLocation}
              touched={false}
              error={""}
              handleChange={changeInputValues}
              name="vehicle.damageLocation"
              id="vehicle.damageLocation"
              type="text"
              placeholder="Ingresar lugar dañado"
            />{" "}
          </>
        }
        checked={isDamaged}
      />

      <FormTireInVehicle
        inputValues={inputValues as AllInspectValues}
        inputTouched={inputTouched as TouchedAllInspectValues}
        changeInputValues={changeInputValues}
        errorsInputValues={errorsInputValues}
      />
      <FormImages
        label="Añadir fotos del vehiculo*"
        error={errorsInputValues?.vehicle?.images}
        id="vehicle.images"
        name="vehicle.images"
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
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="Es 0km"
        name="vehicle.0km"
        id="vehicle.0km"
        instructions=""
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="Airbag explotado"
        name="vehicle.explodedAirbag"
        id="vehicle.explodedAirbag"
        instructions=""
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="No posee rueda de auxilio"
        name="vehicle.noSpareTire"
        id="vehicle.noSpareTire"
        instructions=""
      />
      <FormCheckboxOpenClose
        label="Posee GNC"
        checked={isGnc}
        setChecked={setIsGnc}
        changeInputForCheckbox={changeInputForCheckbox}
        name="vehicle.gnc"
        id="vehicle.gnc"
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
        value={inputValues?.vehicle?.fuel}
        touched={inputTouched?.vehicle?.fuel}
        error={errorsInputValues?.vehicle?.fuel}
        handleChange={changeSelectValues}
        name="vehicle.fuel"
        id="vehicle.fuel"
        options={["DIESEL", "GASOLINA"]}
      />
      <FormSelect
        label="Tipo de vehiculo"
        value={inputValues?.vehicle?.type}
        touched={inputTouched?.vehicle?.type}
        error={errorsInputValues?.vehicle?.type}
        handleChange={changeSelectValues}
        name="vehicle.type"
        id="vehicle.type"
        options={["CAMIONETA", "AUTOMOVIL", "MOTOCICLETA"]}
      />
    </SectionFormContainer>
  );
}
export default FormVehicleData;
