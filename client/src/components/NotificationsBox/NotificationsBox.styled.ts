import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionNotificationsBox = styled.div`
  position: fixed;
  left: 0px;
  width: 100%;
  border-radius: 0.75rem;
  padding-bottom: 0.7rem;
  border: ${theme.sColor} solid 2px;
  overflow: hidden;
  z-index: 29;
  background-color: ${theme.pColor};

  @media (min-width: 800px) {
    left: -370px;
    position: absolute;
    width: 400px;
  }

  @media (min-width: 1200px) {
    left: -310px;
    position: fixed;
    left: 1.3rem;
    width: 400px;
  }
`;

export const DivNotificationsBox = styled.div`
  overflow-y: scroll;
  position: relative;
  height: 77vh;
  z-index: 29;

  @media (min-width: 800px) {
    height: auto;
    max-height: 400px;
  }
`;

export const H3NotificationBox = styled.h3`
  padding: 0.7rem;
  `;

export const PEmptyNotifications = styled.p`
  font-size: .8rem;
  margin-left: .9rem;
  margin-top: 2rem;
  `

export const DivNotificationsBoxLoader = styled.div`
    text-align: center;
    `
