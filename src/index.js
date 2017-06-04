import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import Header from './components/Header';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
      </Provider>
    </AppContainer>,
    document.querySelector('.container')
  )};

  render(App);

if(module.hot) {
  module.hot.accept('./containers/App.js', () => {
      render(App)
    });
}