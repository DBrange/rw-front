import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DivGraphBox = styled.div`
  border: 2px solid ${theme.sColor};
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: 800px) {
    width: 100%;
    border: 2px solid ${theme.sColor};
    border-radius: 0.5rem;
    padding: 1rem;
  }
`;
export const DivCircularGraph = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 800px) {
    margin-top: 3rem;
    height: 300px;

  }
`;

export const H3InspectionDetail = styled.h3`
  color: ${theme.sColor};
  /* margin-top: 2rem; */
`;

export const DivOnlyGraphBox = styled.div`
  /* flex: 1 1 1; */

  @media (min-width: 800px) {
    width: 100%;
    height: 400px;
  }
`;

export const ContainerBtnAdminDashboard = styled.div<{ $notLine: boolean }>`
  width: 100%;
  display: flex;

  ${({ $notLine }) =>
    $notLine
      ? ``
      : `& > :first-child {
    border-right: 1px solid ${theme.sColor}; 
  }`}
`;

export const DivBtnAdminDashboard = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem 0 1rem 0;
`;

export const BtnAdminDashboard = styled.button<{
  $active?: boolean;
}>`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 0.7rem;
  color: ${({ $active }) => ($active ? `${theme.sColor}` : `${theme.tColor}`)};
  width: 100%;
  padding: 0.5rem;
`;
