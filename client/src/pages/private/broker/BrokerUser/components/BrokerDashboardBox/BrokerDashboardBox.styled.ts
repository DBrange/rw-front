import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionBrokerDashboardBox = styled.section`
z-index: 28;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export const DivContentBrokerDashboardBox = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;


  /* border-bottom: 2px solid ${theme.sColor}; */
`;


  export const DivContentTitleBrokerDashboardBox = styled.h2`
display: flex;
justify-content: space-between;
padding: 0 10px 20px 0px;
z-index: 20;
`
export const H2BrokerDashboardBox = styled.h2`
  color: ${theme.sColor};
`;

export const BtnBrokerDashboardBox = styled.button`
  z-index: 0;
  background-color: ${theme.sColor};
  line-height: .85rem;
  border-radius: 0.25rem;
  width: 50px;
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
`


