import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { globalStore, persistor } from './redux/store/global.store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={globalStore}>
    <PersistGate loading={''} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
