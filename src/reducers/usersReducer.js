import {SET_USER_LIST} from 'types';

const initialState = {
  isLoading: false,
  userList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
}
