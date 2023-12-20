import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const FilterField = styled.input`
width: 100%;
padding: 0.6rem;
color: ${theme.textColor};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.sColor};
  outline: none;
`
