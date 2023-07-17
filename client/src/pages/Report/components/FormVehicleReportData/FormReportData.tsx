import { FormCrashData, FormFireData, FormThieftData } from "..";
import { useReportContext } from "../../context";

function FormVehicleReportData() {

const {isOpen, typeComplaint} = useReportContext()

  return (
    <div>
      <button onClick={typeComplaint} value="crash">
        Choque
      </button>
      <button onClick={typeComplaint} value="theft">
        Robo
      </button>
      <button onClick={typeComplaint} value="fire">
        Incendio
      </button>

      {isOpen.crash && <FormCrashData />}
      {isOpen.theft && <FormThieftData />}
      {isOpen.fire && <FormFireData />}

    </div>
  );
}
export default FormVehicleReportData