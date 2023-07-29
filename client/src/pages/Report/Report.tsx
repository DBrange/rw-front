import { FormReport, ReportContainer } from ".";
import { ImageProvider, ReportProvider } from "./context";

function Report() {
  return (
    <ReportProvider>
      <ReportContainer>
        <ImageProvider>
          <FormReport />
        </ImageProvider>
      </ReportContainer>
    </ReportProvider>
  );
}
export default Report;
