import {combineReducers} from 'redux';
import usersReducer from 'reducers/usersReducer';

const AppReducers = combineReducers({
  usersReducer,
});

export default AppReducers;
