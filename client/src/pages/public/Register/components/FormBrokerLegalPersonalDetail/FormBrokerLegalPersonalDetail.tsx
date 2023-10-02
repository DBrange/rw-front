import { BrokerLegalPersonalValues } from "@/models";
import { FormRegisterLegalPersonalDetail } from "..";
import { RegisterValues } from "../..";

interface Props {
  inputLegalPersonalValues: BrokerLegalPersonalValues;
  inputValues: RegisterValues;
}

function FormBrokerLegalPersonalDetail({
  inputLegalPersonalValues,
  inputValues,
}: Props) {
  return (
    <>
      <FormRegisterLegalPersonalDetail
        inputLegalPersonalValues={inputValues.registerBrokerLegalPersonal}
        brokerValues={inputLegalPersonalValues}
      />
    </>
  );
}
export default FormBrokerLegalPersonalDetail;
