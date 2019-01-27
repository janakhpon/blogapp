import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import promise from "redux-promise"
import './index.css';

import reducers from "./reducers";
import Index from './components/postIndex'
import New from './components/postNew'
import Show from './components/postShow'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={New} />
          <Route path="/posts/:id" component={Show} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
    document.querySelector('#root')
);