import {StyleSheet} from 'react-native';
import {Theme, Colors} from 'styles';

const UserPropsStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  propWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  propName: {
    ...Theme.fontFamily,
    fontWeight: 'bold',
    fontSize: 16,
  },
  propValue: {
    ...Theme.fontFamily,
    fontSize: 16,
  },
});

export default UserPropsStyles;
