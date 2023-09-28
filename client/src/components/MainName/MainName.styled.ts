import { theme } from "@/styledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivMainName = styled.div`
  position: relative;
  white-space: nowrap;
  max-width: 100%;
  width: 100%;
  padding: 2rem 1rem;
  justify-content: center;
  gap: 0rem;
  align-items: center;
  display: flex; /* Agregamos esta propiedad */
  align-items: center;

  @media (min-width: 800px) {
    position: static;
    max-width: 260px;
    justify-content: space-evenly;
  }
`;

export const BtnMainName = styled.button<{ $public?: boolean }>`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  display: ${({ $public }) => $public ? 'none' : 'flex'};
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

export const LinkMainName = styled(Link)`
  display: inline-flex;
  text-align: center;
  gap: 0.4rem;
  text-decoration: none;

  @media (min-width: 800px) {
    max-width: 260px;
  }
`;

export const IconMainName = styled.i`
  margin: auto 0;
  height: 1.4rem;
`;
