import * as S from "./About.style";
import AboutBox from "./AboutBox/AboutBox";
import codeImg from "../../../assets/code.webp";
import smileImg from "../../../assets/smile.webp";

const About = () => {
  return (
    <S.Container>
      <S.RImg src={codeImg} />
      <S.LImg src={smileImg} />
      <S.ContextWrapper>
        <h1>SMUMC</h1>
        <div>
          <S.TextBox>스터디</S.TextBox>
          <S.TextBox>해커톤</S.TextBox>
          <S.TextBox>아이디어톤</S.TextBox>
          <S.TextBox>데모데이</S.TextBox>
          <S.TextBox2>파트별 컨퍼런스</S.TextBox2>
        </div>
        <div>
          <S.TextBox3>열정</S.TextBox3>
          <S.TextBox3>열정</S.TextBox3>
          <S.TextBox3>열정</S.TextBox3>
        </div>
      </S.ContextWrapper>
      <S.Wrapper>
        <div>
          <AboutBox title={"누적 활동 인원 🧑‍💻"} text={"186 명"} />
          <AboutBox title={"현재 활동 회원 🏃🏻‍♀️"} text={"42 명"} />
          <AboutBox title={"운영 기수 🕢"} text={"6 기"} />
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
