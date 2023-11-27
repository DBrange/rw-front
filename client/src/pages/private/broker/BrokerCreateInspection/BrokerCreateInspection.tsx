import { BrokerCreateInspectionContainer, BrokerCreateInspectionProvider } from ".";
import { BrokerCreateInspectionBox } from "./components";

function BrokerCreateInspection() {
  return (
    <BrokerCreateInspectionProvider>
      <BrokerCreateInspectionContainer>
        <BrokerCreateInspectionBox />
      </BrokerCreateInspectionContainer>
    </BrokerCreateInspectionProvider>
  );
}
export default BrokerCreateInspection