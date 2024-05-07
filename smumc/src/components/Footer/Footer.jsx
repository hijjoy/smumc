import * as S from "./Footer.style";
import { FaInstagram } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Container>
      <S.TextWrapper>
        <h3>SMUMC</h3>
        <p>Develop By 차다인 김용민 박지환 김지영 정혜원</p>
      </S.TextWrapper>
      <S.IconWrapper>
        <S.InfoWrapper>
          <div>
            <GrLocationPin />
            <p>서울특별시 종로구 홍지문2길 20 상명대학교</p>
          </div>
          <div>
            <CiMail />
            <p>dydals3440@gmail.com</p>
          </div>
        </S.InfoWrapper>
        <div>
          <Link to="https://open.kakao.com/o/s0svOsWf">
            <IoChatbubblesOutline />
          </Link>
          <Link to="https://www.instagram.com/smu_makeus_challenge/">
            <FaInstagram />
          </Link>
        </div>
      </S.IconWrapper>
    </S.Container>
  );
};

export default Footer;
