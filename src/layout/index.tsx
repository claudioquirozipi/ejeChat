import * as React from "react";

//Components
import Chat from "../components/chat";
import Nav from "../components/nav";

export interface LayoutProps {
  children: any;
}

const Layout: React.SFC<LayoutProps> = props => {
  const { children } = props;
  return (
    <div>
      <Nav />
      {children}
      <Chat />
    </div>
  );
};

export default Layout;
