import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const SectionModalBg = styled.section<{
  $modalActive: boolean;
  $error?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #0008;
  transition: all 0.2s linear;
  pointer-events: ${({ $modalActive }) => ($modalActive ? "auto" : "none")};
  z-index: ${({ $error }) => ($error ? `101` : `100`)};
  opacity: ${({ $modalActive }) => ($modalActive ? "1" : "0")};
`;

export const DivModalSent = styled.div<{
  $modalActive: boolean;
  $error?: boolean;
}>`
  width: 90%;
  max-width: 700px;
  background-color: ${({ $error }) =>
    $error ? `${theme.errBgColor}` : `${theme.pColor}`};
  border-radius: 0.375rem;
  padding: 1.25rem;
  text-align: center;
  transition: all 0.2s linear 0.15s;
  transform: ${({ $modalActive }) =>
    $modalActive ? "scale(1)" : "scale(0.5)"};
`;

export const H3Modal = styled.h3<{ $error?: boolean }>`
  margin-bottom: 1.25rem;
  color: ${({ $error }) => ($error ? `${theme.errColor}` : `${theme.sColor}`)};
`;

export const H4Modal = styled.h5<{ $error?: boolean }>`
  color: ${({ $error }) =>
    $error ? `${theme.errColor}` : `${theme.textColor}`};
  font-weight: 500;
`;

export const BtnModal = styled.button<{ $error?: boolean }>`
  cursor: pointer;
  width: 70%;
  max-width: 200px;
  height: 2rem;
  margin-top: 1.25rem;
  border-radius: 0.75rem;
  color: ${theme.pColor};
  background-color: ${({ $error }) =>
    $error ? `${theme.errColor}` : `${theme.sColor}`};
  outline: none;
  border: none;
  &:active {
    transform: translateY(0.25rem);
  }
`;
