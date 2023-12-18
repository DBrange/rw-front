import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivNotification = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${theme.pColor};
  padding: 0.7rem 0.5rem;
  position: relative;
  border-bottom: 1px solid ${theme.sColor};
`;

export const PNotification = styled.p<{$state?: boolean}>`
  font-size: 0.8rem;
  color: ${({$state}) => $state ? `${theme.sColor}`:``};
`;

export const SpanNotification = styled.span`
  position: absolute;
  right: 0.7rem;
  bottom: 0;
  display: flex;
  gap: 15px;
`;

export const BtnNotification = styled.button<{ $yes?: boolean }>`
  background-color: ${({ $yes }) => ($yes ? `${theme.sColor}` : `transparent`)};
  border: ${({ $yes }) => ($yes ? `0` : `1px`)} solid ${theme.sColor};
  color: ${theme.textColor};
  padding: 2px;
  outline: none;
  border-radius: 0.25rem;
  padding: 4px;
  cursor: pointer;
`;

export const SpanNewNotificationCard = styled.span`
  color: ${theme.sColor};
  font-size: 10px;
`




