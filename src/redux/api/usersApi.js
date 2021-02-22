export const getAllUsers = async () => {
  try {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};
