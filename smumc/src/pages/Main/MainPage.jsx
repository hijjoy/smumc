import * as S from "./MainPage.style";
import { About, Info } from "../../components";

const MainPage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Info />
      </S.Wrapper>
      <S.Wrapper>
        <About />
      </S.Wrapper>
      <S.Wrapper>
        <div>ㅠㅠ</div>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainPage;
