import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 60%;
  height: 400px;
  position: relative;

  border-radius: 10px;
  background-color: rgb(123, 124, 129, 0.2);
`;

const RImg = styled.img`
  position: absolute;
  top: 50px;
  right: -50px;
  width: 110px;
  height: 100px;
  opacity: 0.9;
`;
const LImg = styled(RImg)`
  top: 150px;
  left: -50px;
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    opacity: 0.9;
    margin-bottom: 35px;
    letter-spacing: 2px;
    font-size: 45px;
    margin-top: 50px;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TextWrapper2 = styled(TextWrapper)`
  grid-template-columns: repeat(3, 1fr);
`;

const TextBox = styled.span`
  ${theme.ALIGN.ROW_CENTER};

  font-size: 12px;
  letter-spacing: 0.4px;

  width: 95px;
  height: 30px;
  background-color: rgb(1, 255, 111, 0.1);
  color: ${theme.COLOR.PRIMARY};

  border-radius: 30px;
  margin: 10px 0;
`;

const TextBox2 = styled(TextBox)`
  width: 115px;
`;

const TextBox3 = styled(TextBox)`
  background-color: rgb(120, 250, 230, 0.1);
  color: rgb(120, 250, 230);
  width: 70px;
  margin: 10px;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: -25%;
  width: 1000px;
  z-index: 1;

  div {
    ${theme.ALIGN.ROW_CENTER}
  }

  @media screen and (max-width: 768px) {
    bottom: -40%;
  }
`;

export { Container, TextWrapper, TextWrapper2, ContextWrapper, TextBox, TextBox2, TextBox3, Wrapper, LImg, RImg };
