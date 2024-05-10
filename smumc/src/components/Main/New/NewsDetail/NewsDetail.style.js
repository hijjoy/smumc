import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 64%;
    object-fit: cover;
  }

  opacity: ${(props) => (props.$isHover ? "0.85" : "0")};
  transition: all 700ms ease-in-out 0s;
`;

export { Container };
