import { FormCheckbox, FormInput, FormInputOptional } from "..";
import { FormSelectElecType } from "../../pages";
import {
  AllInspectSchemas,
  AllReportSchemas,
  SchemaElectronicType,
  SchemaPhoneType,
} from "../../models";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface Props {
  register: UseFormRegister<AllInspectSchemas | AllReportSchemas>;
  errors: any; //FieldErrors<SchemaElectronicType & SchemaPhoneType>;
  touchedFields: any;
  setIsPhone: React.Dispatch<React.SetStateAction<boolean>>;
  isPhone: boolean;
  trigger: any;
  setIsSwornDeclaration: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormElectronicData({
  register,
  errors,
  touchedFields,
  setIsPhone,
  isPhone,
  trigger,
  setIsSwornDeclaration,
}: Props) {
  const currentPath = useLocation().pathname

  const electronicType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === "CELULAR") {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  return (
    <>
      <FormSelectElecType
        register={register("schemaElectronic.type")}
        error={errors.schemaElectronic?.type?.message}
        touched={touchedFields.schemaElectronic?.type}
        electronicType={electronicType}
        trigger={trigger}
      />
      <FormInputOptional checked={isPhone}>
        <>
          <FormInput
            register={register("schemaPhone.phoneNumber")}
            error={errors.schemaPhone?.phoneNumber?.message}
            type="text"
            id="schemaPhone.phoneNumber"
            label="Numero del movil*"
            placeholder="Numero del movil"
            touched={touchedFields.schemaPhone?.phoneNumber}
          />
          <FormInput
            register={register("schemaPhone.phoneService")}
            error={errors.schemaPhone?.phoneService?.message}
            type="text"
            id="schemaPhone.phoneService"
            label="Servicio del movil*"
            placeholder="Servicio del movil"
            touched={touchedFields.schemaPhone?.phoneService}
          />
          <FormInput
            register={register("schemaPhone.imei")}
            error={errors.schemaPhone?.imei?.message}
            type="number"
            id="schemaPhone.imei"
            label="IMEI*"
            placeholder="Ingrese el Año"
            touched={touchedFields.schemaPhone?.imei}
          />
        </>
      </FormInputOptional>
      <FormInput
        register={register("schemaElectronic.brand")}
        error={errors.schemaElectronic?.brand?.message}
        type="text"
        id="schemaElectronic.brand"
        label="Marca*"
        placeholder="Ingrese el Año"
        touched={touchedFields.schemaElectronic?.brand}
      />
      <FormInput
        register={register("schemaElectronic.model")}
        error={errors.schemaElectronic?.model?.message}
        type="text"
        id="schemaElectronic.model"
        label="Modelo*"
        placeholder="Ingrese el Año"
        touched={touchedFields.schemaElectronic?.model}
      />
      {currentPath === "/inspection" && (
        <FormCheckbox
          register={register(`swornDeclaration`)}
          setChecked={setIsSwornDeclaration}
          id={`swornDeclaration`}
          label="Aceptar declaracion jurada"
          instructions=""
          trigger={trigger}
        />
      )}
    </>
  );
}
export default FormElectronicData;
