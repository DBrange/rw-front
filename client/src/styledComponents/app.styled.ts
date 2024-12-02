import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

export const Body = styled.section`
  min-height: 100vh;
  height: 100%;
  color: ${theme.textColor};
  padding-top: 3rem;
  background: ${theme.pColor};
`;

export const Header = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  height: 3rem;
  text-align: center;
  border-bottom: 2px solid ${theme.sColor};
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  background-color: ${theme.pColor};
`;

export const LinkNavigate = styled(Link)`
  text-decoration: none;
`;

export const LogoText = styled.h2`
  font-size: 1.125rem;
  line-height: 3rem;
  font-weight: 600;
  color: ${theme.sColor};
`;

export const MainContent = styled.div`
  height: 100%;
  font-size: 0.9rem;
  margin-top: 3rem;
  background-color: ${theme.pColor};
`;

export const Footer = styled.footer`
  min-height: 10rem;
  background-color: ${theme.sColor};
`
