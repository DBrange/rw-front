import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivUploadImages = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const DivImageInstructions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
position: relative;
`;

export const LabelButtonImage = styled.label<{ $error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-weight: 300;
  width: 6rem;
  height: 6rem;
  text-align: center;
  padding: 0.5rem;
  line-height: 0.75rem;
  outline: none;
  border-radius: 0.4rem;
  border: ${(props) =>
    props.$error ? `2px solid ${theme.errColor}` : `2px solid ${theme.sColor}`};
  color: ${(props) =>
    props.$error ? `${theme.errColor}` : `${theme.textColor}`};

  &:focus {
    border-color: #60a5fa;
  }
  &:hover {
    color: ${theme.pColor};
    background-color: ${(props) =>
      props.$error ? `${theme.errBgColor}` : `${theme.sColor}`};
  }
  
  img{
    object-fit: cover;
    width:80%;
    height:80%;
  }
`;

export const InstructionsUpload = styled.span<{ $error?: boolean }>`
  position: absolute;
  left: 0;
  bottom: 20px;
  background-color: #0006;
  text-align: center;
  width: 6rem;
  white-space: pre-line;
  display: block;
  font-size: 0.6rem;
  color: ${({ $error }) => ($error ? `${theme.errColor}` : "#aaa")};
`;