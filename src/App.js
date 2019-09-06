import 'config/reactotron';
import React from 'react';
import GlobalStyle from 'styles/global';
import ReduxToastr from 'react-redux-toastr';

import { Provider } from 'react-redux';
import store from 'store';
import Routes from 'routes';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
      <ReduxToastr
        position="top-center"
        timeOut={3000}
        transitionIn="bounceInDown"
        transitionOut="bounceOutUp"
        progressBar
        closeOnToastrClick
      />
    </>
  </Provider>
);

export default App;
