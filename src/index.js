import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route} from 'react-router-dom'

import reducers from './reducer'
import './config'
import './index.css'
import Login from './container/login/login'
import Register from './container/register/register'
 import AuthRoute from './component/authroute/authroute'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));


    ReactDOM.render(
    (<Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </div>
      </BrowserRouter>
    </Provider>), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
