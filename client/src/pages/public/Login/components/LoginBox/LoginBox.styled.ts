import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionLoginBox = styled.section`
height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const BtnLogin = styled.button`
cursor: pointer;
  width: 100%;
  padding: 1rem 5rem;
  color: ${theme.pColor};
  background-color: ${theme.sColor};
  border-radius: 0.4rem;
  border: none;

  @media (min-width: 800px) {
    border:2px solid ${theme.sColor};
  }
`;

export const DivNoRegister = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;
`

export const H6NoRegister = styled.h6`
width: 100%;
  font-weight: 300;
`

export const SpanNoRegister = styled(Link)`
cursor: pointer;
color: ${theme.sColor};
text-decoration: none;

&:hover{
  text-decoration: underline;

}
`