import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionMyProfile = styled.section`
margin-bottom: 3rem;
`

export const DivImageMyProfile = styled.div`
width: 200px;
margin: 0 auto;
`

export const ImgMyProfile = styled.img`
border-radius: 100%;
`

export const DivAllNameContainer = styled.div`

`

export const TitleName = styled.div`
padding-top: 1rem ;
font-size: 2rem;
align-items: flex-start;
color: ${theme.sColor};
`

export const H2NameLastname = styled.h2`
text-align: center;
margin: 2rem 0;
`

export const DivInformationMyProfile = styled.div`
margin-top: 5rem;
display: flex;
flex-direction: column;
gap: 2rem;
`

export const DivInformationDetail = styled.div`
display: flex;
gap: 3rem;
/* justify-content: space-between; */
align-items: center;
  position: relative;
  width: 100%;
`

export const MyProfileEditInformaction = styled.button`
text-decoration: none;
background-color: transparent;
border: none;
outline: none;
font-size: .8rem;
cursor: pointer;
position: absolute;
right: 0;
top: 0;
color: ${theme.sColor};
`

export const BtonChangePassword = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  text-decoration: underline;
  color: ${theme.textColor};
  cursor: pointer;
`;

export const DivCardNoEvent = styled.div`
pointer-events: none;
h4{
  margin-bottom: .5rem;
}
`