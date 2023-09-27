import {
  AllReportValues,
  ChangeEventType,
  ErrorsAllReportValues,
  SelectEventType,
  TouchedAllReportValues,
} from "@/pages";
import {
  FormCheckboxOpenClose,
  FormImages,
  FormInput,
  FormOptional,
  FormTitle,
} from "..";
import { DivSeparator } from "../FormThirdPartyInjured/FormThirdPartyInjured.styled";
import { useState } from "react";
import { SectionFormContainer } from "@/styledComponents";

interface Props {
  inputValues: AllReportValues;
  inputTouched: TouchedAllReportValues;
  errorsInputValues: Partial<ErrorsAllReportValues> | undefined;
  changeInputValues: (e: ChangeEventType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  amountInjured: number;
  index: number;
}

function FormThirdPartyVehicle({
  inputValues,
  inputTouched,
  errorsInputValues,
  changeInputValues,
  changeInputForCheckbox,
  changeInputForImages,
  amountInjured,
  index,
}: Props) {
  const [isOwner, setIsOwner] = useState<boolean>(false);

  const objectValues =
    inputValues?.thirdPartyVehicle?.thirdPartyVehicleInfo?.[index];
  const objectTouched =
    inputTouched?.thirdPartyVehicle?.thirdPartyVehicleInfo?.[index];
  const objectError =
    errorsInputValues?.thirdPartyVehicle?.thirdPartyVehicleInfo?.[index];
  const stringValues = `thirdPartyVehicle.thirdPartyVehicleInfo.${index}`;

  return (
    <SectionFormContainer>
      <FormTitle>{`Vehiculo n° ${index + 1}`}</FormTitle>

      <FormInput
        label="Patente*"
        value={objectValues?.plate}
        touched={objectTouched?.plate}
        error={objectError?.plate}
        handleChange={changeInputValues}
        name={`${stringValues}.plate`}
        id={`${stringValues}.plate`}
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormInput
        label="Año*"
        value={objectValues?.year}
        touched={objectTouched?.year}
        error={objectError?.year}
        handleChange={changeInputValues}
        name={`${stringValues}.year`}
        id={`${stringValues}.year`}
        type="text"
        placeholder="Ingresar año"
      />
      <FormInput
        label="Marca*"
        value={objectValues?.brand}
        touched={objectTouched?.brand}
        error={objectError?.brand}
        handleChange={changeInputValues}
        name={`${stringValues}.brand`}
        id={`${stringValues}.brand`}
        type="text"
        placeholder="Ingresar marca"
      />
      <FormInput
        label="Modelo*"
        value={objectValues?.model}
        touched={objectTouched?.model}
        error={objectError?.model}
        handleChange={changeInputValues}
        name={`${stringValues}.model`}
        id={`${stringValues}.model`}
        type="text"
        placeholder="Ingresar modelo"
      />
      <FormInput
        label="Compañia de seguros*"
        value={objectValues?.insuranceCompany}
        touched={objectTouched?.insuranceCompany}
        error={objectError?.insuranceCompany}
        handleChange={changeInputValues}
        name={`${stringValues}.insuranceCompany`}
        id={`${stringValues}.insuranceCompany`}
        type="text"
        placeholder="Ingresar compañia de seguros"
      />
      <FormInput
        label="Poliza de seguros*"
        value={objectValues?.insurancePolicy}
        touched={objectTouched?.insurancePolicy}
        error={objectError?.insurancePolicy}
        handleChange={changeInputValues}
        name={`${stringValues}.insurancePolicy`}
        id={`${stringValues}.insurancePolicy`}
        type="text"
        placeholder="Ingresar poliza de seguros"
      />
      <FormInput
        label="Nombre del propietario*"
        value={objectValues?.ownerName}
        touched={objectTouched?.ownerName}
        error={objectError?.ownerName}
        handleChange={changeInputValues}
        name={`${stringValues}.ownerName`}
        id={`${stringValues}.ownerName`}
        type="text"
        placeholder="Ingresar nombre del propietario"
      />
      <FormInput
        label="Apellido del propietario*"
        value={objectValues?.ownerLastName}
        touched={objectTouched?.ownerLastName}
        error={objectError?.ownerLastName}
        handleChange={changeInputValues}
        name={`${stringValues}.ownerLastName`}
        id={`${stringValues}.ownerLastName`}
        type="text"
        placeholder="Ingresar apellido del propietario"
      />
      <FormInput
        label="DNI del propietario*"
        value={objectValues?.ownerDni}
        touched={objectTouched?.ownerDni}
        error={objectError?.ownerDni}
        handleChange={changeInputValues}
        name={`${stringValues}.ownerDni`}
        id={`${stringValues}.ownerDni`}
        type="text"
        placeholder="Ingresar DNI del propietario"
      />
      <FormInput
        label="Residencia del propietario*"
        value={objectValues?.address}
        touched={objectTouched?.address}
        error={objectError?.address}
        handleChange={changeInputValues}
        name={`${stringValues}.address`}
        id={`${stringValues}.address`}
        type="text"
        placeholder="Ingresar residencia"
      />
      <FormInput
        label="Telefono del propietario o conductor*"
        value={objectValues?.phoneNumber}
        touched={objectTouched?.phoneNumber}
        error={objectError?.phoneNumber}
        handleChange={changeInputValues}
        name={`${stringValues}.phoneNumber`}
        id={`${stringValues}.phoneNumber`}
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormImages
        label="Añadir fotos del registro y cedula verde*"
        error={objectError?.licensePhoto}
        name={`${stringValues}.licensePhoto`}
        id={`${stringValues}.licensePhoto`}
        changeInputForImages={changeInputForImages}
        instructionsImages={[
          "Registro frente",
          "Registro dorso",
          "Cedula frente",
          "Cedula dorso",
        ]}
      />
      <FormInput
        label="Email del conductor o propietario*"
        value={objectValues?.email}
        touched={objectTouched?.email}
        error={objectError?.email}
        handleChange={changeInputValues}
        name={`${stringValues}.email`}
        id={`${stringValues}.email`}
        type="text"
        placeholder="Ingresar email del conductor"
      />
      <FormCheckboxOpenClose
        label="El conductor es el propietario del vehiculo"
        checked={isOwner}
        setChecked={setIsOwner}
        changeInputForCheckbox={changeInputForCheckbox}
        name={`${stringValues}.owner`}
        id={`${stringValues}.owner`}
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Nombre del conductor*"
              value={objectValues?.name}
              touched={objectTouched?.name}
              error={objectError?.name}
              handleChange={changeInputValues}
              name={`${stringValues}.name`}
              id={`${stringValues}.name`}
              type="text"
              placeholder="Ingresar nombre del conductor"
            />
            <FormInput
              label="Apellido del conductor*"
              value={objectValues?.lastName}
              touched={objectTouched?.lastName}
              error={objectError?.lastName}
              handleChange={changeInputValues}
              name={`${stringValues}.lastName`}
              id={`${stringValues}.lastName`}
              type="text"
              placeholder="Ingresar apellido"
            />
            <FormInput
              label="DNI del conductor*"
              value={objectValues?.dni}
              touched={objectTouched?.dni}
              error={objectError?.dni}
              handleChange={changeInputValues}
              name={`${stringValues}.dni`}
              id={`${stringValues}.dni`}
              type="text"
              placeholder="Ingresar DNI"
            />
          </>
        }
        checked={!isOwner}
      />

      {index + 1 === amountInjured ? <></> : <DivSeparator></DivSeparator>}
    </SectionFormContainer>
  );
}
export default FormThirdPartyVehicle;
