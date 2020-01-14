import styled, { css } from "styled-components";

//Interface
interface iShowOptions {
  showOptions: boolean;
}
interface iAllOptions {
  allOptions: boolean;
}
interface iTheme {
  theme: any;
}

export const ChatOpenOptions = styled.div`
  z-index: 50;
  background: ${(props: iTheme) => props.theme.color.primary};
  position: fixed;
  bottom: 3.5em;
  right: 3.5em;
  transform-origin: center;
  transform: translate(50%, 50%);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 3em;
    height: auto;
  }
  img:nth-child(1) {
    display: ${(props: iShowOptions) => (props.showOptions ? "none" : "block")};
  }
  img:nth-child(2) {
    display: ${(props: iShowOptions) => (props.showOptions ? "block" : "none")};
  }
`;

export const ChatOptions = styled.div`
  z-index: 50;
  background: ${(props: iTheme) => props.theme.color.secondary};
  position: fixed;
  bottom: 3.5em;
  right: 3.5em;
  transform-origin: center;
  transform: translate(50%, 50%) scale(1) rotate(150deg);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  box-shadow: ${(props: iTheme) => props.theme.shadow};
  ${(props: iShowOptions) =>
    props.showOptions &&
    css`
      transform: translate(50%, 50%) scale(2.7) rotate(0deg);
    `}
  ul {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.2em;
      height: 1.2em;
      position: absolute;
      top: 0.8em;
      left: calc(50% - 0.1em);
      transform-origin: center 2.2em;
      border-radius: 50%;
      transition: background 0.5s;
      &:hover {
        background: ${(props: iTheme) => props.theme.color.primary};
      }
      img {
        width: 0.7em;
        height: auto;
      }
    }
    li:nth-child(1) {
      transform: translate(-50%, -50%) rotate(20deg);
    }
    li:nth-child(2) {
      transform: translate(-50%, -50%) rotate(-23.3deg);
    }
    li:nth-child(3) {
      transform: translate(-50%, -50%) rotate(-66.6deg);
    }
    li:nth-child(4) {
      transform: translate(-50%, -50%) rotate(-110deg);
    }
  }
`;

export const BgChat = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: -110%;
  height: 100vh;
  width: 100%;
  transition: background 0.5s;
  ${(props: iAllOptions) =>
    props.allOptions &&
    css`
      left: 0;
      background: rgba(0, 0, 0, 0.3);
    `}
`;
