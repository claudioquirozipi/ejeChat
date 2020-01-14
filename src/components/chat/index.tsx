import * as React from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  hideOptionsAction,
  changeOptionsAction,
  openUserEditAction,
  openUserListAction,
  openChatListAction,
  openCategoryListAction
} from "../../redux/actions/chat/chatViewsActions";
//Styled-Components
import { ThemeContext } from "styled-components";
import { ChatOpenOptions, ChatOptions, BgChat } from "./indexStyled";

//Components
import ContainerComponentsOptions from "./containerComponentsOptions";
import UserEdit from "./userEdit";
import UserList from "./userList";
import ChatList from "./chatList";
import CategoryList from "./categoryList";
import ChatMessage from "./chatMessage";
//Assets
import openOptions from "../../assets/img/nav/openOptions.svg";
import clouse from "../../assets/img/nav/clouse.svg";
export interface ChatProps {}

const Chat: React.SFC<ChatProps> = () => {
  const theme = React.useContext(ThemeContext);
  const chatViews = useSelector((state: any) => state.chatViews);
  const dispatch = useDispatch();
  const hideOptions = () => dispatch(hideOptionsAction());
  const changeShowOptions = (showO: boolean) =>
    dispatch(changeOptionsAction(showO));
  const openUserEdit = () => dispatch(openUserEditAction());
  const openUserList = () => dispatch(openUserListAction());
  const openChatList = () => dispatch(openChatListAction());
  const openCategoryList = () => dispatch(openCategoryListAction());

  return (
    <>
      <BgChat
        allOptions={chatViews.allOptions}
        onClick={() => hideOptions()}
      ></BgChat>
      <ContainerComponentsOptions>
        {chatViews.userEdit ? <UserEdit /> : null}
        {chatViews.userList ? <UserList /> : null}
        {chatViews.chatsList ? <ChatList /> : null}
        {chatViews.categoryList ? <CategoryList /> : null}
        {chatViews.chat ? <ChatMessage /> : null}
      </ContainerComponentsOptions>
      <ChatOptions showOptions={chatViews.options} theme={theme}>
        <ul>
          <li onClick={() => openUserEdit()}>
            <img src={openOptions} alt="icon" />
          </li>
          <li onClick={() => openUserList()}>
            <img src={openOptions} alt="icon" />
          </li>
          <li onClick={() => openChatList()}>
            <img src={openOptions} alt="icon" />
          </li>
          <li onClick={() => openCategoryList()}>
            <img src={openOptions} alt="icon" />
          </li>
        </ul>
      </ChatOptions>
      <ChatOpenOptions
        showOptions={chatViews.options}
        theme={theme}
        onClick={() => changeShowOptions(!chatViews.options)}
      >
        <img src={openOptions} alt="icon" />
        <img src={clouse} alt="icon" />
      </ChatOpenOptions>
    </>
  );
};

export default Chat;
