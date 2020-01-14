import React from "react";
import GlobalStyle from "./config/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
//Redux
import store from "./redux/store";
import { Provider } from "react-redux";

//Router
import MyRouter from "./router";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MyRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
