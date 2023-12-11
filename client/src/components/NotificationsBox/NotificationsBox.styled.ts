import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionNotificationsBox = styled.div`
  position: absolute;
  left: -310px;
  width: 300px;
  border-radius: 0.75rem;
  padding-bottom: 0.7rem;
  border: ${theme.sColor} solid 2px;
  overflow: hidden;
  `;

export const DivNotificationsBox = styled.div`
  overflow-y: scroll;
  position: relative;
  max-height: 350px;
  `;

export const H3NotificationBox = styled.h3`
  padding: 0.7rem;
`;
