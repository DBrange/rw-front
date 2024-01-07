import { theme } from "@/styledComponents";
import styled from "styled-components";

export const BoxQuestion = styled.div<{ $open: boolean }>`
  color: ${theme.sColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${theme.sColor};
    display: inline-block;
    padding: 1rem 0;
    text-align: start;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${theme.textColor};
    padding: 5px;
    border-radius: 0.5rem;
    &:hover {
      background-color: #fff1;
    }

    
    i {
      margin-left: 1rem;
      line-height: 0.85rem;
      ${({ $open }) => ($open ? `transform: rotate(90deg)` : ``)};
    }
  }
  `;

export const DivBoxQuestionsAnswers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    line-height: 2;
  }
`;
