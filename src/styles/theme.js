import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#65D9E4',
  secondary: '#2D2C3C',
};

const Theme = StyleSheet.create({
  header: {
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 45,
    color: Colors.secondary,
  },
  fontFamily: {
    fontFamily: 'arial',
  },
  primaryTextColor: {
    color: Colors.primary,
  },
  secondaryTextColor: {
    color: Colors.secondary,
  },
});

export default Theme;
