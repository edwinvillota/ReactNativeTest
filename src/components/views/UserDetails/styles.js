import {StyleSheet} from 'react-native';
import {Theme, Colors} from 'styles';

const UserDetailsStyles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 40,
  },
  name: {
    ...Theme.fontFamily,
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 20,
  },
});

export default UserDetailsStyles;
