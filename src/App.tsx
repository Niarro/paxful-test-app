import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store } from 'store/store';
import { AppContainer } from 'modules/ui/molecules/AppContainer/AppContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
