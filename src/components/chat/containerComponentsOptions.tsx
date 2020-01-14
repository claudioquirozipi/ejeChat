import * as React from "react";
//Redux
import { useSelector } from "react-redux";
//Styled-Components
import { ThemeContext } from "styled-components";
import { Container } from "./containerComponentsOptionsStyled";

export interface ContainerComponentsOptionsProps {
  children: any;
}

const ContainerComponentsOptions: React.SFC<ContainerComponentsOptionsProps> = props => {
  const { children } = props;
  const theme = React.useContext(ThemeContext);
  const chatViews = useSelector((state: any) => state.chatViews);

  return (
    <Container theme={theme} allOptions={chatViews.allOptions}>
      <div>{children}</div>
    </Container>
  );
};

export default ContainerComponentsOptions;
