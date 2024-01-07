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
  z-index: 29;
  background-color: ${theme.pColor};
  `;

export const DivNotificationsBox = styled.div`
  overflow-y: scroll;
  position: relative;
  max-height: 350px;
  z-index: 29;
  `;

export const H3NotificationBox = styled.h3`
  padding: 0.7rem;
  `;

export const PEmptyNotifications = styled.p`
  font-size: .8rem;
  margin-left: .9rem;
  margin-top: 2rem;
  `
