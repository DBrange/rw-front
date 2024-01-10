import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

export const Body = styled.section`
  /* min-height: 100vh; */
  height: 100%;
  color: ${theme.textColor};
  background: ${theme.pColor};
`;

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;
  width: 100%;
  position: fixed;
  top: 0;
  text-align: start;
  background-color: ${theme.pColor};

  @media(min-width: 800px){

  }
`;

export const LinkNavigate = styled(Link)<{$large?: boolean}>`
  text-decoration: none;
  color: ${theme.textColor};
${({$large}) => $large ? 'width: 100%;' : ''}
  
`;

export const LogoText = styled.h2`
  display: inline-block;
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 600;
  color: ${theme.sColor};
`;

export const MainContent = styled.div`
  height: 100%;
  font-size: 0.9rem;
  margin-top: 7rem;
  background-color: ${theme.pColor};
`;

export const Footer = styled.footer<{ $public: boolean }>`
  display: ${({ $public }) => ($public ? "block" : "none")};
  min-height: 10rem;
  background-color: ${theme.sColor};
`;
