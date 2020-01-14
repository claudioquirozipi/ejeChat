import { SELECT_IDCHAT, PUSH_CHAT } from "../../types";

export const selectIdChatActions = payload => ({
  type: SELECT_IDCHAT,
  payload
});

export const pushChatActions = payload => ({
  type: PUSH_CHAT,
  payload
});
