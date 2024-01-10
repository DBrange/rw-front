import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionLoginBox = styled.section`
min-height: 84vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* gap: 1rem; */
`

export const DivBtnLogin = styled.div`
margin-top: 6rem;
width: 100%;
/* background-color: transparent; */
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
padding-bottom: 1rem;
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

export const PNotFound = styled.span<{ $notFound: boolean }>`
display: block;
  opacity: ${({ $notFound }) => ($notFound ? "1" : "0")};
  padding: 0.5rem;
  /* background-color: ${theme.errBgColor}; */
  color: ${theme.errColor};
  text-align: start;
`;

export const DivKeepLoggedIn = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
  align-items: center;
  font-size: .8rem;

  label{
    margin-right: 1rem;
  }
`

export const BrnLoginGoogle = styled.button`
cursor: pointer;
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: 0.5rem;
  border-radius: 3rem;
  background-color: #ddd;
  margin-top: 2rem;
border: none;
  p {
    font-size: 0.8rem;
  }

  /* i {
    line-height: .85px;
    background-color: #ccc;
    border-radius: 100%;
    padding: .4rem;
  } */
`;

export const FormLoginTitle = styled.h2`
  margin-bottom: 4rem;
  color: ${theme.sColor};
`;