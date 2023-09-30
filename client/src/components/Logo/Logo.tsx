import { styled } from 'styled-components';
import logo from '../../../assets/logo.svg'

export const ImgLogo = styled.img`
  height: 3rem;
`;

function Logo() {
  return (
    <ImgLogo src={logo}></ImgLogo>
  )
}
export default Logo 