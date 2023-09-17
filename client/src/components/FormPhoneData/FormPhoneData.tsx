import { FormInput } from "..";

interface Props {
  changeInputValues: any;
  inputValues: any;
  inputTouched: any;
  errorsInputValues: any;
}

function FormPhoneData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
}: Props) {
  return (
    <>
      <FormInput
        label="Numero del movil*"
        value={inputValues.phone.phoneNumber}
        touched={inputTouched?.phone?.phoneNumber}
        error={errorsInputValues?.phone?.phoneNumber}
        handleChange={changeInputValues}
        name="phone.phoneNumber"
        id="phone.phoneNumber"
        type="text"
        placeholder="Ingresar numero del movil"
      />
      <FormInput
        label="Servicio del movil*"
        value={inputValues.phone.phoneService}
        touched={inputTouched?.phone?.phoneService}
        error={errorsInputValues?.phone?.phoneService}
        handleChange={changeInputValues}
        name="phone.phoneService"
        id="phone.phoneService"
        type="text"
        placeholder="Ingresar servicio del movil"
      />
      <FormInput
        label="IMEI*"
        value={inputValues.phone.imei}
        touched={inputTouched?.phone?.imei}
        error={errorsInputValues?.phone?.imei}
        handleChange={changeInputValues}
        name="phone.imei"
        id="phone.imei"
        type="text"
        placeholder="Ingresar IMEI"
      />
    </>
  );
}
export default FormPhoneData;
