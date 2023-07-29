import { useInspectContext } from "../..";
import { Modal } from "../../../../components";

function InspectContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
  }) {
  const {modalActive} = useInspectContext()
  return (
    <>
      <Modal modalActive={modalActive} />
      <div className="w-[90%] m-auto">{children}</div>;
    </>
  );
}
export default InspectContainer;
