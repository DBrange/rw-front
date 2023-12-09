import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivMessageBtn = styled.div<{ $public?: boolean }>`
  ${({ $public }) =>
    $public
      ? `   
    position: static;
    max-width: 260px;
    justify-content: space-evenly;`
      : `  
  position: fixed;
  max-width: 100%;
  justify-content: center;
  white-space: nowrap;`}

  width: 100%;
  padding: 2rem 1rem;
  gap: 0rem;
  align-items: center;
  display: none;
  align-items: center;

    @media (min-width: 1200px) {
      display:flex
    }

`;

export const BtnMessageBtn = styled.button<{
  $public?: boolean;
  $side?: boolean;
}>`
  position: absolute;
  z-index: 20;
  top: 50%;
  /* ${({ $side }) => (!$side ? `top: 50%;` : `top: 100%;`)} */
  left: .8rem;
  transform: translateY(-50%);
  display: ${({ $public }) => ($public ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.textColor};
  margin-right: 0.8rem;
  padding: 0.6rem;
  border-radius: 0.4rem;
  margin-left: 0.1rem;

  &:hover {
    background-color: #fff1;
  }

  @media (max-width: 1200px) {
    position: static;
    /* transform: translateX(-0.6rem); */
    margin-left: 1rem;
  }
`;
