import styled, { css } from "styled-components";

//interface
interface iTheme {
  theme: any;
}
interface iAllOptions {
  allOptions: boolean;
}

export const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 3.5em;
  right: 3.5em;
  transform: translate(50%, 50%) scale(0) rotate(180deg);
  transition: transform 0.5s, bottom 0.5s, right 0.5s;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props: iTheme) => props.theme.shadow};
  ${(props: iAllOptions) =>
    props.allOptions &&
    css`
      bottom: 50%;
      right: 50%;
      transform: translate(50%, 50%) scale(1) rotate(0deg);
    `}
`;
