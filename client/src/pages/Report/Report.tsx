import { FormReport, ReportContainer } from ".";
import { ReportProvider } from "./context";

function Report() {
  return (
    <ReportProvider>
      <ReportContainer>
        <FormReport />
      </ReportContainer>
    </ReportProvider>
  );
}
export default Report;
