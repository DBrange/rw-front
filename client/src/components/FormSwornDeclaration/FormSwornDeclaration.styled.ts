import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivButtonFormSwornDeclaration = styled.button<{ $open: boolean, $error?: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 0.75rem;
  color: ${({ $error }) => ($error ? `${theme.errColor}` : "#aaa")};
  padding: .5rem;
  border-radius: .5rem;

  i {
    margin-left: 1rem;
    line-height: 0.85rem;
    ${({ $open }) => ($open ? `transform: rotate(90deg)` : ``)};
  }

  &:hover {
    background: #fff1;
  }
`;
