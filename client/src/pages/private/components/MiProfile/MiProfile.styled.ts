import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionMyProfile = styled.section``

export const DivImageMyProfile = styled.div`
width: 200px;
margin: 0 auto;
`

export const ImgMyProfile = styled.img`
border-radius: 100%;
`

export const DivAllNameContainer = styled.div`

`

export const H2NameLastname = styled.h2`
text-align: center;
margin-top: 1rem;
`

export const DivInformationMyProfile = styled.div`
margin-top: 3rem;
display: flex;
flex-direction: column;
gap: .8rem;
`

export const DivInformationDetail = styled.div`
  position: relative;
  width: 100%;
`

export const MyProfileEditInformaction = styled.p`
font-size: .8rem;
cursor: pointer;
position: absolute;
right: 0;
top: 0;
color: ${theme.sColor};
`