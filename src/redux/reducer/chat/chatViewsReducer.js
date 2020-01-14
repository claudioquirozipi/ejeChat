import {
  SHOW_OPTIONS,
  HIDE_OPTIONS,
  CHANGE_OPTIONS,
  OPEN_USEREDIT,
  OPEN_USERLIST,
  OPEN_CHATSLIST,
  OPEN_CATEGORYLIST,
  OPEN_CHAT
} from "../../types";

const initialState = {
  options: false,
  allOptions: false,
  userEdit: false,
  userList: false,
  chatsList: false,
  categoryList: false,
  chat: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_OPTIONS:
      return {
        ...state,
        options: true,
        allOptions: false,
        userEdit: false,
        userList: false,
        chatsList: false,
        categoryList: false,
        chat: false
      };
    case HIDE_OPTIONS:
      return {
        ...state,
        options: false,
        allOptions: false,
        userEdit: false,
        userList: false,
        chatsList: false,
        categoryList: false,
        chat: false
      };
    case CHANGE_OPTIONS:
      return {
        ...state,
        options: action.payload,
        allOptions: false,
        userEdit: false,
        userList: false,
        chatsList: false,
        categoryList: false,
        chat: false
      };
    case OPEN_USEREDIT:
      return {
        ...state,
        options: false,
        allOptions: true,
        userEdit: true,
        userList: false,
        chatsList: false,
        categoryList: false,
        chat: false
      };
    case OPEN_USERLIST:
      return {
        ...state,
        options: false,
        allOptions: true,
        userEdit: false,
        userList: true,
        chatsList: false,
        categoryList: false,
        chat: false
      };
    case OPEN_CHATSLIST:
      return {
        ...state,
        options: false,
        allOptions: true,
        userEdit: false,
        userList: false,
        chatsList: true,
        categoryList: false,
        chat: false
      };
    case OPEN_CATEGORYLIST:
      return {
        ...state,
        options: false,
        allOptions: true,
        userEdit: false,
        userList: false,
        chatsList: false,
        categoryList: true,
        chat: false
      };
    case OPEN_CHAT:
      return {
        ...state,
        options: false,
        allOptions: true,
        userEdit: false,
        userList: false,
        chatsList: false,
        categoryList: false,
        chat: true
      };
    default:
      return state;
  }
}
