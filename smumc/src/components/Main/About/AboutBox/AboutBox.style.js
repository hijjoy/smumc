import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  background-color: ${theme.COLOR.WHITE};
  width: 220px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  border: 0px solid ${theme.COLOR.GRAY};

  color: black;

  &:hover {
    box-shadow: 0 0 18px 2px ${theme.COLOR.GRAY};
    transform: scale(1.02);
    transition: all 600ms ease-in-out 0s;
  }

  p {
    font-family: ${theme.FONT.PRETENDARD_MEDIUM};
    color: ${theme.COLOR.GRAY};
    letter-spacing: 0.9px;
    margin-bottom: 30px;
    font-size: 16px;
  }

  h3 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    font-size: 35px;
    letter-spacing: 0.9px;
  }
`;

export { Container };
