import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';

// @flow
type Props = {
  attributes: Array<{name: string, value: string}>,
};

const UserProps = ({attributes}: Props) => {
  return (
    <View style={Styles.container}>
      {attributes.map((a) => (
        <View style={Styles.propWrapper}>
          <Text style={Styles.propName}>{a.name}</Text>
          <Text style={Styles.propValue}>{a.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default UserProps;
