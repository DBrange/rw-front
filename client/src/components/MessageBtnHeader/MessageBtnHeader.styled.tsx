import { theme } from "@/styledComponents";
import styled from "styled-components";
// export const Nose = styled.section`
//   @media (min-width: 1200px) {
//     display: flex;
//     position: static;
//     max-width: 260px;
//     justify-content: space-evenly;
//   }
// `;
export const SectionMessageBtnHeader = styled.div`
  position: relative;

  @media (min-width: 1200px) {
    position: fixed;
    left: 1.3rem;
    top: 5.5rem;
  }
`;
export const DivDivMessageBtnHeader = styled.div`
  position: relative;
`;

export const DivMessageBtnHeader = styled.div<{ $public?: boolean }>`
  ${({ $public }) =>
    $public
      ? `   
    position: static;
    max-width: 260px;
    justify-content: space-evenly;`
      : `  
  position: relative;
  max-width: 100%;
  justify-content: center;
  white-space: nowrap;`}

  width: 100%;
  padding: 2rem 0.2rem;
  gap: 0rem;
  align-items: center;
  display: flex; /* Agregamos esta propiedad */
  align-items: center;

  @media (min-width: 1200px) {
    display: flex;
    position: static;
    max-width: 260px;
    justify-content: space-evenly;
  }
`;

export const BtnMessageBtnHeader = styled.button<{
  $public?: boolean;
  $side?: boolean;
}>`
  position: absolute;
  z-index: 1000;
  top: 50%;
  ${({ $side }) => (!$side ? `left: 1rem;` : `right: .2rem;`)}
  transform: translateY(-50%);
  display: ${({ $public }) => ($public ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.textColor};
  margin-right: 0.8rem;
  padding: 0.6rem;
  border-radius: 0.4rem;

  &:hover {
    background-color: #fff1;
  }

  @media (min-width: 800px) {
    position: static;
    margin-right: 0rem;
    transform: translateX(-0.6rem);
  }
`;

export const SpanNewNotificationsNumber = styled.span`
  height: 20px;
  width: 20px;
  line-height: 18px;
  text-align: center;
  position: absolute;
  background-color: ${theme.sColor};
  right: 8%;
  top: 8%;
  border-radius: 50%;
  padding: 2px;
  font-size: 10px;
`;

// export const SpanNewNotificationsNumber = styled.span`
//   position: absolute;
//   background-color: ${theme.sColor};
//   right: 10%;
//   top: 10%;
//   border-radius: 50%; /* Cambiado de 100% a 50% para que sea un círculo perfecto */
//   padding: 4px; /* Ajusta el relleno según tus necesidades */
//   color: white; /* Añadido para que el número sea visible en el círculo */
//   /* font-size: 15px; Ajusta el tamaño del texto según tus necesidades */
// `;
