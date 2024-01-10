import { theme } from "@/styledComponents";
import styled from "styled-components";

export const ConstainerInfoModalSendRequest = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 2rem;
`
export const LabelInfoModalSendRequest = styled.h4`
display: inline-block;
`
export const InfoModalSendRequest = styled.p`
display: inline-block;
`

export const TitleModalSendRequest = styled.h3<{ $error?: boolean }>`
  margin-bottom: 3rem;
  text-align: start;
  color: ${theme.sColor}
`;

export const BtnModalSendRequest = styled.button<{ $error?: boolean }>`
  cursor: pointer;
  width: 100%;
  align-items: center;
  height: 2rem;
  margin-top: 2rem;
  border-radius: 0.75rem;
  color: ${theme.pColor};
  background-color: ${({ $error }) =>
    $error ? `${theme.errColor}` : `${theme.sColor}`};
  outline: none;
  border: none;
  &:active {
    transform: translateY(0.25rem);
  }
  ${({ $error }) => ($error ? `color: ${theme.errBgColor}` : "")}

  @media (min-width: 800px) {
    max-width: 200px;
  }
`;

export const DivModalSendRequestSent = styled.div<{
  $modalActive: boolean;
  $error?: boolean;
}>`
  width: 90%;
  max-width: 700px;
  background-color: ${({ $error }) =>
    $error ? `${theme.errBgColor}` : `${theme.pColor}`};
  border-radius: 0.375rem;
  padding: 2.25rem;
  text-align: end;
  transition: all 0.2s linear 0.15s;
  transform: ${({ $modalActive }) =>
    $modalActive ? "scale(1)" : "scale(0.5)"};
`;

export const ContainerMiniModal = styled.div<{$time: number}>`
  opacity: ${({ $time }) => $time ? '1' : '0'};
  visibility: ${({ $time }) => $time ? 'visible' : 'hidden'};
  transition: opacity 2s ease-in-out; 
`;

export const InfoWrappedModalSendRequest = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
`
