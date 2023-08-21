import { useReportContext } from "../..";
import { Modal, ModalError } from "../../../../components";

function ReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
  }) {
  const { modalActive, formNotFound } = useReportContext();
  return (
    <>
      <ModalError modalActive={formNotFound} />
      <Modal modalActive={modalActive} />
      <div className="w-[90%] m-auto">{children}</div>
    </>
  );
}
export default ReportContainer;
