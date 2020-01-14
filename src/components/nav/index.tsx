import * as React from "react";
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

//Styled-Components
import { ThemeContext } from "styled-components";
import { Navcontainer, User } from "./indexStyled";
export interface NavProps {}

const Nav: React.SFC<NavProps> = () => {
  const theme = React.useContext(ThemeContext);
  const myUser = useSelector((state: any) => state.myUser);
  return (
    <Navcontainer theme={theme}>
      <nav>
        <div>
          <User theme={theme}>
            <img src={myUser.photo} alt="" />
            <h3>{myUser.nickName}</h3>
          </User>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Navcontainer>
  );
};

export default Nav;
