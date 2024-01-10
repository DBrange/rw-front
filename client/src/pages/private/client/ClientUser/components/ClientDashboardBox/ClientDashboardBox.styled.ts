import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivClientDashboardBox = styled.div`
display: flex;
justify-content: space-evenly;
height: 80vh;
flex-direction: column;

/* @media(min-width: 800px){
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
} */
`
export const BtnClientDashboardBox = styled(Link)`
  width: 100%;
  height: 200px;

  color: ${theme.pColor};
  border: 2px solid ${theme.sColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${theme.sColor};
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px 0 ${`${theme.sColor}66`};
    cursor: pointer;
  }

  /* @media (min-width: 800px) {
    height: 50vh;
  } */
`;

