import styled, { keyframes } from "styled-components";
import theme from "../../../theme";

const changeColor = keyframes`
  from {
    color: ${theme.COLOR.WHITE};
  }
  to {
    color: ${theme.COLOR.PRIMARY};
  }
`;

const Container = styled.div`
  display: flex;

  img {
    margin-right: 80px;
  }

  div {
    margin-bottom: 30px;
    height: 300px;

    h1 {
      font-family: "Pretendard-Bold";
      word-break: keep-all;
      width: 50px;
      font-size: 55px;
      margin-bottom: 45px;

      b {
        animation: ${changeColor} 1s 0s infinite linear alternate;
      }
    }

    p {
      font-size: 16px;
      word-break: keep-all;
      b {
        font-family: "Pretendard-Bold";
        color: ${theme.COLOR.LIGHT_GREEN};
      }
    }

    button {
      margin-top: 20px;
      padding: 10px;
      width: 200px;
      height: 40px;
      border: 1px solid rgb(1, 255, 111, 0.5);
      border-radius: 10px;
      background-color: inherit;
      color: ${theme.COLOR.WHITE};
      letter-spacing: 1px;
      font-family: "Pretendard-Bold";

      &:hover {
        cursor: pointer;
        background-color: ${theme.COLOR.PRIMARY};
        opacity: 0.9;
        color: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;

    img {
      margin: 0;
    }

    div {
      margin-top: 10px;
    }
  }
`;

export { Container };
