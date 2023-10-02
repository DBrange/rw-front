import { BrokerPersonalValues } from "@/models";
import { FormRegisterPersonalDetail } from "..";
import { RegisterValues } from "../..";

interface Props {
  inputPersonalValues: BrokerPersonalValues;
  inputValues: RegisterValues;
}

function FormBrokerPersonalDetail({
  inputPersonalValues,
  inputValues,
}: Props) {
  return (
    <>
      <FormRegisterPersonalDetail
        inputPersonalValues={inputValues.registerBrokerPersonal}
        brokerValues={inputPersonalValues}
      />
    </>
  );
}
export default FormBrokerPersonalDetail;
