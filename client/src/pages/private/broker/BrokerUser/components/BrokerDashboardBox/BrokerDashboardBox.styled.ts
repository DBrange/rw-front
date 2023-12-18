import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionBrokerDashboardBox = styled.section`
  z-index: 28;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 30px 0;
`;
export const DivContentBrokerDashboardBox = styled.div`
  /* max-height: 400px; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  /* border-bottom: 2px solid ${theme.sColor}; */
`;

export const DivContentTitleBrokerDashboardBox = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 0 0px 20px 0px;
  z-index: 20;
`;
export const H2BrokerDashboardBox = styled.h2`
  color: ${theme.sColor};
`;

export const BtnBrokerDashboardBox = styled.button`
  z-index: 0;
  background-color: ${theme.sColor};
  line-height: 0.85rem;
  border-radius: 0.25rem;
  width: 50px;
  height: 1.7rem;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
`;

export const SpanBrokerDashboardBox = styled.span`
  font-size: 1rem;
  width: 200px;
  line-height: 40px;
  background-color: ${theme.pColor};
  color: ${theme.textColor};
  z-index: 20;
  border-radius: 0.25rem;
  border: 1px solid ${theme.sColor};
  position: absolute;
  top: 30px;
  right: 0;
`;

export const DivBtnsBrokerDashboardBox = styled.div`
  padding-top: 3px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const BtnLinkBrokerDashboardBox = styled(Link)`
  color: ${theme.pColor};
  border: 2px solid ${theme.sColor};
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: ${theme.sColor};
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px 0 ${`${theme.sColor}66`};
    cursor: pointer;
  }
`;
