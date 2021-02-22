import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';

const UserItem = ({name}) => {
  return (
    <TouchableOpacity style={Styles.wrapper}>
      <Text style={Styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserItem;
