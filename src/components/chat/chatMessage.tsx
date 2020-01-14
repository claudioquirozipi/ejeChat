import * as React from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { pushChatActions } from "../../redux/actions/chat/chatsActions";

//Styled-Components
import { ThemeContext } from "styled-components";
import { Container } from "./userEditStyled";
import { ContainerScrollChat } from "./chatMessageStyled";
export interface ChatMessageProps {}

const ChatMessage: React.SFC<ChatMessageProps> = () => {
  const [text, setText] = React.useState("");
  const theme = React.useContext(ThemeContext);
  const users = useSelector((state: any) => state.chat.users);
  const reduxChat = useSelector((state: any) => state.chat);
  const dispatch = useDispatch();
  const pushChat = (data: any[]) => dispatch(pushChatActions(data));
  let newImgUser;
  const chat = reduxChat.chats.filter(
    (data: any) => data.idChat === reduxChat.idChat
  );

  const hadleSubmit = (e: any) => {
    e.preventDefault();
    let newChats = [
      ...reduxChat.chats.filter(
        (data: any) => data.idChat !== reduxChat.idChat
      ),
      {
        idChat: chat[0].idChat,
        menssages: [
          ...chat[0].menssages,
          { userId: "user123", menssage: text }
        ],
        usersId: chat[0].usersId
      }
    ];
    pushChat(newChats);
    setText("");
  };
  return (
    <Container>
      <h2>
        <pre>ChatMessage</pre>
      </h2>
      <ContainerScrollChat theme={theme}>
        <ul>
          {chat[0].menssages.map((data: any, i: number) => {
            newImgUser = users.filter((dataa: any) => dataa.id === data.userId);
            return (
              <li key={i}>
                <img src={newImgUser[0].photo} alt="" />
                {data.menssage}
              </li>
            );
          })}
        </ul>
      </ContainerScrollChat>
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          onChange={(e: any) => setText(e.target.value)}
          value={text}
        />
        <button>send</button>
      </form>
    </Container>
  );
};

export default ChatMessage;
