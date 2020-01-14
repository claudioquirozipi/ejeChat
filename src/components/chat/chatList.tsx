import * as React from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectIdChatActions } from "../../redux/actions/chat/chatsActions";
import { openChatAction } from "../../redux/actions/chat/chatViewsActions";
//styled-Components
import { ThemeContext } from "styled-components";
import { Container, ContainerScroll } from "./userEditStyled";
import { UlChats } from "./chatListStyled";

export interface ChatListProps {}

const ChatList: React.SFC<ChatListProps> = () => {
  const theme = React.useContext(ThemeContext);
  const chats = useSelector((state: any) => state.chat.chats);
  const users = useSelector((state: any) => state.chat.users);
  const dispatch = useDispatch();
  const selectIdChat = (idChat: string) =>
    dispatch(selectIdChatActions(idChat));
  const openChat = () => dispatch(openChatAction());

  let newImgUser;
  return (
    <Container>
      <h2>
        <pre>chat list</pre>
      </h2>
      <UlChats theme={theme}>
        <ContainerScroll theme={theme}>
          {chats.map((data: any) => (
            <li
              key={data.idChat}
              onClick={() => {
                selectIdChat(data.idChat);
                openChat();
              }}
            >
              <div>
                {data.usersId.map((dataa: string[], j: number) => {
                  {
                    newImgUser = users.filter(
                      (dataaa: any) => dataaa.id === dataa
                    );
                  }
                  return <img key={j} src={newImgUser[0].photo} />;
                })}
              </div>
              <p>{data.menssages[data.menssages.length - 1].menssage}</p>
            </li>
          ))}
        </ContainerScroll>
      </UlChats>
    </Container>
  );
};

export default ChatList;
