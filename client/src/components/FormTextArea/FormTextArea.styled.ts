import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const TextArea = styled.textarea<{ $error: boolean }>`
  width: 100%;
  padding: 0.5rem;
  color: ${theme.textColor};
  transition: all 0.2s linear;
  background-color: ${theme.pColor};
  border: ${(props) =>
    props.$error ? `2px solid ${theme.errColor}` : `2px solid #444`};
  border-radius: 0.25rem;
  outline: none;
  resize: none;
  &:focus {
    border-color: #60a5fa;
    background-color: #fff1;
  }
  &:hover {
    border: ${(props) =>
      props.$error ? `2px solid ${theme.errColor}` : `2px solid #888`};
    background-color: #fff1;
  }
  &::-webkit-autofill {
    background-color: ${theme.pColor};
  }
`;