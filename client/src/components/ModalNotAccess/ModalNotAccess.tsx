import {
  DivNotAccessBrokerCreateReportContainer,
  NotAccessBrokerCreateReportContainer,
} from "./ModalNotAccess.styled";

function ModalNotAccess() {
  return (
    <NotAccessBrokerCreateReportContainer>
      <DivNotAccessBrokerCreateReportContainer>
        <h2>No habilitado</h2>
        <p>
          Esta seccion solo se encuentra habilitada para celulares o tablets, ya que
          necesitara tomar fotos desde los mis mismos.
        </p>
      </DivNotAccessBrokerCreateReportContainer>
    </NotAccessBrokerCreateReportContainer>
  );
}
export default ModalNotAccess;
