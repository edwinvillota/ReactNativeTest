import {SET_LOADING, GET_USERS} from '../actions/usersActions';

const initialState = {
  loading: false,
  users: [],
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    default:
      return state;
  }
}
