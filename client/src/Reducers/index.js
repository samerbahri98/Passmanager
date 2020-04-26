import { combineReducers } from 'redux'
import websiteReducer from './websiteReducer'

export default combineReducers({
    websites: websiteReducer
})

