import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: #fff;
  height: 100%;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  height: 100vh;
`;

export { Container, Wrapper };
