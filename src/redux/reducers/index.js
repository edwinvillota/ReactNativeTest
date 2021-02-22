import {combineReducers} from 'redux';
import users from '@redux/reducers/usersReducer';

const AppReducers = combineReducers({
  users,
});

export default AppReducers;
