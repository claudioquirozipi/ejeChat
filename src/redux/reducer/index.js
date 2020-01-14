import { combineReducers } from "redux";
import chatViewsReducer from "./chat/chatViewsReducer";
import myUserReducer from "./chat/userEditReducer";
import idChatReducer from "./chat/chatsReducer";

export default combineReducers({
  chatViews: chatViewsReducer,
  myUser: myUserReducer,
  chat: idChatReducer
});
