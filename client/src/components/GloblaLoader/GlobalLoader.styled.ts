import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionGlobalLoader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.pColor};
  transition: all 0.2s linear;
  pointer-events: none;
  z-index: 101;
  opacity: 1;
`;
