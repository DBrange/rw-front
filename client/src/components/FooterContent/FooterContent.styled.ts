import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (min-width: 800px){
    justify-content: center;
    align-items: center;
  }
`;

export const DivContact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
export const DivPFooter = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

`

export const PFooterLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: ${theme.pColor};
font-size: .7rem;
text-decoration: none;

&:hover{
  
  text-decoration: underline;
}
`

export const H5Footer = styled.p`

`

export const PFooter = styled.p`
  font-size: 0.7rem;
  flex-basis: 100%;

  @media (min-width: 800px) {
    text-align: center;
  }
`;