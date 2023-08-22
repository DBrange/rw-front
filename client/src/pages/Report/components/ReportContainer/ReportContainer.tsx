import { useReportContext } from "../..";
import { ButtonBack, Modal, ModalError } from "../../../../components";

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
      <ButtonBack />
      <div className="w-[90%] max-w-[600px] m-auto">{children}</div>
    </>
  );
}
export default ReportContainer;
