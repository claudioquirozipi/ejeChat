import styled from "styled-components";

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

export const ContainerScrollChat = styled.div`
  width: 100%;
  padding: 0 1em 1em;
  box-sizing: border-box;
  ul {
    box-sizing: border-box;
    max-height: 30vh;
    overflow-y: scroll;
    padding-right: 1em;
    margin: 0;
    &::-webkit-scrollbar {
      background: transparent;
      width: 0.5em;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props: iTheme) => props.theme.color.primary};
      border-radius: 0.25em;
    }
    li {
      list-style: none;
      margin-bottom: 0.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 1.5em;
        width: 1.5em;
        margin: 0;
        margin-right: 1em;
      }
    }
  }
`;
