import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Containers
import App from './containers/app.container';
import { Provider } from 'react-redux';

// Redux store
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);