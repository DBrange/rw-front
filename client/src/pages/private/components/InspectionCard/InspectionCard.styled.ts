import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivCard = styled.div<{ $noHover?: boolean }>`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 4rem;
  text-align: end;
  /* line-height: 4rem; */
  padding: 0 1rem;
  border: 2px solid ${theme.sColor};
  border-radius: 0.8rem;
  transition: all 0.2s linear;
  position: relative;

  ${({ $noHover }) => $noHover ? `` : `  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px 0 ${`${theme.sColor}66`};
    cursor: pointer;
  }`}

`;

export const IconCard = styled.i`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const CardContent = styled(Link)`
  /* display:flex;
  flex-direction: column; */
  text-decoration: none;
  color: ${theme.textColor};
`;

export const ContainerCardTextContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  /* flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; */
`;
export const CardTextContainer = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: start;
/* flex-wrap: wrap; */
gap: 2px;
/* position: relative; */
`;
export const CardText = styled.h5`
`;

export const CardTextLabel = styled.label`
font-size: .7rem;
font-weight: 200;
/* position: absolute; */
top: -15px;
left: 0;
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
