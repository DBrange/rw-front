import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivBrokerCreateInspectionLink = styled.div`
margin-top: 2rem;
  position: relative;
  border: 2px solid ${theme.sColor};
  border-radius: 1rem;
  background-color: #222;
  padding: 1rem;
p{
  font-size: 1rem;
}
a{
  font-size: .8rem;
  text-decoration: underline;
  color: ${theme.sColor};
}

`
export const DivInfoBrokerCreateInspectionLink = styled.div`

`
export const BtnContainerBrokerCreateInspectionLink = styled.div`
  width: 100%;
display: flex;
justify-content: flex-end;
`
export const BtnBrokerCreateInspectionLink = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
  width: fit-content;
  padding: 4px 10px;
  border: 2px solid ${theme.sColor};
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${theme.textColor};
  cursor: pointer;
  outline: none;
  margin-bottom: 1rem;
`;