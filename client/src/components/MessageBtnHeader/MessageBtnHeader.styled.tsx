import { theme } from "@/styledComponents";
import styled from "styled-components";



export const SectionMessageBtnHeader = styled.section`position: relative;`

export const DivMessageBtnHeader= styled.div<{ $public?: boolean }>`
  ${({ $public }) =>
    $public
      ? `   
    position: static;
    max-width: 260px;
    justify-content: space-evenly;`
      : `  
  position: relative;
  max-width: 100%;
  justify-content: center;
  white-space: nowrap;`}

  width: 100%;
  padding: 2rem 0.2rem;
  gap: 0rem;
  align-items: center;
  display: flex; /* Agregamos esta propiedad */
  align-items: center;

  @media (min-width: 1200px) {
    display: none;
    position: static;
    max-width: 260px;
    justify-content: space-evenly;
  }
`;

export const BtnMessageBtnHeader= styled.button<{
  $public?: boolean;
  $side?: boolean;
}>`
  position: absolute;
  z-index: 1000;
  top: 50%;
  ${({ $side }) => (!$side ? `left: 1rem;` : `right: .2rem;`)}
  transform: translateY(-50%);
  display: ${({ $public }) => ($public ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.textColor};
  margin-right: 0.8rem;
  padding: 0.6rem;
  border-radius: 0.4rem;

  &:hover {
    background-color: #fff1;
  }

  @media (min-width: 800px) {
    position: static;
    margin-right: 0rem;
    transform: translateX(-0.6rem);
  }
`;
