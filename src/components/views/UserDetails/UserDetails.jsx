import React from 'react';
import {View, Text} from 'react-native';
import {UserProps} from 'components/molecules';
import Styles from './styles';

const UserDetails = ({route}) => {
  const {user} = route.params;
  return (
    <View style={Styles.view}>
      <Text style={Styles.name}>{user.name}</Text>
      <UserProps
        attributes={[
          {name: 'Username', value: user.username},
          {name: 'Email', value: user.email},
          {name: 'City', value: user.address.city},
          {name: 'Website', value: user.website},
          {name: 'Company', value: user.company.name},
        ]}
      />
    </View>
  );
};

export default UserDetails;
