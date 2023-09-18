import { theme } from "@/styledComponents";
import { styled } from "styled-components";

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 0 2rem 0;
`;
export const CheckboxBox = styled.div`
  margin-bottom: 0.25rem;
`;
export const InputCheckbox = styled.input`
  width: 10%;
  margin-bottom: 0.25rem;
`;

export const Instructions = styled.span<{ $error?: boolean }>`
  display: block;
  font-size: 0.75rem;
  color: ${({ $error }) => ($error ? `${theme.errColor}` : "#aaa")};
`;
