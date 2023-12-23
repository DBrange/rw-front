import { theme } from "@/styledComponents";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 40px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 0;
    transform: translate(-50%, 40px);
  }
`;

export const DivModalToast = styled.div<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
  padding: 1rem 2rem;
  background-color: ${theme.pColor};
  border: 2px solid ${theme.sColor};
  border-radius: 3rem;
  box-shadow: 0px 5px 10px 0 ${`${theme.sColor}66`};
  text-align: center;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.2s linear;
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 1s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  z-index: ${({ $visible }) => ($visible ? 1000 : 0)};
  
  p {
    font-size: 0.7rem;
  }
`;

export const IToast = styled.i<{ $green?: boolean }>`
  color: ${({ $green }) => ($green ? "#22c55e" : `${theme.errColor}`)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
