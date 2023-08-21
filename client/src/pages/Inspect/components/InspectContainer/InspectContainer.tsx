import { useInspectContext } from "../..";
import { Modal, ModalError } from "../../../../components";

function InspectContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
  }) {
  const {modalActive, formNotFound} = useInspectContext()
  return (
    <>
      <Modal modalActive={modalActive} />
      <ModalError modalActive={formNotFound} />
      <div className="w-[90%] max-w-[600px] m-auto">{children}</div>;
    </>
  );
}
export default InspectContainer;
