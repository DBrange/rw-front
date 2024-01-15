import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const ModalAccessLevelContainer = styled.div<{
  $modalActive?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: ${({ $modalActive }) => ($modalActive ? "auto" : "none")};
  opacity: ${({ $modalActive }) => ($modalActive ? "1" : "0")};

`;
