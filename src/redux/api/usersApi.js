import Config from 'react-native-config';

export const getAllUsers = async () => {
  try {
    const users = await fetch(Config.USERS_API_URL);
    const data = await users.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};
