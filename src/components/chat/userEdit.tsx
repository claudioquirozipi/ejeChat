import * as React from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { userEditAction } from "../../redux/actions/chat/userEditAction";
import { hideOptionsAction } from "../../redux/actions/chat/chatViewsActions";

//styled-Components
import { ThemeContext } from "styled-components";
import { Container } from "./userEditStyled";

export interface UserEditProps {}

const UserEdit: React.SFC<UserEditProps> = () => {
  const theme = React.useContext(ThemeContext);
  const myUser = useSelector((state: any) => state.myUser);
  const [nickState, setNickState] = React.useState("");
  const dispatch = useDispatch();
  const editName = (nick: string) => dispatch(userEditAction(nick));
  const clouseEdit = () => dispatch(hideOptionsAction());

  const handleSubmit = (e: any) => {
    e.preventDefault();
    editName(nickState);
    clouseEdit();
  };
  return (
    <Container theme={theme}>
      <h2>
        <pre> change your nickname</pre>
      </h2>
      <img src={myUser.photo} alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickNameId">Nick Name</label>
        <input
          type="text"
          id="nickNameId"
          value={nickState}
          onChange={(e: any) => setNickState(e.target.value)}
          required
        />
        <button>Edit</button>
      </form>
    </Container>
  );
};

export default UserEdit;
