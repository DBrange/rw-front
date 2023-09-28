import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const SectionBgSidebar = styled.section<{ $isOpen: boolean }>`
  z-index: 30;
  transition: all 0.2s linear;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : `none`)};
  background-color: ${({ $isOpen }) => ($isOpen ? "#fff1" : `transparent`)}; ;
`;

export const DivSidebarWrapper = styled.div<{ $isOpen: boolean }>`
  z-index: 40;
  white-space: nowrap;
  width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
  height: 100vh;
  position: relative;
  background-color: ${theme.pColor};
  color: #fff;
  overflow-x: hidden;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  /* outline: 2px solid ${theme.sColor}; */

  @media (min-width: 800px) {
    width: ${({ $isOpen }) => ($isOpen ? "260px" : "0")};
  }
`;

export const SidebarHeader = styled.div`
  padding: 2rem;
`;

export const H2SidebarHeader = styled.h2`
  font-size: 1.125rem;
`;

export const H4SidebarHeader = styled.h4`
margin-left: 1rem;
font-weight: 300;
`;

export const UlSidebarList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
  padding: 0;
  text-align: left;
  gap: 1rem;
`;

export const LiSidebarItem = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 0.8rem;
  margin: 0 1rem;
  padding: 1rem 0.9rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #fff1;
  }
`;

export const FooterSidebar = styled.div`
  width: 100%;
  height: auto;
  border-top: 2px solid ${theme.sColor};
  padding: 1rem 0;
`;
