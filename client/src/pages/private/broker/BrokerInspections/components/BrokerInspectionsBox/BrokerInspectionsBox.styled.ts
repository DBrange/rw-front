import { theme } from "@/styledComponents";
import styled from "styled-components";

export const ContainerBtnBrokerSelection = styled.div`
  width: 100%;
  display: flex;
`;
export const BtnBrokerSelection = styled.button<{
  $active?: boolean;
}>`
  outline: none;
  border: ${theme.sColor};
  border-radius: 0.5rem;
  background-color: ${({ $active }) =>
    $active ? `${theme.sColor}` : `${theme.pColor}`};
  color: ${({ $active }) => ($active ? `${theme.pColor}` : `${theme.sColor}`)};
  width: 100%;
  padding: 0.5rem;
`;
