import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from './styles';
import {User} from '@types';

// @flow
type Props = {
  user: User,
};

const UserItem = ({user}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={Styles.wrapper}
      onPress={() => {
        navigation.navigate('UserDetails', {user});
      }}>
      <Text style={Styles.text}>{user.name}</Text>
    </TouchableOpacity>
  );
};

export default UserItem;
