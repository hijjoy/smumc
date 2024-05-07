import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN}
  position: fixed;
  top: 0;

  width: 100%;
  height: 80px;

  h1 {
    margin-left: 30px;
    font-family: "Pretendard-Bold";
    color: ${theme.COLOR.LIGHT_GREEN};
  }

  img {
    margin-top: 3px;
    margin-left: 40px;
    width: 90px;
  }
`;

const Wrapper = styled.div`
  margin-right: 30px;
  a {
    margin: 0 15px;
    text-decoration: none;
    color: ${theme.COLOR.GRAY};
    letter-spacing: 0.7px;

    &:hover {
      font-family: "Pretendard-Medium";
      color: ${theme.COLOR.WHITE};
      cursor: pointer;
    }

    &.active {
      font-family: "Pretendard-Medium";
      color: ${theme.COLOR.WHITE};
    }
  }
`;

export { Container, Wrapper };