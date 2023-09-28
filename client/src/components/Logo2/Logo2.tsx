import { styled } from "styled-components";
import logo2 from "../../../assets/logo2.svg";

export const ImgLogo = styled.img`
  margin: auto 0;
  height: 3rem;
  height: 1.4rem;
`;

function Logo2() {
  return <ImgLogo src={logo2}></ImgLogo>;
}
export default Logo2;
