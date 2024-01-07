import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivBtnsModalDeleteBroker = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
`

export const BtnModalDeleteBroker = styled.button<{$yes?: boolean}>`
  background-color: ${({ $yes }) => ($yes ? `${theme.sColor}` : `transparent`)};
  border: ${({ $yes }) => ($yes ? `0` : `1px`)} solid ${theme.sColor};
  color: ${theme.textColor};
  padding: .6rem;
  outline: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;