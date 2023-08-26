import { useReportContext } from "../../context";

function FormVehicleReportBtn() {
  const { typeComplaintForm, typeComplaint } = useReportContext();

  return (
    <div className="flex flex-col gap-3">
      <button
        className={`${
          typeComplaintForm.theft && "bg-violet-500 text-white"
        } w-full hover:bg-violet-300 p-4 rounded-md`}
        onClick={typeComplaint}
        value="theft"
        type="button"
      >
        Robo
      </button>
      <button
        className={`${
          typeComplaintForm.crash && "bg-violet-500 text-white"
        } w-full hover:bg-violet-300 p-4 rounded-md`}
        onClick={typeComplaint}
        value="crash"
        type="button"
      >
        Choque
      </button>
      <button
        className={`${
          typeComplaintForm.fire && "bg-violet-500 text-white"
        } w-full hover:bg-violet-300 p-4 rounded-md`}
        onClick={typeComplaint}
        value="fire"
        type="button"
      >
        Incendio
      </button>
    </div>
  );
}
export default FormVehicleReportBtn;
