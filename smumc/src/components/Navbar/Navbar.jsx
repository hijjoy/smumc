import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./Navbar.style";
import Logo from "../../assets/logo5.webp";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <h3 onClick={() => nav("/")}>SMUMC</h3>

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
