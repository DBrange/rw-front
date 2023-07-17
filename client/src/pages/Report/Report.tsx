import { FormReport } from "."
import { ReportProvider } from "./context"

function Report() {
  return (
    <ReportProvider>
      <FormReport />
    </ReportProvider>
  )
}
export default Report