import { theme } from "@/styledComponents";
import styled from "styled-components";

export const DivWrappedPaymentCard = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 2px solid
    ${({ $color }) =>
      $color === "free"
        ? "#C5CFD7"
        : $color === "basic"
        ? "#63ABDD"
        : $color === "premium"
        ? "#E63E36 "
        : $color === "gold"
        ? "#F5DB23 "
        : ""};
  border-radius: 1rem;

  width: 260px;
  overflow: hidden;
`;

export const DivHeaderPaymentCard = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid
    ${({ $color }) =>
      $color === "free"
        ? "#C5CFD7"
        : $color === "basic"
        ? "#63ABDD"
        : $color === "premium"
        ? "#E63E36 "
        : $color === "gold"
        ? "#F5DB23 "
        : ""};
  padding: 1rem;
  color: #333;
  background-color: ${({ $color }) =>
    $color === "free"
      ? "#C5CFD7"
      : $color === "basic"
      ? "#63ABDD"
      : $color === "premium"
      ? "#E63E36 "
      : $color === "gold"
      ? "#F5DB23 "
      : ""};
`;

export const DivBodyPaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const DivFooterPaymentCard = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid
    ${({ $color }) =>
      $color === "free"
        ? "#C5CFD7"
        : $color === "basic"
        ? "#63ABDD"
        : $color === "premium"
        ? "#E63E36 "
        : $color === "gold"
        ? "#F5DB23 "
        : ""};

h2{
  
  padding: 1rem;
}
`;

export const DivBodyTextPaymentCard = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BtnPaymentCard = styled.button<{ $color: string }>`
  width: 100%;
  bottom: -17px;
  padding: 0.5rem;
  border: none;
  outline: none;
color: #333;
  background-color: ${({ $color }) =>
    $color === "free"
      ? "#C5CFD7"
      : $color === "basic"
      ? "#63ABDD"
      : $color === "premium"
      ? "#E63E36 "
      : $color === "gold"
      ? "#F5DB23 "
          : ""};
      cursor: pointer;
      font-weight: 700;
`;
