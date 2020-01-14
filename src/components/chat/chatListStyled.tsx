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

export const UlChats = styled.ul`
  margin: 0;
  margin-bottom: 3em;
  padding: 0 1em;
  width: 100%;
  box-sizing: border-box;
  li {
    list-style: none;
    padding: 0.5em 2em;
    box-shadow: ${(props: iTheme) => props.theme.shadow};
    border-radius: 8px;
    margin-bottom: 0.5em;
    color: ${(props: iTheme) => props.theme.color.secondary};
    display: flex;
    align-items: center;
  }
  li > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4em;
    margin-right: 2em;
    img {
      height: 1em;
      width: 1em;
      margin: 0;
    }
    p {
      margin: 1em 0;
    }
  }
`;
