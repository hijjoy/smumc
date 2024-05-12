import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  margin-top: 50px;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 500px;

  button {
    border: none;
    background-color: initial;
    color: #fff;
    font-size: 20px;
    margin: 10px 20px 30px;
    padding-bottom: 3px;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: transform 600ms ease-in-out 0s;
      color: ${theme.COLOR.PRIMARY};
    }

    &.selected {
      color: ${theme.COLOR.PRIMARY};
      border-bottom: 2px solid ${theme.COLOR.PRIMARY};
    }
  }
`;

const TextBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 750px;
  height: 300px;
  word-break: keep-all;
  text-align: center;
  font-size: 15px;
  background-color: ${theme.COLOR.DARK_GRAY};
  border-radius: 20px;
  padding: 0 50px;
  word-spacing: 0.4px;
  line-height: 30px;
  span {
    opacity: 0.9;
  }
`;

export { Container, Wrapper, TextBox };
