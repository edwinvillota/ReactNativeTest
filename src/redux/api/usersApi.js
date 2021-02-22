import Config from 'react-native-config';
import {User} from '@types';

// @flow
export const getAllUsers = async () => {
  try {
    const users = await fetch(Config.USERS_API_URL);
    const data: Array<User> = await users.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};
