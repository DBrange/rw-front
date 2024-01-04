import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionVerified = styled.section`
  height: 83vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const BtnVerified = styled.button`
  background-color: ${theme.sColor};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
`;
