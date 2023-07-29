import { useReportContext } from "../..";
import { Modal } from "../../../../components";

function ReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
  }) {
  const {modalActive} = useReportContext()
  return (
    <>
      <Modal modalActive={modalActive} />
      <div className="w-[90%] m-auto">{children}</div>
    </>
  );
}
export default ReportContainer;
