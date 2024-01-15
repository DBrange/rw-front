import { theme } from "@/styledComponents";
import styled from "styled-components";

export const TitleClientProfile = styled.div<{ $open: boolean }>`
  color: ${theme.sColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    display: inline-block;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${theme.textColor};
    padding: 5px;
    border-radius: 50%;
    ${({ $open }) => ($open ? `transform: rotate(90deg)` : ``)};
    &:hover {
      background-color: #fff1;
    }
  }

`;
export const DivClientProfile = styled.div`
  margin: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


export const DivInformationClientProfile = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;

  /* @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    row-gap: 5rem;
  } */
`;