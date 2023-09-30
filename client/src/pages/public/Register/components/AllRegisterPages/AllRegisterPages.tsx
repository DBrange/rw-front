import { BtnChoice, FormLegalPersonalData, FormOpenClose, FormPersonalData, FormSwornDeclaration } from "@/components";
import { FormAllDetailsRegister, useRegisterContext } from "../..";

function AllRegisterPages() {
    const {
      userActive,
      page,
      changeForm,
      inputValues,
      changeInputValues,
      inputTouched,
      errorsInputValues,
      changeSelectValues,
      changeInputForCheckbox,
    } = useRegisterContext();
  return (
    <>
      <FormOpenClose
        formName="Tipo de usuario"
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
        formName="Persona particular"
        isActive={userActive.personal && page === 1}
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
        isActive={userActive.legalPersonal && page === 1}
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
        formName="Detalle"
        isActive={page === 2}
        form={
          <>
            <FormAllDetailsRegister
              user={userActive}
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
export default AllRegisterPages