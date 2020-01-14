import { EDIT_USER_EDIT } from "../../types";

const initialState = {
  photo:
    "https://joanboira.com/wp-content/uploads/2019/10/Retrato-de-perfil-profesional-1.jpg",
  nickName: "user123",
  myIdUser: "user123"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_EDIT:
      return {
        ...state,
        nickName: action.payload
      };
    default:
      return state;
  }
}
