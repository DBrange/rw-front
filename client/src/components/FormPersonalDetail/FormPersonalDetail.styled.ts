import { theme } from "@/styledComponents";
import { styled } from "styled-components";



export const DivRenderPropertysBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* padding: 0.5rem; */
`;

export const DivRenderPropertys = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const DivRenderProperty = styled.div`
  /* display: flex; */
`;

export const H3PropertyTitle = styled.h3`
  color: ${theme.sColor};
`;
export const H4PropertyName = styled.h4`
  font-weight: bold;
`;
export const H4PropertyValue = styled.h4``;
