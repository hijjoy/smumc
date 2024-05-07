import { NavLink } from "react-router-dom";
import * as S from "./Navbar.style";
import Logo from "../../assets/logo5.webp";

const Navbar = () => {
  return (
    <S.Container>
      <img src={Logo} />
      <S.Wrapper>
        <NavLink to="/">home</NavLink>
        <NavLink to="/projects">project</NavLink>
        <NavLink to="/members">member</NavLink>
        <NavLink to="/notices">notice</NavLink>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
