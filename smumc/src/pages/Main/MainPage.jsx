import * as S from "./MainPage.style";
import { About, AnimatedComponent, Info, New, Project } from "../../components";

const MainPage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Info />
      </S.Wrapper>
      <AnimatedComponent>
        <About />
      </AnimatedComponent>
      <AnimatedComponent>
        <Project />
      </AnimatedComponent>
      <AnimatedComponent>
        <New />
      </AnimatedComponent>
    </S.Container>
  );
};

export default MainPage;
