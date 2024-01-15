import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionHeaderInspectionDetail = styled.section`
height: auto;
  margin-bottom: 2rem;
`;
export const DivHeaderInspectionDetail = styled.div`
  text-align: start;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.sColor};
`;

export const H2InspectionDetail = styled.h2`
  color: ${theme.sColor};
  margin-top: 2rem;
`;

export const BtnInspectionDetail = styled.button`
  margin: 3rem 0;
  border: none;
  background-color: ${theme.sColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  @media (min-width: 800px) {
    width: 200px;
  }
  `;

export const AInspectionDetail = styled.a`
  margin: 3rem 0;
  border: none;
  background-color: ${theme.sColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: ${theme.pColor};

  @media (min-width: 800px) {
    width: 200px;
  }
`;
