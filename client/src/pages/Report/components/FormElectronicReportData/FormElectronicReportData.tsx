import { FormThieftData } from "..";
import { useReportContext } from "../../context";

function FormElectronicReportData() {
  const { isOpen, typeComplaint } = useReportContext();
  return (
    <>
      
      <button onClick={typeComplaint} value="theft">
        Robo
      </button>
      {isOpen.theft && <FormThieftData />}
    </>
  );
}
export default FormElectronicReportData