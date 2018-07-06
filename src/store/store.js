import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import { loggedUserReducer } from '../reducers/loggedUserReducer'
import loggedUserReducer from '../reducers/loggedUserReducer'
const reducers = combineReducers({loggedUserState:loggedUserReducer})
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	reduxDevtools
))
export default store
