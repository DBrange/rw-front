
import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const FormImagesContainer = styled.div`
  width: 100%;
  
`;

export const ButtonForUploading = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0.75rem 0;
`;

export const LabelButton = styled.label<{ $error: boolean }>`
  width: auto;
  height: 2rem;
  text-align: left;
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
`;

export const ImagesContainer = styled.div<{ $detail?: boolean }>`
  display: flex;
  flex-wrap: ${({ $detail }) => ($detail ? "wrap" : "nowrap")};
  gap: 0.25rem;
  align-items: flex-end;
`;

export const Image = styled.img`
  max-width: 3.75rem;
  max-height: 2rem;
  object-fit: cover;
`;

export const InputFile = styled.input`
  display: none;
`;
