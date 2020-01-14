import * as React from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectIdChatActions } from "../../redux/actions/chat/chatsActions";
import { openChatAction } from "../../redux/actions/chat/chatViewsActions";
//styled-Components
import { ThemeContext } from "styled-components";
import { Container, ContainerScroll } from "./userEditStyled";
import { UlUserList } from "./userListStyled";

export interface UserListProps {}

const UserList: React.SFC<UserListProps> = () => {
  const theme = React.useContext(ThemeContext);
  const users = useSelector((state: any) => state.chat.users);
  const dispatch = useDispatch();
  const selectIdChat = (idChat: string) =>
    dispatch(selectIdChatActions(idChat));
  const openChat = () => dispatch(openChatAction());
  console.log(users);
  return (
    <Container>
      <h2>
        <pre>user list</pre>
      </h2>
      <UlUserList>
        <ContainerScroll>
          {users.map((data: any, i: number) => {
            if (data.id === "user123") {
              return;
            }
            return (
              <li
                key={i}
                onClick={() => {
                  selectIdChat(data.id);
                  openChat();
                }}
              >
                <img src={data.photo} alt="user" />
                {data.name}
              </li>
            );
          })}
        </ContainerScroll>
      </UlUserList>
    </Container>
  );
};

export default UserList;
