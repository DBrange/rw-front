import { InspectProvider } from ".";
import { FormInspect, InspectContainer } from "./components";

function Inspect() {
  return (
    <InspectProvider>
      <InspectContainer>
        <FormInspect />
      </InspectContainer>
    </InspectProvider>
  );
}
export default Inspect;
