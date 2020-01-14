import styled from "styled-components";
import MQ from "../../config/media";
//interface
interface iTheme {
  theme: {
    color: {
      primary: string;
      secondary: string;
    };
    shadow: string;
  };
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  @media ${MQ.sm} {
    width: 80vw;
  }
  @media ${MQ.md} {
    width: 60vw;
  }
  h2 {
    background: ${(props: iTheme) => props.theme.color.primary};
    color: white;
    width: 100%;
    height: 3em;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    pre {
      box-sizing: border-box;
      text-align: center;
      padding: 0 1em;
    }
  }
  img {
    height: 5em;
    width: 5em;
    margin-bottom: 3em;
    border-radius: 50%;
    box-shadow: ${(props: iTheme) => props.theme.shadow};
    object-fit: cover;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    & > * {
      margin-bottom: 2em;
      box-sizing: border-box;
      outline: none;
    }
    label {
      color: ${(props: iTheme) => props.theme.color.secondary};
      font-weight: 700;
    }
    input,
    button {
      height: 4em;
      width: 100%;
      border-radius: 2em;
      padding: 0 2em;
      border: 2px solid ${(props: iTheme) => props.theme.color.primary};
    }
    button {
      background: ${(props: iTheme) => props.theme.color.primary};
      margin-bottom: 3em;
      color: white;
      font-weight: 700;
    }
  }
`;

export const ContainerScroll = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
  padding-right: 1em;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: iTheme) => props.theme.color.primary};
    border-radius: 0.25em;
  }
`;
