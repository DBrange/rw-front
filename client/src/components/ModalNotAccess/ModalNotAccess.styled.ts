import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const NotAccessBrokerCreateReportContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const DivNotAccessBrokerCreateReportContainer = styled.div`
  background-color: ${theme.pColor};
  max-width: 600px;
  padding: 2rem;
  border-radius: 1rem;

  h2{
    color: ${theme.sColor};
    margin-bottom: 2rem;
  }

  p{
    
  }
`


