import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../Reducers/userReducer'
import notesReducer from '../Reducers/notesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: userReducer,
        notes:notesReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore