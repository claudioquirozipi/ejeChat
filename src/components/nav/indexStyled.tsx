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

export const Navcontainer = styled.div`
  width: 100%;
  height: 3em;
  nav {
    height: 100%;
    width: 100%;
    padding: 0 10%;
    box-sizing: border-box;
    background: ${(props: iTheme) => props.theme.color.primary};
    color: white;
  }
  nav > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0;
      padding: 0;
      margin-left: 1em;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    height: 2em;
    width: 2em;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: ${(props: iTheme) => props.theme.shadow};
    margin-right: 1em;
  }
  h3 {
    margin: 0;
  }
`;
