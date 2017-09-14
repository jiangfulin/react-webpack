/**
 * Created by mlamp on 2017/9/14.
 */
//公共JS
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import {Provider, connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {syncHistoryWithStore, routerReducer, routerMiddleware, push} from 'react-router-redux';
import {Router, Route, IndexRoute, Link, IndexRedirect, hashHistory} from 'react-router';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import {createSelector} from 'reselect';
const logger = createLogger({
    // ...options
});

//中间件
const middleware = routerMiddleware(hashHistory);

//store创建工具
const storeCreateByReducer = reducers => {
    return createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        }),
        applyMiddleware(middleware, thunkMiddleware, logger)
    );
};

//history创建工具
const historyCreateByStore = store=> syncHistoryWithStore(hashHistory, store);

export {
    $,
    React,
    ReactDOM,
    Immutable,
    PureRenderMixin,
    combineReducers,
    Provider,
    connect,
    promise,
    createSelector,
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Link,
    storeCreateByReducer,
    historyCreateByStore,
}