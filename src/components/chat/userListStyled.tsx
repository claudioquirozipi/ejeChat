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

export const UlUserList = styled.ul`
  margin: 0;
  margin-bottom: 3em;
  padding: 0 1em;
  width: 100%;
  box-sizing: border-box;
  li {
    list-style: none;
    padding: 1em 2em;
    box-shadow: ${(props: iTheme) => props.theme.shadow};
    border-radius: 8px;
    margin-bottom: 0.5em;
    color: ${(props: iTheme) => props.theme.color.secondary};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 3em;
      width: 3em;
      margin: 0;
      margin-right: 1em;
    }
  }
`;
