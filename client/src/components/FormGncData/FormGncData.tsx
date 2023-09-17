import { FormInput } from "..";

interface Props {
  changeInputValues: any;
  inputValues: any;
  inputTouched: any;
  errorsInputValues: any;
}

function FormGncData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
}: Props) {
  return (
    <>
      <FormInput
        label="OBLEA*"
        value={inputValues?.gnc?.oblea}
        touched={inputTouched.gnc.oblea}
        error={errorsInputValues?.gnc?.oblea}
        handleChange={changeInputValues}
        name="gnc.oblea"
        id="gnc.oblea"
        type="text"
        placeholder="Ingresar oblea"
      />
      <FormInput
        label="Patente*"
        value={inputValues?.gnc?.plate}
        touched={inputTouched?.gnc?.plate}
        error={errorsInputValues?.gnc?.plate}
        handleChange={changeInputValues}
        name="gnc.plate"
        id="gnc.plate"
        type="text"
        placeholder="Ingresar patente"
      />
      <FormInput
        label="Vencimiento*"
        value={inputValues?.gnc?.expireDate}
        touched={inputTouched.gnc?.expireDate}
        error={errorsInputValues?.gnc?.expireDate}
        handleChange={changeInputValues}
        name="gnc.expireDate"
        id="gnc.expireDate"
        type="date"
        placeholder="Ingresar fecha de vencimiento"
      />
    </>
  );
}
export default FormGncData;
