import {StyleSheet} from 'react-native';
import {Theme, Colors} from 'styles';

const UserItemStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 10,
    marginBottom: 20,
  },
  text: {
    ...Theme.fontFamily,
    fontSize: 16,
  },
});

export default UserItemStyles;
