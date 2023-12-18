import { theme } from ".";
import { styled } from "styled-components";

export const Label = styled.label<{ $error: boolean }>`
  width: 100%;
  color: ${(props) =>
    props.$error ? `${theme.errColor}` : `${theme.textColor}`};
  margin-bottom: 0.25rem;
  align-items: start;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
`;

export const Container = styled.section<{ $broad?: boolean }>`
  ${({ $broad }) => ($broad ? "" : "max-width: 600px;")};
  width: 90%;

  margin: auto;
`;

export const ContainerLogin = styled.section<{ $short?: boolean }>`
  max-width: ${({ $short }) => $short ? '800px' : '1000px'};
  width: 90%;
  margin: auto;

`;

export const SectionFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 0.65rem;
`;

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const FieldIconBox = styled.div`
  position: relative;
`;

export const Field = styled.input<{ $error: boolean }>`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  color: ${theme.textColor};
  transition: all 0.2s linear;
  background-color: ${theme.pColor};
  border: ${(props) =>
    props.$error ? `2px solid ${theme.errColor}` : `2px solid #444`};
  border-radius: 0.25rem;
  outline: none;
  &:focus {
    border-color: #60a5fa;
    background-color: #fff1;
  }
  &:hover {
    border: ${(props) =>
      props.$error ? `2px solid ${theme.errColor}` : `2px solid #888`};
    background-color: #fff1;
  }
  &::-webkit-autofill {
    background-color: ${theme.pColor};
  }
`;

export const Icon = styled.i<{ $error: boolean; $touched: boolean }>`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  transition: all 0.2s linear;
  color: ${(props) =>
    props.$error
      ? `${theme.errColor}`
      : props.$touched
      ? "#22c55e"
      : "transparent"};
`;

export const P = styled.p<{ $error: boolean }>`
  display: flex;
  align-items: center;
  gap: 1px;
  transition: all 0.2s linear;
  color: ${(props) => (props.$error ? `${theme.errColor}` : `transparent`)};
  font-size: 0.75rem;
  user-select: none;
`;

export const AccordionContainer = styled.div<{
  checked: boolean;
  $openclose?: boolean;
}>`
  display: grid;
  width: 100%;
  display: grid;
  width: 100%;
  grid-template-rows: ${(props) => (props.checked ? "1fr" : "0fr")};
  ${(props) =>
    !props.checked || !props.$openclose
      ? `
      transition: grid-template-rows .4s ease;
      transition-delay: 0s;
      `
      : `
      transition: grid-template-rows .4s ease;
      transition-delay: .4s;

    `}
`;

export const SectionFormDetailContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 0.7rem 0;
  border-top: 2px solid ${theme.sColor};
  border-bottom: 2px solid ${theme.sColor};
`;

export const SectionFormDetailArrayContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 0.7rem 0;
`;

// export const AccordionContainer = styled.div<{
//   checked: boolean;
//   $openclose?: boolean;
// }>`
//   display: grid;
//   width: 100%;
//   grid-template-columns: ${(props) =>
//     props.checked
//       ? "1fr"
//       : "0fr"}; /* Cambia de grid-template-rows a grid-template-columns */
//   ${(props) =>
//     !props.checked || !props.$openclose
//       ? `
//           transition: grid-template-columns 0.6s ease; /* Cambia de grid-template-rows a grid-template-columns */

//         `
//       : `
//           transition: grid-template-columns 0.6s ease; /* Cambia de grid-template-rows a grid-template-columns */

//         `}
// `;
