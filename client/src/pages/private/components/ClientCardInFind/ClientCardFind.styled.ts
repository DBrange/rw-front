import { theme } from "@/styledComponents";
import styled from "styled-components";

export const ContainerCardFindText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  `;

export const IconCardFind = styled.i`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1rem 0;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ContainerCardFindTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DivCardFind = styled.div<{ $noHover?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  text-align: center;
  padding: 0 1rem;
  border: 2px solid ${theme.sColor};
  border-radius: 0.8rem;
  transition: all 0.2s linear;
  position: relative;

  ${({ $noHover }) =>
    $noHover
      ? ``
      : `  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px 0 ${`${theme.sColor}66`};
    cursor: pointer;
  }`}

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const BtnClientCardFind = styled.button`

  background-color: ${theme.sColor};
  outline: none;
  border: none;
  border-radius: .25rem;
  padding: .4rem;
  margin: 1rem;
  align-items: center;

  &:hover{

    cursor: pointer;
  }
`