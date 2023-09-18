import { ReportProvider } from "."
import { FormReport, ReportContainer } from "./components"

function Report() {
  return (
    <ReportProvider>
      <ReportContainer>
        <FormReport />
      </ReportContainer>
    </ReportProvider>
  )
}
export default Report