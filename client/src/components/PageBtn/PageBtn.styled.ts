
import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const PageBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem .25rem;
  padding-bottom: 5rem;
`;
export const BtnSideBySide = styled.button<{
  $left?: boolean;
  $page?: number;
  $max?: boolean;
  $send?: boolean;
  $error?: boolean;
}>`
  /* ${(props) => props.$send && `transition-delay: 3s;`} */
  position: relative;
  width: 6rem;
  height: 2rem;
  border: ${({ $left, $send, $error }) =>
    $left
      ? "transparent"
      : $send
      ? `2px solid ${theme.sColor}`
      : $error
      ? `2px solid ${theme.errColor}`
      : "2px solid #4ade80"};
  border-radius: 0.75rem;
  pointer-events: ${(props) =>
    props.$page === 0 || props.$max ? "none" : "all"};
  opacity: ${(props) => (props.$page === 0 || props.$max ? "0" : "1")};
  background-color: ${({ $send }) =>
    $send ? `${theme.sColor}` : "transparent"};
  cursor: pointer;
  &:active {
    background-color: ${(props) => (props.$left ? "#9996" : props.$error ? `${theme.errBgColor}` : "#bbf7d0")};
    transform: ${(props) =>
      props.$left ? "translateX(-0.25rem)" : "translateX(0.25rem)"};
  }
`;

export const IconSideBySide = styled.i<{ $left?: boolean, $send?: boolean, $error?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({$left, $send, $error}) => ($left ? "#888" : $send ? `${theme.pColor}` : $error ? `${theme.errColor}` : "#4ade80")};
`;
  
export const Button = styled.button`
  display: block;
  padding: 0.5rem;
`;

export const SecretBtn = styled.button`
display: none;
`
