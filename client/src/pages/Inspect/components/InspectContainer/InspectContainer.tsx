import { useInspectContext } from "../..";
import { ButtonBack, Modal, ModalError } from "../../../../components";

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
      <ButtonBack />
      <div className="w-[90%] max-w-[600px] m-auto">{children}</div>;
    </>
  );
}
export default InspectContainer;
