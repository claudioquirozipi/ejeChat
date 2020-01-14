import * as React from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectIdChatActions } from "../../redux/actions/chat/chatsActions";
import { openChatAction } from "../../redux/actions/chat/chatViewsActions";
//Styled-Components
import { ThemeContext } from "styled-components";
import { Container } from "./userEditStyled";
import { UlCategory } from "./categoryListStyled";

//Interface
export interface CategoryListProps {}
interface iCategory {
  name: string;
  id: string;
}
const CategoryList: React.SFC<CategoryListProps> = () => {
  const theme = React.useContext(ThemeContext);
  const categoryList = useSelector((state: any) => state.chat.categoryList);
  const dispatch = useDispatch();
  const selectIdChat = (idChat: string) =>
    dispatch(selectIdChatActions(idChat));
  const openChat = () => dispatch(openChatAction());

  return (
    <Container>
      <h2>
        <pre>category list</pre>
      </h2>
      <UlCategory theme={theme}>
        {categoryList.map((data: iCategory) => (
          <li
            key={data.id}
            onClick={() => {
              selectIdChat(data.id);
              openChat();
            }}
          >
            {data.name}
          </li>
        ))}
      </UlCategory>
    </Container>
  );
};

export default CategoryList;
