import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const Select = styled.select<{ $error: boolean }>`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  transition: all 0.2s linear;
  background-color: ${theme.pColor};
  color: ${theme.textColor};
  border: ${(props) =>
    props.$error ? `2px solid ${theme.errColor}` : `2px solid #444`};
  border-radius: 0.25rem;
  outline: none;
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

export const Option = styled.option`
  background-color: ${theme.pColor};
`;
