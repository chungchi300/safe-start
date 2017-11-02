import configureStore from 'configureStore.js';
const store = configureStore();
import { Provider } from 'react-redux';
import React from 'react';
import Front from 'views/Front.js';
import theme from 'theme';
import { ThemeProvider } from 'styled-components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Front />
        </ThemeProvider>
      </Provider>
    );
  }
}