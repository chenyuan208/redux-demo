import { combineReducers } from 'redux'
import { SET_USER } from '../actions/actions'
import { routerReducer } from 'react-router-redux'

function user(state = { userName: '', password: '' }, action) {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, action.payload)

        default:
            return state
    }
}

function component(state = { result: { result: [] }, entities: { result: {} } }, action) {
    switch (action.type) {
        case 'LOAD_LIST':
            return {...state, ...action.payload }
        default:
            return state
    }
}
const todoApp = combineReducers({
    user,
    component,
    routing: routerReducer
})

export default todoApp