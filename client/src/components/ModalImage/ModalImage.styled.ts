import { theme } from "@/styledComponents";
import styled from "styled-components";


export const SectionModalImageBg = styled.section<{
  $modalActive: boolean;
  $error?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #0008;
  transition: all 0.2s linear;
  pointer-events: ${({ $modalActive }) => ($modalActive ? "auto" : "none")};
  z-index: ${({ $error }) => ($error ? `101` : `100`)};
  opacity: ${({ $modalActive }) => ($modalActive ? "1" : "0")};
`;

export const DivModalImage = styled.div<{
  $modalActive: boolean;
  $error?: boolean;
}>`
  width: 90%;
  /* max-height: 40%; */
  text-align: center;
  transition: all 0.2s linear 0.15s;
  transform: ${({ $modalActive }) =>
    $modalActive ? "scale(1)" : "scale(0.5)"};
    position: relative;
`;

export const IRowLeftModalImage = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${theme.textColor};
  line-height: 0.75rem;
  border-radius: 50%;
  padding: 0.5rem;

  &:hover {
    background-color: #fff1;
  }
`; 
export const IRowRightModalImage = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${theme.textColor};
  line-height: .75rem;
  border-radius: 50%;
  padding: 0.5rem;

  &:hover {
    background-color: #fff1;
  }
`; 

export const ImgModalImage = styled.img`
width: 100%;
max-height: 70vh;
object-fit: contain;
`;