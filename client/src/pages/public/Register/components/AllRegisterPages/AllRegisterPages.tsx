import {
  BtnChoice,
  FormBrokerLegalPersonalData,
  FormBrokerPersonalData,
  FormOpenClose,
  FormRegisterLegalPersonalData,
  FormRegisterPersonalData,
  FormSwornDeclaration
} from "@/components";
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
    userType,
    brokerActive,
  } = useRegisterContext();
  return (
    <>
      <FormOpenClose
        formName="Usted es..."
        isActive={page === 0}
        form={
          <BtnChoice
            buttons={[
              {
                value: "client",
                label: "Cliente",
                active: userType.client,
              },
              {
                value: "broker",
                label: "Broker",
                active: userType.broker,
              },
            ]}
            changeForm={changeForm}
          />
        }
      />
      <FormOpenClose
        formName="Tipo de usuario"
        isActive={page === 1}
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
        isActive={brokerActive.personal && page === 2 && userType.broker}
        form={
          <FormBrokerPersonalData
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
        isActive={brokerActive.legalPersonal && page === 2 && userType.broker}
        form={
          <FormBrokerLegalPersonalData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
          />
        }
      />
      <FormOpenClose
        formName="Persona particular"
        isActive={userActive.personal && page === 2 && userType.client}
        form={
          <>
            <FormRegisterPersonalData
              changeInputValues={changeInputValues}
              inputValues={inputValues}
              inputTouched={inputTouched}
              errorsInputValues={errorsInputValues}
              changeSelectValues={changeSelectValues}
            />
          </>
        }
      />
      <FormOpenClose
        formName="Persona juridica"
        isActive={userActive.legalPersonal && page === 2 && userType.client}
        form={
          <FormRegisterLegalPersonalData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
          />
        }
      />
      <FormOpenClose
        formName="Detalle"
        isActive={page === 3}
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
export default AllRegisterPages;
