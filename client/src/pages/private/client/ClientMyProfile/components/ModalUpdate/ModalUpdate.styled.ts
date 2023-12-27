import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivModalUpdate = styled.div<{
  $modalActive: boolean;
  $error?: boolean;
}>`
  width: 90%;
  max-width: 500px;
  background-color: ${({ $error }) =>
    $error ? `${theme.errBgColor}` : `${theme.pColor}`};
  border-radius: 0.375rem;
  padding: 2.25rem;
  text-align: start;
  transition: all 0.2s linear 0.15s;
  transform: ${({ $modalActive }) =>
    $modalActive ? "scale(1)" : "scale(0.5)"};
`;

export const DivBtnModalUpdate = styled.div<{ $right?: boolean }>`
  width: 100%;
  text-align: ${({ $right }) => ($right ? "start" : "end")};
`;

export const BtnModalUpdate = styled.button<{ $error?: boolean }>`
  cursor: ${({ $error }) => ($error ? "not-allowed" : "pointer")};
  pointer-events: ${({ $error }) => ($error ? "none" : "auto")};
  width: 70%;
  max-width: 200px;
  height: 2rem;
  margin-top: 1.25rem;
  border-radius: 0.75rem;
  color: ${theme.pColor};
  background-color: ${({ $error }) => ($error ? `gray` : `${theme.sColor}`)};
  outline: none;
  border: none;
  &:active {
    transform: translateY(0.25rem);
  }
  position: relative;
  ${({ $error }) => ($error ? `color: #333` : "")}
`;

export const SpanModalUpdate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  padding: 0.25rem;
  color: ${theme.textColor};
  right: 1rem;
  top: 1rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #fff1;
  }
`;
