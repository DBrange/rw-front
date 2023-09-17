import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const BtnChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BtnChoi = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  transition: all 0.15s linear;
  color: ${({ $active }) =>
    $active ? `${theme.pColor}` : `${theme.textColor}`};
  outline: none;
  border: none;
  background-color: ${({ $active }) =>
    $active ? `${theme.sColor}` : "transparent"};
  &:hover {
    background-color: ${({ $active }) => ($active ? "" : `${theme.tColor}`)};
  }
`;
