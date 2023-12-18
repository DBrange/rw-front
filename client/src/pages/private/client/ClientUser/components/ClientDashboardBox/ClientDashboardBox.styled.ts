import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivClientDashboardBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 80vh;
`
export const BtnClientDashboardBox = styled(Link)`
  color: ${theme.pColor};
  height: 200px;
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
`;

