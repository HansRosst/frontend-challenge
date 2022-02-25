import StyledHeader from './Header.styles';
import { LayoutPropType } from './Header.types';
import logo from '../../../../logo.svg';

const Header = ({ }: LayoutPropType) => {
  return (
    <StyledHeader.Wrapper>
      <StyledHeader.Logo>
        <StyledHeader.Img src={logo} alt="logo" />
      </StyledHeader.Logo>
    </StyledHeader.Wrapper>
  )
}

export default Header