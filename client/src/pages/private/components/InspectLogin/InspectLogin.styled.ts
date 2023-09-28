import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionCard = styled.section`
  padding: 1rem 0;
`

export const DivCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  text-align: end;
  line-height: 4rem;
  padding: 0 1rem;
  border: 2px solid ${theme.sColor};
  border-radius: 0.8rem;
  transition: all .2s linear;
  
  &:hover{
    transform: translateY(-1px);
    box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.5);

  }
`;

export const IconCard = styled.i`
display: flex;
align-items: center;
`;
export const CardText = styled.h4``;
