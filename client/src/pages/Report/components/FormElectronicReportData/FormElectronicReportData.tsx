import { useReportContext } from "../../context";

function FormElectronicReportData() {
  const { typeComplaint, typeComplaintForm } = useReportContext();
  return (
    <>
      <button
        className={`${
          typeComplaintForm.theft && "bg-violet-500 text-white"
        } w-full hover:bg-violet-300 p-4 rounded-md`}
        onClick={typeComplaint}
        value="theft"
      >
        Robo
      </button>
    </>
  );
}
export default FormElectronicReportData