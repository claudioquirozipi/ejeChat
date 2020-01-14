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

export const showOptionsAction = () => ({
  type: SHOW_OPTIONS
});

export const hideOptionsAction = () => ({
  type: HIDE_OPTIONS
});

export const changeOptionsAction = payload => ({
  type: CHANGE_OPTIONS,
  payload
});

export const openUserEditAction = () => ({
  type: OPEN_USEREDIT
});
export const openUserListAction = () => ({
  type: OPEN_USERLIST
});
export const openChatListAction = () => ({
  type: OPEN_CHATSLIST
});
export const openCategoryListAction = () => ({
  type: OPEN_CATEGORYLIST
});
export const openChatAction = () => ({
  type: OPEN_CHAT
});
