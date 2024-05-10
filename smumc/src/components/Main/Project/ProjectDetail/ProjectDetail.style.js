import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;

  border: 3px solid #0f1012;
  border-radius: 15px;
  background-color: black;

  opacity: ${(props) => (props.$isHover ? "0.85" : "0")};
  transition: all 700ms ease-in-out 0s;

  div {
    ${theme.ALIGN.COLUMN_CENTER}
  }

  span {
    padding: 0 5px;
    word-break: keep-all;
    text-align: center;
    width: 290px;

    &.title {
      font-family: ${theme.FONT.PRETENDARD_BOLD};
      color: #ffff82;
      margin-bottom: 10px;
    }
  }
`;

const MemberWrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 13px;
  font-size: 12px;

  li {
    list-style: none;
    margin: 2px;
  }
`;

export { Container, MemberWrapper };
