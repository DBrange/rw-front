import { theme } from "@/styledComponents";
import styled from "styled-components";

export const SectionHome = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    display: none;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;

    img {
      display: inline-block;
      flex: 1;
      max-width: 30%;
    }
  }
`;

export const DivSection = styled.div`
  @media (min-width: 1200px) {
      flex: 3;
  }
`;

export const ImgHome = styled.img`
height: auto;
`

export const DivHome = styled.div<{ $right?: boolean }>`
  ${({ $right }) =>
    $right
    ? `display: flex;
      flex-direction: column;
  justify-content: flex-end;`
      : ""}

  width: 100%;
  text-align: start;
  color: #fff;
  /* font-size: 1.25rem; */
`;

export const DivText = styled.div`
@media (min-width: 1200px) {

}
`;

export const H1Home = styled.h1<{ $violet?: boolean }>`
  line-height: 2.5rem;
  margin-bottom: 2.5rem;
  color: ${({ $violet }) =>
    $violet ? `${theme.sColor}` : `${theme.textColor}`};
`;

export const H2Home = styled.h1<{ $violet?: boolean }>`
  line-height: 2rem;
  margin-bottom: 2.5rem;
  color: ${({ $violet }) =>
    $violet ? `${theme.sColor}` : `${theme.textColor}`};
`;

export const H3Home = styled.h3<{ $violet?: boolean }>`
  line-height: 1.7rem;
  margin-bottom: 2.5rem;
  color: ${({ $violet }) =>
    $violet ? `${theme.sColor}` : `${theme.textColor}`};
`;

export const H4Home = styled.h5<{ $violet?: boolean }>`
  line-height: 1.5rem;
  margin-bottom: 2.5rem;
  border-left: 2px solid ${theme.sColor};

  padding: 1rem;
  color: ${({ $violet }) =>
    $violet ? `${theme.sColor}` : `${theme.textColor}`};
`;

export const SpanHome = styled.span`
  color: ${theme.sColor};
`;

export const DivBtnHome = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
  
  @media (min-width: 1200px) {
    justify-content: start;
  }
`;

export const BtnHome = styled.button`
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin-top: 1.25rem;
  border-radius: 0.75rem;
  color: ${theme.pColor};
  background-color: ${theme.sColor};
  font-weight: 600;
  outline: none;
  border: none;
  &:active {
    transform: translateY(0.25rem);
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const BtnScrollToTopHome = styled.button`
  position: fixed;
  right: 3vh;
  bottom: 3vh;
  padding: .5rem;
  background-color: ${theme.sColor};
  color: ${theme.pColor};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 5px 10px;
  
  i{
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: .85px;
  }
`


