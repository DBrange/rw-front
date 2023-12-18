import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  text-align: end;
  line-height: 4rem;
  padding: 0 1rem;
  border: 2px solid ${theme.sColor};
  border-radius: 0.8rem;
  transition: all 0.2s linear;
  position: relative;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px 0 ${`${theme.sColor}66`};
    cursor: pointer;
  }
`;

export const IconCard = styled.i`
  display: flex;
  align-items: center;
`;
export const CardText = styled(Link)`
  text-decoration: none;
  color: ${theme.textColor};
`;
export const CardTextNoLink = styled.div`
  text-decoration: none;
  color: ${theme.textColor};
`;

export const SpanInspectionCard = styled.span`
  height: 100%;
  font-size: 0.5rem;
  position: absolute;
  top: -2px;
  left: -42px;
  color: ${theme.sColor};
  writing-mode: vertical-rl; /* Establece la escritura vertical de derecha a izquierda */
  text-orientation: upright; /* Mantiene la orientación normal de las letras */
  /* letter-spacing: 0.001em; */
`;
